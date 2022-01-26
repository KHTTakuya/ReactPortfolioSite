import React, {useRef, useState} from "react";
import emailjs, {init} from '@emailjs/browser';
import {Container, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";


export const ContactForm = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [question, setQuestion] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const handleChange = (event) => {
        setQuestion(event.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const service_id = process.env.REACT_APP_SERVICE_ID;
        const template_id =process.env.REACT_APP_TEMPLATE_ID;
        const user_id = process.env.REACT_APP_USER_ID;

        emailjs.sendForm(service_id, template_id, e.target,user_id)
            .then((result) => {
                window.alert('お問い合わせを送信致しました。');
                console.log(result.text);
            }, (error) => {
                window.alert('エラーが発生しました。もう一度お問い合わせ内容をご確認ください。');
                console.log(error.text);
            });
        setName('')
        setMail('')
        setQuestion('')
        setMessage('')
        e.target.reset()
    }

    const disableSend =
        name === '' || mail === '' || question === '' || message === '';

    return (
        <Container >
            <div className="form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <TextField className="contact-parts" labelId="question-name" fullWidth label="名前" id="fullWidth"
                               required name="to_name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <TextField className="contact-parts" fullWidth label="メールアドレス" id="fullWidth"
                                               required name="user_email" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                    <FormControl fullWidth>
                        <InputLabel id="select-label" style={{paddingTop: '20px'}}>お問い合わせ内容</InputLabel>
                        <Select
                            required
                            name="question"
                            className="contact-parts"
                            labelId="select-label"
                            id="simple-select"
                            value={question}
                            label="お問い合わせ内容"
                            onChange={handleChange}
                        >
                            <MenuItem value={"ポートフォリオに関して"}>ポートフォリオに関して</MenuItem>
                            <MenuItem value={"採用に関して"}>採用に関して</MenuItem>
                            <MenuItem value={"その他質問に関して"}>その他質問に関して</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField required className="contact-parts" fullWidth multiline rows={7} label="テキスト" name="message" id="fullWidth"
                    value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    <Button type='submit' className="contact-parts"
                            variant="contained" endIcon={<SendIcon />} fullWidth disabled={disableSend}>
                        送信
                    </Button>
                </form>
            </div>
        </Container>
    );
}
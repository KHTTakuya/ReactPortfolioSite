import React from "react";
import {ContactTop} from "./ContactTop";
import {Container} from "@mui/material";
import {ContactForm} from "./ContactForm";


export const Contact = () => {
    return (
        <Container maxWidth="xl" className="contact-con">
            <ContactTop />
            <div className="comment-content">
                <p>ポートフォリオに関しての質問や採用に関して質問など受け付けております。</p>
                <p>もし気になりましたら是非お問い合わせください。</p>
            </div>
            <ContactForm />
        </Container>
    );
}
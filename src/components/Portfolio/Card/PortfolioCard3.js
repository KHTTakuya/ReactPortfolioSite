import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardMedia} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import pc from "./cardImg/pc.png";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export const PortfolioCard3 = () =>{
    return (
        <Card sx={{ width: 350 }}>
            <CardMedia
                component="img"
                height="200"
                image={pc}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    その他成果物
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    主要言語：React, RestFramework etc...
                </Typography>
                <Typography variant="body2">
                    他にも様々なWebサイトや<br/>
                    アプリケーションの開発をしています。<br />
                    是非ボタンをクリックして見てください！<br/>
                    <br/>
                </Typography>
            </CardContent>
            <CardActions>
                <Button startIcon={<GitHubIcon/>} size="small" variant="contained" target="_blank" href="https://github.com/KHTTakuya">
                    Go Github
                </Button>
                <Button startIcon={<PreviewIcon/>} size="small" variant="contained" target="_blank" href="https://qiita.com/KHTTakuya">
                    Go Qiita
                </Button>
            </CardActions>
        </Card>
    );
}
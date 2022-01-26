import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardMedia} from "@mui/material";

import website from './cardImg/website.png'
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from '@mui/icons-material/Web';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export const PortfolioCard2 = () =>{
    return (
        <Card sx={{ width: 350 }}>
            <CardMedia
                component="img"
                height="200"
                image={website}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    Proheter
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    主要言語：Python
                </Typography>
                <Typography variant="body2">
                    フレームワーク：Django, Bootstrap<br />
                    自分が作成したモデルを広めたい思いから作成した、
                    競馬予想モデルを使用した予想サイト。<br/>
                    <br/>
                </Typography>
            </CardContent>
            <CardActions>
                <Button startIcon={<GitHubIcon/>} size="small" variant="contained" target="_blank" href="https://github.com/KHTTakuya/PredictionWebSite">
                    Go Github
                </Button>
                <Button startIcon={<WebIcon/>} size="small" variant="contained" target="_blank" href="https://django-keiba-site.herokuapp.com/">
                    Go WebSite
                </Button>
            </CardActions>
        </Card>
    );
}
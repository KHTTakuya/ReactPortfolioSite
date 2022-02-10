import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import uma from "./cardImg/blog.png"
import {CardMedia} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from '@mui/icons-material/Preview';

export const PortfolioCard4 = () => {
    return (
        <Card sx={{ width: 350 }}>
            <CardMedia
                component="img"
                height="200"
                image={uma}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    ブログサイト-Brew&Drip
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    主要言語：JavaScript, DRF
                </Typography>
                <Typography variant="body2">
                    フレームワーク：JavaScript, DjangoRestFramework<br />
                    フロントエンドにReact, バックエンドにDRFを使用してAWSでデプロイしたブログサイトです。<br/>
                </Typography>
            </CardContent>
            <CardActions>
                <Button startIcon={<PreviewIcon/>} size="small" variant="contained" target="_blank" href="https://blog.dh84hlb3q8tbk.amplifyapp.com/">
                    Go WebSite
                </Button>
                <Button startIcon={<GitHubIcon/>} size="small" variant="contained" target="_blank" href="https://github.com/KHTTakuya/DjangoRestFrameWorkBlogBackEnd">
                    Go Github
                </Button>
            </CardActions>
        </Card>
    );
}
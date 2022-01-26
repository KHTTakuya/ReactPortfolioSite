import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import uma from "./cardImg/uma.png"
import {CardMedia} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from '@mui/icons-material/Preview';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export const PortfolioCard1 = () => {
    return (
        <Card sx={{ width: 350 }}>
            <CardMedia
                component="img"
                height="200"
                image={uma}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    競馬予想モデル
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    主要言語：Python
                </Typography>
                <Typography variant="body2">
                    フレームワーク：pandas, numpy,
                    matplotlib, lightGBM, Tensorflow<br />
                    深層学習と機械学習を用いたモデル、詳しい説明はQiitaにて行っています。<br/>
                </Typography>
            </CardContent>
            <CardActions>
                <Button startIcon={<GitHubIcon/>} size="small" variant="contained" target="_blank" href="https://github.com/KHTTakuya/KeibaPrediction">
                    Go Github
                </Button>
                <Button startIcon={<PreviewIcon/>} size="small" variant="contained" target="_blank" href="https://qiita.com/KHTTakuya/items/35ea5e710f0fb3aa86e4">
                    Go Qiita
                </Button>
            </CardActions>
        </Card>
    );
}
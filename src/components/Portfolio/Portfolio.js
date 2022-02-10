import React from "react";
import {PortfolioTop} from "./PortfolioTop";
import {PortfolioCard1} from "./Card/PortfolioCard1";
import {PortfolioCard2} from "./Card/PortfolioCard2";
import {PortfolioCard3} from "./Card/PortfolioCard3";
import {PortfolioCard4} from "./Card/PortfolioCard4";

import {Grid} from "@mui/material";
import {Container} from "@mui/material";

import './Portfolio.scss'

export const Portfolio = () => {
    return (
        <Container maxWidth="xl" className="portfolio-con">
            <PortfolioTop />
            <Grid container spacing={5} justifyContent="center" className="grid-content">
                <Grid item>
                    <PortfolioCard4 />
                </Grid>
                <Grid item>
                    <PortfolioCard1 />
                </Grid>
                <Grid item>
                    <PortfolioCard2 />
                </Grid>
                <Grid item>
                    <PortfolioCard3 />
                </Grid>
            </Grid>
        </Container>

    );
}
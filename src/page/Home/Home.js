import React from "react";
import "./Home.scss"

import {NavBar} from "../../components/NavBar/NavBar";
import TopTitle from "../../components/TopTitle/TopTitle";
import {About} from "../../components/About/About";
import {Portfolio} from "../../components/Portfolio/Portfolio";
import {Contact} from "../../components/Contact/Contact";
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";

export const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" to="/">
                T_TAKUYA
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};


export const Home = () => {
    return (
        <div>
            <div id="home" className="home">
                <NavBar />
                <div className="top-container">
                    <TopTitle />
                    <div className="top-p">
                        <p>ようこそ私のポートフォリオサイトへ</p>
                    </div>
                </div>
            </div>

            <div className="about-container">
                <About />
            </div>
            <div>
                <Portfolio />
            </div>
            <div>
                <Contact />
            </div>
            <div style={{marginTop: "20px"}}>
                <Copyright />
            </div>

        </div>
    )
}
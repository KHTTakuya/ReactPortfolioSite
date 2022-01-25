import React from "react";
import "./Home.scss"

import {NavBar} from "../../components/NavBar/NavBar";
import TopTitle from "../../components/TopTitle/TopTitle";
import {About} from "../../components/About/About";


export const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <div className="top-container">
                <TopTitle />
                <div className="top-p">
                    <p>ようこそ私のポートフォリオサイトへ</p>
                </div>
            </div>
            <div className="about-container">
                <About />
            </div>


        </div>
    )
}
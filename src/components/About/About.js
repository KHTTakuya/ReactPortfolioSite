import React, {useState, useEffect} from "react";
import {Container} from "@mui/material";
import {Grid} from "@mui/material";

import {AboutTop} from "./AboutTop";
import AboutImg from "./AboutImg";
import "./About.scss"


export const About = () => {
    return (
        <Container maxWidth="xl" className="main-box">
            <AboutTop name="About me - 私について" />
            <Grid container spacing={1}
                  justifyContent="center">
                <Grid item md={12} lg={5} className="about-box box-font" spacing={3}>
                    <AboutImg />
                </Grid>
                <Grid item md={12} lg={7} className="about-box">
                    <div className="about-page">
                        <h2>経歴</h2>
                        <ul>
                            <li>■ 平成29年4月：福岡大学　商学部　商学科　入学</li>
                            <li>■ 令和03年3月：福岡大学　商学部　商学科　卒業</li>
                            <li>■ 令和04年3月：健康食品の通信販売の会社に入社</li>
                            <li>■ 令和04年9月：一身上の都合により退社</li>
                        </ul>
                        <p>
                            &ensp;大学卒業後、健康食品の通信販売の会社に入社し、新人研修終了後販売促進部マーケティング担当に配属しました。<br/>
                            &ensp;Webでの売り上げを上げるためECモール・LPの新規立ち上げを任されました。0からのスタートだったので知識をつけるため上司にお願いし、
                            主体的にセミナーの参加や専門書を読み、分からない所は他部署の社員にアドバイスを頂き、 時には営業担当に電話して繫盛しているサイトや商品の情報を教えてもらいながら、
                            お客様が納得し購入していただけるようなECモール・LPを立ち上げる経験をしました。
                        </p>
                        <p>
                            &ensp;退職後、Webエンジニアの仕事に興味をもちPythonやReactといったプログラミング言語を独学で学んでいます。
                            積極的にアウトプットするために、Webサイトや予想モデルなどといった作品を作成をしています。
                        </p>
                    </div>
                    <div className="about-page">
                        <h2>使用言語</h2>
                        <ul>
                            <li>■ Python</li>
                            <li>■ Django</li>
                            <li>■ Django Rest Framework</li>
                            <li>■ React</li>
                            <li>■ HTML-CSS</li>
                        </ul>
                        <p>
                            今後は今学んでいる言語をさらに磨きをかけていくのと同時に、
                            PHP、Go、Rubyといった言語を学んでいきたいです。
                        </p>
                    </div>
                </Grid>
            </Grid>

        </Container>
    );
}
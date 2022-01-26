import React, {useState, useEffect} from "react";
import { Link as Scroll } from 'react-scroll';
import "./NavBar.scss"
import logoImag from "./logo.png"

export const useScrollHandler = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = () => window.scrollY > 10;
            setScroll(scrollCheck);
        };

        document.addEventListener("scroll", onScroll);
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [scroll, setScroll]);

    return scroll;
};


export const NavBar = () =>{
    const scroll = useScrollHandler()
    return (
        <div className={`nav-header ${scroll ? 'sticky' : ''}`}>
            <a href="/" className="logo-a"><img className="logo" src={logoImag} alt="logo"/></a>
            <ul>
                <Scroll to="home" smooth={true} offset={-10}>
                    <li>Home</li>
                </Scroll>
                <Scroll to="about" smooth={true} offset={-70}>
                    <li>About</li>
                </Scroll>
                <Scroll to="portfolio" smooth={true} offset={-70}>
                    <li>Portfolio</li>
                </Scroll>
                <Scroll to="contact" smooth={true} offset={-70}>
                    <li>Contact</li>
                </Scroll>
            </ul>
        </div>
    );
}
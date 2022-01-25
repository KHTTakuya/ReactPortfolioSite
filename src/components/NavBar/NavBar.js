import React, {useState, useEffect} from "react";
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
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    );
}
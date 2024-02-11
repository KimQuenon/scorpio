'use client'
import Link from "next/link";
import { useRef } from 'react';
import "./navbar.css";
import Image from "next/image"

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Store', href: '/store', current: false },
    { name: 'Contact', href: '/contact', current: false },
];

export default function NavBar() {
    // tu ne peux pas faire de référence au DOM comme en JS vanila, tu vas donc avoir besoin du hook useRef et ton component doit être client
    // ref permet de stocker une référence à un élément du DOM, tu initialises ta ref avec le hook useRef()
    // dans ton code jsx, tu vas référencer ton élément avec l'attribut ref et tu le lies à ta constante 
    const burger = useRef(null)
    const menuMobile = useRef(null)

    // Ouvrir/Fermer le menu lorsque clic sur le burger
    const handleClick = () => {
        // console.log("j'ai cliqué")
        const isMenuOpen = menuMobile.current.classList.contains('open');

        if (isMenuOpen) {
            menuMobile.current.classList.remove('open');
            burger.current.classList.remove('open-burger');
        } else {
            menuMobile.current.classList.add('open');
            burger.current.classList.add('open-burger');
        }
    }

     // Fermer le menu lorsque vous cliquez sur un élément de la navigation
    const handleNavigationClick = () => {
        menuMobile.current.classList.remove('open');
        burger.current.classList.remove('open-burger');
    };

    return (
        <>
        <div id="menuMobile" ref={menuMobile}>
            <nav>
                <ul>
                    <li>
                        <Link href="/" onClick={handleNavigationClick}>HOME</Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={handleNavigationClick}>ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/store" onClick={handleNavigationClick}>STORE</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleNavigationClick}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <header>
            <li id="logoMobile">
                <Image width="50" height="70" src="/images/logo.jpg" alt="logo" />
            </li>
            <nav>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Image width="50" height="70" src="/images/logo.jpg" alt="logo" />
                    </li>
                    <li>
                        <Link href="/store">STORE</Link>
                    </li>
                    <li>
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
            <div id="burger" ref={burger} onClick={handleClick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
        </>
    );
}
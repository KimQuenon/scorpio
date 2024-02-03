import Link from "next/link";
import { Fragment } from 'react';
import "./navbar.css";
import Image from "next/image"

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Store', href: '/store', current: false },
    { name: 'Contact', href: '/contact', current: false },
];

export default function NavBar() {
    return (
        <>
        <div id="menuMobile">
            <nav>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/store">STORE</Link>
                    </li>
                    <li>
                        <Link href="/contact">CONTACT</Link>
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
            <div id="burger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </header>
        </>
    );
}
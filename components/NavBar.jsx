import Link from "next/link";
import { Fragment } from 'react';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Store', href: '/store', current: false },
    { name: 'Contact', href: '/contact', current: false },
];

export default function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/store">Store</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

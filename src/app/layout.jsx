import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'
import { inria } from "./fonts"

export default function RootLayout({children}) {
    return (
        <html lang="fr" className={inria.className}>
            <body >
                <NavBar />
                <main>
                    {children}
                </main>
                <footer>
                    <Footer/>
                </footer>
            </body>
        </html>
    )
}
import NavBar from '@/components/NavBar'
import './globals.css'
import { inria } from "./fonts"

export default function RootLayout({children}) {
    return (
        <html lang="fr" className={inria.className}>
            <body >
                <header>
                   <NavBar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    Footer
                </footer>
            </body>
        </html>
    )
}
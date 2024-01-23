import NavBar from '@/components/NavBar'

export default function RootLayout({children}) {
    return (
        <html lang="fr">
            <body>
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
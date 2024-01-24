import { Inria_Sans } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'


export const inria = Inria_Sans(
    {
        subsets: ['latin'],
        weight: '300',
    }
)

export const playfair = Playfair_Display(
    {
        subsets: ['latin'],
        weight: '700',
    }
)
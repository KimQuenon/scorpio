import { getJewels } from '@/lib/jewel'
import Image from 'next/image'
import Link from 'next/link'
import Cards from "@/components/Cards";
import { playfair } from "@/src/app/fonts";


export const metadata = {
    title:"Jewels"
}

export default async function StorePage()
{
    const jewels = await getJewels()
    return(
        <>
            <div className="slide" id="latest">
                <div className="container">
                    <div className="home_text">
                        <div className="home_intro">
                            <h2 className={playfair.className}>SHOP ONLINE</h2>
                            <hr/>
                            <p className="text-brown">Discover the epitome of elegance with our newest additions to the collection. Explore the latest trends and timeless classics that have just arrived at our online jewelry store. From captivating designs to exquisite craftsmanship, each piece tells a unique story. </p>
                        </div>
                    </div>
                    <Cards jewels={jewels} displayCount={5} />
                </div>
            </div>
        </>
    )
}
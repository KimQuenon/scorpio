import { getJewels } from '@/lib/jewel'
import Image from 'next/image'
import Link from 'next/link'
import Cards from "@/components/Cards";


export const metadata = {
    title:"Jewels"
}

export default async function StorePage()
{
    const jewels = await getJewels()
    return(
        <>
            <h1>Store</h1>
            <p>Here we&apos;ll list all the reviews</p>
            <div className='container'>

                <Cards jewels={jewels} displayCount={5} />
            </div>
        </>
    )
}
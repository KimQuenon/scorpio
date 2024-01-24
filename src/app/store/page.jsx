import { getJewels } from '@/lib/jewel'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title:"Jewels"
}

export default async function StorePage()
{
    const jewels = await getJewels(2)
    return(
        <>
            <h1>Store</h1>
            <p>Here we&apos;ll list all the reviews</p>
            <ul className='flex flex-col gap-3'>
                {jewels.map((jewel) => (
                    <li key={jewel.id}>
                        <Link href={`/store/${jewel.id}`}>
                            {/* <Image  width="380" height="180" src={review.image} alt={`ìmage de ${review.title}`} className='rounded-t' /> */}
                            <h2>{jewel.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
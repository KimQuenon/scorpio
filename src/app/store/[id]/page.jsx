import { getJewel, getSlugs } from "@/lib/jewel"

export async function generateStaticParams() {
    const slugs = await getSlugs()
    return slugs.map((id) => ({id}))
}

export async function generateMetadata(props){
    const jewel = await getJewel(props.params.id)
    return {
        title: jewel.title
    }
}

export default async function JewelPage({params: {id}})
{
   const jewel = await getJewel(id)


    return (
        <>
            <h1>{jewel.title}</h1>
        </>
    )
}
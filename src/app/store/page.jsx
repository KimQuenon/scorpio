"use client"
import { useState, useEffect } from "react";
import { getJewels } from '@/lib/jewel'
import Image from 'next/image'
import Link from 'next/link'
import Cards from "@/components/Cards";
import Pagination from "@/components/Pagination";
import { playfair } from "@/src/app/fonts";


// export const metadata = {
//     title:"Jewels"
// }

export default function StorePage()
{
    // const jewels = await getJewels()

    const [ products, setProducts] = useState([])
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage= 3

    const fetchData = async () => {
        const jewels = await getJewels(5)
        setProducts(jewels);
      };
    
    useEffect(() => {
    fetchData();
    }, []);

    const filteredJewels = products.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.brand.toLowerCase().includes(search.toLowerCase())
      );

    const paginatedProducts = Pagination.getData(
        filteredJewels,
        currentPage,
        itemsPerPage
      );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

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
                    <div className="home_latest">
                        {paginatedProducts.map((jewel) => (
                            <div key={jewel.id}>
                            <Link href={`/store/${jewel.id}`}>
                                <Image width="400" height="400" src={jewel.image} alt={`ìmage de ${jewel.title}`} />
                                <div className="cards_title">
                                <div className="cards_text">
                                    <h3 className="bold">{jewel.title}</h3>
                                    <p>{jewel.brand}</p>
                                    <p>{jewel.price} €</p>
                                </div>
                                <div className="cards_arrow">
                                    <p>&gt;</p>
                                </div>
                                </div>
                            </Link>
                            </div>
                        ))}
                    </div>
                    <Pagination 
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        length={products.length}
                        onPageChanged={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}
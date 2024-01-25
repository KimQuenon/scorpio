import { playfair } from "./fonts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import Link from "next/link";
import { getJewels } from '@/lib/jewel'

export default async function HomePage() {

    const jewels = await getJewels(3)

    return (
       <>
        <div className="slide" id="homepage">
            <div className="container">
                <div className="home_content">
                    <div className="home_title"></div>
                    <div className="home_text">
                        <div className="home_intro">
                            <h1 className={playfair.className}>&quot;In the dance of light and precious metals,</h1>
                            <h1 className={playfair.className}>find the rhythm of sophistication.&quot;</h1>
                            <hr className="hr-white"/>
                            <p>Step into a world of timeless elegance at our boutique. Discover handcrafted treasures that redefine sophistication and elevate your style with every piece.</p>
                        </div>
                        <div className="home_btn">
                            <button className="btn white"><Link href="/store">BROWSE OUR SHOP &gt;</Link></button>
                            <button className="btn transparent"><Link href="/about">ABOUT US &gt;</Link></button>
                        </div>
                    </div>
                </div>
                <div className="social_media">
                    <div className="social_media_box">
                        <FontAwesomeIcon icon={faFacebook} color="white" />
                        <FontAwesomeIcon icon={faTwitter} color="white"/>
                        <FontAwesomeIcon icon={faInstagram} color="white"/>
                        <FontAwesomeIcon icon={faTiktok} color="white"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="slide" id="latest">
            <div className="container">
                <div className="home_text">
                    <div className="home_intro">
                        <h2 className={playfair.className}>LATEST ARRIVALS</h2>
                        <hr/>
                        <p className="text-brown">Discover the epitome of elegance with our newest additions to the collection. Explore the latest trends and timeless classics that have just arrived at our online jewelry store. From captivating designs to exquisite craftsmanship, each piece tells a unique story. </p>
                    </div>
                    <div className="home_subbtn">
                        <button className="btn white sub"><Link href="/store">VIEW ALL &gt;</Link></button>
                    </div>
                </div>
                <div className="home_latest">
                    {jewels.map((jewel) => (
                        <div key={jewel.id}>
                            <Link href={`/store/${jewel.id}`}>
                                <Image  width="400" height="400" src={jewel.image} alt={`ìmage de ${jewel.title}`} className='rounded-t' />
                                <div className="cards_title">
                                    <div className="cards_text">
                                        <p className="bold">{jewel.title}</p>
                                        <p>{jewel.brand}</p>
                                        <p>{jewel.price} €</p>
                                    </div>
                                    <div className="cards_arrow">
                                        <p className={playfair.className}>&gt;</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
       </>
    )
}
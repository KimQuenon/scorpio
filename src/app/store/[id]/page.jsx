import { getJewel/*, getSlugs*/ } from "@/lib/jewel"
import Image from 'next/image';
import Link from 'next/link';
import { playfair } from "@/src/app/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons' 

// export async function generateStaticParams() {
//     const slugs = await getSlugs() 
//     return slugs.map((id) => ({id}))
// }

export async function generateMetadata(id) {
    const jewel = await getJewel(id)
    return {
        title: jewel.title
    }
}

export default async function JewelPage({ params: { id } }) {
    const jewel = await getJewel(id)

    const renderRatingStars = (rating) => {
        const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
        const remainder = rating - fullStars; // Partie décimale pour les étoiles partielles
    
        const stars = [];
    
        // Ajoute les étoiles pleines
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i}>&#9733;</span>);
        }
    
        // Ajoute les étoiles partielles
        if (remainder >= 0.75) {
            stars.push(<span key="partial" style={{ width: "75%" }}>&#9733;</span>);
        } else if (remainder >= 0.5) {
            stars.push(<span key="partial" style={{ width: "50%" }}>&#9733;</span>);
        } else if (remainder >= 0.25) {
            stars.push(<span key="partial" style={{ width: "25%" }}>&#9733;</span>);
        }
    
        // Ajoute les étoiles vides restantes
        const emptyStarsCount = 5 - stars.length;
        for (let i = 0; i < emptyStarsCount; i++) {
            stars.push(<span key={fullStars + i}>&#9734;</span>);
        }
    
        return stars;
    };
    
    return (
        <>
            <div className="slide" id="individual_display">
                <div className="container">
                    <div className="display_box">
                        <div className="img">
                            <Image width="630" height="630" src={jewel.image} alt={`ìmage de ${jewel.title}`} />
                        </div>
                    </div>
                    <div className="display_box">
                        <Link href="/store">&lt; Back to the store</Link>
                        <div className="display_title">
                            <h1 className={playfair.className}>{jewel.title}</h1>
                            <div className="stars">{renderRatingStars(jewel.rating)}</div>
                        </div>
                        <p>{jewel.brand}</p>
                        <hr></hr>
                        <p className="bold">Description:</p>
                        <p>{jewel.description}</p>
                        <div className="price">
                            <p className={playfair.className}>€ {jewel.price},00</p>
                        </div>
                        <div className="cart">
                            <button className="btn brown large"><Link href="/#">ADD TO CART &gt;</Link></button>
                            <FontAwesomeIcon icon={faHeart} style={{ marginLeft: '15px' }} />
                        </div>
                        <div className="payment">
                            <div className="payment_method" id="mastercard"></div>
                            <div className="payment_method" id="visa"></div>
                            <div className="payment_method" id="paypal"></div>
                            <div className="payment_method" id="google"></div>
                            <div className="payment_method" id="apple"></div>
                        </div>
                        <div className="payment_info">
                            <p>* Enjoy a diverse range of payment methods to make your shopping experience as smooth as possible. Pay quickly and securely with PayPal, the most widely used online payment solution in the world. Prefer to use your credit card? We accept major cards for fast and secure transactions.</p>
                            <p>If you prefer flexibility, opt for our installment payment option, allowing you to split your payment into installments to make your purchases more accessible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
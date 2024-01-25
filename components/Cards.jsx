import Image from 'next/image';
import Link from 'next/link';


const Cards = ({ jewels, displayCount }) => {
  return (
    <div className="home_latest">
      {jewels.slice(0, displayCount).map((jewel) => (
        <div key={jewel.id}>
          <Link href={`/store/${jewel.id}`}>
            <Image width="400" height="400" src={jewel.image} alt={`ìmage de ${jewel.title}`} className="rounded-t" />
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
  );
};

export default Cards;

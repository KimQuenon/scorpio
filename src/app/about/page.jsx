import Image from "next/image"
import Link from "next/link";

export default function AboutPage()
{
    return(
        <>
            <div className="slide" id="about">
                <div className="about_content">
                    <div className="about_container">
                        <div className="about_title">
                            <div className="about_logo"></div>
                        </div>
                        <div className="about_text">
                            <p>At Scorpio, elegance meets craftsmanship. Since 2023, we&apos;ve curated timeless pieces that reflect sophistication and individuality. Our journey began with a vision to redefine elegance, blending traditional artistry with modern sensibilities.</p>
                            <p>As a company rooted in integrity and authenticity, we believe in fostering meaningful connections with our customers. Our dedicated team is committed to providing personalized service and memorable experiences that exceed expectations.</p>
                            <p>Thank you for choosing Scorpio as your destination for style and elegance.</p>
                        </div>
                        <div className="about_btn">
                            <button className="btn sub transparent"><Link href="/"> &lt; HOME </Link></button>
                            <button className="btn sub brown"><Link href="/store"> STORE &gt; </Link></button>
                        </div>
                    </div>
                </div>
                <div className="about_img"></div>
            </div>
        </>
    )
}
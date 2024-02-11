import { playfair } from "@/src/app/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export const metadata={
    title:"Scorpio - Contact"
}

export default function ContactPage()
{
    return(
        <>
            <div className="slide" id="contact">
                <div className="contact_container">
                    <div className="contact_img"></div>
                    <div className="contact_content">
                        <h2 className={playfair.className}>KEEP IN TOUCH</h2>
                        <hr/>
                        <div className="contact_locations">
                            <div className="locations">
                                <div className="contact_subdiv">
                                    <div className="contact_icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#2D130A"/>
                                    </div>
                                    <div className="contact_text">
                                        <p className="bold">1410 WATERLOO</p>
                                        <p>Rue Garnier 146</p>
                                    </div>
                                </div>
                                <div className="contact_subdiv">
                                    <div className="contact_icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#2D130A"/>
                                    </div>
                                    <div className="contact_text">
                                        <p className="bold">1420 BRAINE-L&apos;ALLEUD</p>
                                        <p>Rue du Bailly 93B</p>
                                    </div>
                                </div>
                                <div className="contact_subdiv">
                                    <div className="contact_icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#2D130A"/>
                                    </div>
                                    <div className="contact_text">
                                        <p className="bold">1440 BRAINE-LE-CHÂTEAU</p>
                                        <p>Rue du Cimetière 18</p>
                                    </div>
                                </div>
                                <div className="contact_subdiv">
                                    <div className="contact_icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#2D130A"/>
                                    </div>
                                    <div className="contact_text">
                                        <p className="bold">1480 TUBIZE</p>
                                        <p>Rue du Village 39</p>
                                    </div>
                                </div>
                            </div>
                            <div className="locations">
                                <div className="contact_subdiv">
                                    <div className="contact_icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#2D130A"/>
                                    </div>
                                    <div className="contact_text">
                                        <p className="bold">1180 UCCLE</p>
                                        <p>Carrefour des Drèves 208</p>
                                    </div>
                                </div>
                                <div className="contact_subdiv">
                                    <div className="contact_icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#2D130A"/>
                                    </div>
                                    <div className="contact_text">
                                        <p className="bold">1640 RHODE-SAINT-GENESE</p>
                                        <p>Avenue du Golf 40</p>
                                    </div>
                                </div>
                                <div className="contact_subdiv">
                                    <div className="contact_icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#2D130A"/>
                                    </div>
                                    <div className="contact_text">
                                        <p className="bold">7100 LA LOUVIERE</p>
                                        <p>Rue du Champ Perdu 50</p>
                                    </div>
                                </div>
                                <div className="contact_subdiv">
                                    <div className="contact_icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#2D130A"/>
                                    </div>
                                    <div className="contact_text">
                                        <p className="bold">7850 ENGHIEN</p>
                                        <p>Rue de la Rochelle 84</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_social_media">
                            <div className="contact_subdiv">
                                <div className="contact_icon">
                                    <FontAwesomeIcon icon={faFacebook} color="#2D130A"/>
                                </div>
                                <div className="contact_text">
                                        <p className="bold">@scorpio_store</p>
                                    </div>
                            </div>
                            <div className="contact_subdiv">
                                <div className="contact_icon">
                                    <FontAwesomeIcon icon={faTwitter} color="#2D130A"/>
                                </div>
                                <div className="contact_text">
                                        <p className="bold">@scorpio_store</p>
                                    </div>
                            </div>
                            <div className="contact_subdiv">
                                <div className="contact_icon">
                                    <FontAwesomeIcon icon={faInstagram} color="#2D130A"/>
                                </div>
                                <div className="contact_text">
                                        <p className="bold">@scorpio_store</p>
                                    </div>
                            </div>
                            <div className="contact_subdiv">
                                <div className="contact_icon">
                                    <FontAwesomeIcon icon={faTiktok} color="#2D130A"/>
                                </div>
                                <div className="contact_text">
                                        <p className="bold">@scorpio_store</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
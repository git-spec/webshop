/** fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPinterest,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
/** styles */
import styles from "./footer.module.sass";

/**
 * Footer
 * @return {JSX.Element}
 */
const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <a href="#">AGB</a>
                </li>
                <li>
                    <a href="#">Impressum</a>
                </li>
                <li>
                    <a href="#">Kontakt</a>
                </li>
            </ul>
            <ul className={styles.smlist}>
                <li>
                    <a href="#" className="icon pinterest">
                        <FontAwesomeIcon icon={faPinterest} />
                    </a>
                </li>
                <li>
                    <a href="#" className="icon instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a href="#" className="icon facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
            </ul>
            <p>Copyright 2021 Ingo Fischer</p>
        </footer>
    );
};

export default Footer;

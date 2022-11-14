import React from "react";
import styles from "./Footer.less"
import {BsInstagram} from "react-icons/bs"
import {FiFacebook, FiTwitter} from "react-icons/fi"
import logo from "../../img/logoAzul.png"
import garantia from "../../img/garantia.png"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                <div className={styles.footer_col}>
                        <ul>
                            <li><img src={logo} alt="Logo" /></li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <ul>
                            <li><a href="#Rain">PUFI RAIN</a></li>
                            <li><a href="#Puff">PUFI PUFF</a></li>
                            <li><a href="#Cart">PUFI CART</a></li>
                            <li><a href="#Nap">PUFI NAP</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <ul>
                            <li><a href="/">CONTACTO</a></li>
                            <li><a href="/">AYUDA</a></li>
                            <li><a href="/">COMO COMPRAR</a></li>
                            <li><a href="/">TERMINOS & CONDICIONES</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <h4>COMPRA 100% SEGURA</h4>
                        <ul>
                            <li><img src={garantia} alt="Garantia" /></li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <h4>SEGUINOS EN</h4>
                        <div className={styles.social}>
                            <a href="https://www.facebook.com/daniloandres.ibanezzambrano/" target="_blanck"><FiFacebook /></a>
                            <a href="/" target="_blanck"><FiTwitter/></a>
                            <a href="https://www.instagram.com/daniloo0311/" target="_blanck"><BsInstagram/></a>
                        </div>
                        <a href="https://www.linkedin.com/in/danilo-ib%C3%A1%C3%B1ez-519a4023a/" target="_blanck" className={styles.name}>by Danilo</a >
                    </div>
                </div>
            </div>
        </footer>
    )
}
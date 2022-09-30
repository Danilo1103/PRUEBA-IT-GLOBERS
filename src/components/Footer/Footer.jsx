import React from "react";
import styles from "./Footer.module.css"
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"
import logo from "../../img/logoAzul.png"
import garantia from "../../img/garantia.png"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                <div className={styles.footer_col}>
                        <ul>
                            <li><img src={logo} alt="" /></li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <ul>
                            <li><a href="/">PUFI RAIN</a></li>
                            <li><a href="/">PUFI PUFF</a></li>
                            <li><a href="/">PUFI CART</a></li>
                            <li><a href="/">PUFI NAP</a></li>
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
                            <a href="https://www.facebook.com/daniloandres.ibanezzambrano/" target="_blanck"><BsFacebook/></a>
                            <a href="/" target="_blanck"><BsTwitter/></a>
                            <a href="https://www.instagram.com/daniloo0311/" target="_blanck"><BsInstagram/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
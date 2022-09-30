import React from "react";
import logo from "../../img/logo.png"
import styles from "./NavBar.less"
import { GiKnapsack } from "react-icons/gi"
import { BsFillUmbrellaFill, BsFillBagFill } from "react-icons/bs"
import { MdEventSeat } from "react-icons/md"

export default function NavBar() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul className={styles.nav_links}>
                    <li className={styles.separador}>
                        <a href="/">
                            <div>
                            <MdEventSeat/>
                            </div>
                            <div>PUFI PUFF</div>
                        </a>
                    </li>
                    <li className={styles.vertical_opciones}></li>
                    <li className={styles.separador}>
                        <a href="/">
                            <div>
                            <BsFillUmbrellaFill/>
                            </div>
                            <div>PUFI RAIN</div>
                        </a>
                    </li>
                    <li className={styles.vertical_opciones}></li>
                    <li className={styles.separador}>
                        <a href="/">
                            <div>
                            <BsFillBagFill/>
                            </div>
                            <div>PUFI CART</div>
                        </a>
                    </li>
                    <li className={styles.vertical_opciones}></li>
                    <li className={styles.separador}>
                        <a href="/">
                            <div>
                            <GiKnapsack/>
                            </div>
                            <div>PUFI NAP</div>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className={styles.user}>
                    <li><a href="/">Mi cuenta</a>
                    <ul className={styles.menu}>
                        <li><a href="https://www.linkedin.com/in/danilo-ib%C3%A1%C3%B1ez-519a4023a/" target="_blanck">LinkeDin</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=573028442263" target="_blanck">Whatsapp</a></li>
                        <li><a href="https://www.instagram.com/daniloo0311/" target="_blanck">Instagram</a></li>
                    </ul>
                    </li>
                    <li className={styles.vertical_user}></li>
                    <li><a href="/">Mi compra</a></li>
                </ul>
            </nav>
        </header>
        
    )
}
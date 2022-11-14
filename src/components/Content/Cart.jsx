import React from "react";
import style from "./Styles/Cart.less"
import BolsaImg from "../../img/bolsa02.jpg"
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

export default function Cart(){
    useEffect(() => {
        Aos.init({ duration: 600 })
    })
    return(
        <div>
        <div className={style.container} id="Cart">
            <div className={style.left} data-aos="fade-up-right">
            </div>
            <div className={style.right}>
                <div>
                    <img src={BolsaImg} alt="Rain" />
                    <h2>Pufi CART</h2>
                    <br />
                    <center><hr />
                    <br />
                    <p>Descripcion del producto, esto es un texto simulado</p></center>
                </div>
            </div>   
        </div>
    </div>
    )
}
import React from "react";
import style from "./Styles/Cart.module.css"
import BolsaImg from "../../img/bolsa02.jpg"

export default function Cart(){
    return(
        <div>
        <div className={style.container}>
            <div className={style.left}>
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
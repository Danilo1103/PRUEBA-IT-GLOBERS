import React from "react";
import style from "./Styles/Rain.module.css"
import RainImg from "../../img/umbrella02.jpg"

export default function Rain(){
    return(
        <div>
        <div className={style.container}>
            <div className={style.left}>
                <div>
                    <button>SHOP</button>
                </div>
            </div>
            <div className={style.right}>
                <div>
                    <img src={RainImg} alt="Rain" />
                    <h2>Pufi RAIN</h2>
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
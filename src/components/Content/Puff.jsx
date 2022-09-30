import React from "react";
import style from "./Styles/Puff.module.css"
import PuffImg from "../../img/puff02.png"

export default function Puff(){
    return(
        <div>
        <div className={style.container}>
            <div className={style.right}>
                <div>
                    <img src={PuffImg} alt="Puff" />
                    <h2>Pufi PUFF</h2>
                    <br />
                    <center><hr />
                    <br />
                    <p>Descripcion del producto, esto es un texto simulado</p>
                    <br />
                    <p>Ver mas...</p></center>
                </div>
            </div>   
            <div className={style.left}>
            </div>
        </div>
    </div>
    )
}
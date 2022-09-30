import React from "react";
import style from "./Styles/Nap.less"
import NapImg from "../../img/nap02.jpg"

export default function Nap(){
    return(
        <div className={style.container}>
            <div className={style.right}>
                <div>
                    <img src={NapImg} alt="Nap" />
                    <h2>Pufi NAP</h2>
                    <br />
                    <center><hr />
                    <br />
                    <p>Descripcion del producto, esto es un texto simulado</p>
                    <br />
                    <p>Ver mas...</p></center>
                </div>
                    <div className={style.flecha}></div>
            </div>   
            <div className={style.left}>
            </div>
        </div>
    )
}
import React from "react";
import style from "./Styles/Puff.less"
import PuffImg from "../../img/puff02.png"
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

export default function Puff(){
    useEffect(() => {
        Aos.init({ duration: 600 })
    })

    return(
        <div>
        <div className={style.container} id="Puff">
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
            <div className={style.left} data-aos="fade-up-right">
            </div>
        </div>
    </div>
    )
}
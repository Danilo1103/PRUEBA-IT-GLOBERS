import React from "react";
import style from "./Styles/Rain.less"
import RainImg from "../../img/umbrella02.jpg"
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

export default function Rain(){
    useEffect(() => {
        Aos.init({ duration: 600 })
    })

    return(
        <div>
        <div className={style.container}>
            <div className={style.left} data-aos="fade-up-right">
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
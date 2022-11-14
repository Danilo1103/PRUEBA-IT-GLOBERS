import React from "react";
import Cart from "../Content/Cart";
import Nap from "../Content/Nap";
import Puff from "../Content/Puff";
import Rain from "../Content/Rain";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Galeria from "../Galeria/Galeria";
import NavBar from "../NavBar/NavBar";
import style from "./Home.less"
import img01 from "../../img/img1.jpg"
import img02 from "../../img/image2.jpg"
import img03 from "../../img/image3.jpg"

export default function Home() {
    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div className={style.center}>
                <div id={style.fondo} className={style.center}>
                    <center><h1>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL</h1>
                        <button>SHOP</button>
                    </center>
                </div>
            </div>
            <div className={style.container}>
                <input type="radio" id="1" name="image_slide" hidden />
                <input type="radio" id="2" name="image_slide" hidden />
                <input type="radio" id="3" name="image_slide" hidden />

                <div className={style.slider}>
                    <div className={style.item_slider}>
                        <img src={img01} alt="Img" />
                    </div>
                    <div className={style.item_slider}>
                        <img src={img02} alt="Img" />
                    </div>
                    <div className={style.item_slider}>
                        <img src={img03} alt="Img" />
                    </div>
                </div>

                <div className={style.pagination}>
                    <label className={style.item_pagination} for="1" />
                    <label className={style.item_pagination} for="2" />
                    <label className={style.item_pagination} for="3" />
                </div>
            </div>
            <Rain />
            <Puff />
            <Cart />
            <Nap />
            <Galeria />
            <Form />
            <Footer />
        </div>
    )
}
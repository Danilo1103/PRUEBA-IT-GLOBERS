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

function Home() {
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
            <Rain/>
            <Puff/>
            <Cart/>
            <Nap/>
            <Galeria/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Home
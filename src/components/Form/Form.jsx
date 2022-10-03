import React from 'react';
import { useForm } from '@formspree/react';
import styles from "./Form.less"
import Swal from 'sweetalert2'
import { useState } from 'react';
import { VscArrowRight } from "react-icons/vsc"

export default function Form() {
    const [state, handleSubmit] = useForm("mgeqyvbz");
    let info = {};
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const [input, setInput] = useState({
        email: "",
    })

    if(!input.email){
        info.email = ""
    } else if(input.email && !pattern.test(input.email)){
        info.email = "❌ Ingrese un correo valido" 
    } else {
        info.email = "✔️ Correo valido, suscribete"
    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    if (state.succeeded) {
        info.email = ""
        input.email = ""
        Swal.fire({
            icon: 'success',
            title: 'Suscrito!'
        })
    }


    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <center>
                    <p>NEWSLETTER</p>
                    <h1>SUSCRIBITE</h1>
                    <h5>Y enterate de todas las novedades</h5>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className={styles.input}
                        value={input.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingresa tu email"
                    />
                    <button type="submit" disabled={state.submitting} className={styles.button__submit}>
                        <VscArrowRight className={styles.icon}/>
                    </button>
                    <br />
                    <br />
                    {info.email && (<p>{info.email}</p>)}
                </center>
            </form>
        </div>
    );
}

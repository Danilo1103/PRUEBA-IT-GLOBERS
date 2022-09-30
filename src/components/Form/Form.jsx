import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from "./Form.less"
import Swal from 'sweetalert2'
import { useState } from 'react';
import { VscArrowRight } from "react-icons/vsc"

export default function Form() {
    const [state, handleSubmit] = useForm("mgeqyvbz");
    
    const [input, setInput] = useState({
        email: "",
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    if (state.succeeded) {
        Swal.fire({
            icon: 'success',
            title: 'Perfecto!',
            text: `Nos estaremos contactando al correo ${input.email}`
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
                    />
                    <button type="submit" disabled={state.submitting} className={styles.button__submit}>
                        <VscArrowRight className={styles.icon}/>
                    </button>
                    <br />
                    <br />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </center>
            </form>
        </div>
    );
}

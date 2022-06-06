import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { Banner } from '../components/Banner';
import { CustomInput } from '../components/CustomInput';
import { expressions, isValidTexts } from '../utilites/util';

export default function Contact(): JSX.Element {
    const [name, setName] = useState({ text: '', valid: null });
    const [email, setEmail] = useState({ text: '', valid: null });
    const [message, setMessage] = useState({ text: '', valid: null });

    const enableButton = (): boolean => {
        if (isValidTexts(name, email) && message.text.trim() !== '' ) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        const body = {
            name: name.text.trim(),
            email: email.text.trim(),
            message: message.text.trim()
        };
        console.log(body);
    }

    return (
        <Layout>
            <section>
                <Banner
                    title="Informaci&oacute;n para tu evento o negocio?"
                    description="Llena el siguiente formulario para que te podamos contactar lo m&aacute;s
                    pronto posible"
                />
                <div className="contact">
                    <form className="ui form" onSubmit={handleSubmit}>
                        <h3 className="brownie title">Contacto</h3>
                        <CustomInput
                            name="Nombre"
                            max={25}
                            tipe="text"
                            placeHolder="Nombre"
                            errorMsg="Favor de capturar nombre"
                            regExp={expressions.nombre}
                            state={name}
                            changeState={setName}
                        />
                        <CustomInput
                            name="Correo electr&oacute;nico"
                            max={30}
                            tipe="text"
                            placeHolder="Correo electr&oacute;nico"
                            errorMsg="Favor de capturar correo electr&oacute;nico"
                            regExp={expressions.correo}
                            state={email}
                            changeState={setEmail}
                        />
                          <CustomInput
                            name="Correo electr&oacute;nico"
                            max={250}
                            tipe="textarea"
                            placeHolder="Mensaje"
                            errorMsg="Favor de capturar mensaje"
                            state={message}
                            changeState={setMessage}
                        />
                        <button className="ui brownie button" type="submit" disabled={enableButton()}>Enviar</button>
                    </form>
                </div>
            </section>
        </Layout>
    );
};
import React, { useState } from 'react';
import Layout from 'src/layout/Layout'; 
import { Banner } from 'src/components/Banner'; 
import { CustomInput } from 'src/components/CustomInput'; 
import { expressions, isValidTexts } from 'src/utilites/validations';

export default function Contact(): JSX.Element {
    const [name, setName] = useState({ text: '', valid: null });
    const [email, setEmail] = useState({ text: '', valid: null });
    const [message, setMessage] = useState({ text: '', valid: null });
    const [loading, setLoading] = useState<boolean>(false);

    const enableButton = (): boolean => {
        if (isValidTexts(name, email) && message.text.trim() !== '') {
            return false;
        }
        return true;
    };

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            const body = {
                name: name.text.trim(),
                email: email.text.trim(),
                message: message.text.trim()
            };
            setLoading(false);
        }, 3000);
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
                        <h2 className="brownie title">Contacto</h2>
                        <CustomInput
                            name="Nombre"
                            max={25}
                            tipe="text"
                            placeHolder="nombre"
                            errorMsg="Favor de capturar nombre"
                            regExp={expressions.nombre}
                            state={name}
                            changeState={setName}
                        />
                        <CustomInput
                            name="Correo electr&oacute;nico"
                            max={30}
                            tipe="text"
                            placeHolder="correo electr&oacute;nico"
                            errorMsg="Favor de capturar correo electr&oacute;nico"
                            regExp={expressions.correo}
                            state={email}
                            changeState={setEmail}
                        />
                        <CustomInput
                            name="Mensaje"
                            max={250}
                            tipe="textarea"
                            placeHolder="mensaje"
                            state={message}
                            changeState={setMessage}
                        />
                        <button type="submit"
                            className={loading ? "ui button brownie loading": "ui button brownie"}
                            disabled={enableButton()}
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    );
};
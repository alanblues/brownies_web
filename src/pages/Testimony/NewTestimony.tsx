import React, {useState} from 'react';
import { expressions, isValidTexts } from 'src/utilites/util';
import { CustomInput } from 'src/components/CustomInput';

export const NewTestimony = (): JSX.Element => {
    const [name, setName] = useState({ text: '', valid: null });
    const [experience, setExperience] = useState({ text: '', valid: null });


    const enableButton = (): boolean => {
        if (isValidTexts(name) && experience.text.trim() !== '') {
            return false;
        }
        return true;
    };

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        const body = {
            name: name.text.trim(),
            experience: experience.text.trim()
        };
        console.log(body);
    }

    return (
        <form className="ui form" onSubmit={handleSubmit}>
            {/* <h3 className="brownie title">Contacto</h3> */}
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
                name="Experiencia y/o testimonio"
                max={250}
                tipe="textarea"
                placeHolder="Mensaje"
                errorMsg="Experiencia"
                state={experience}
                changeState={setExperience}
            />
            <button className="ui brownie button" type="submit" disabled={enableButton()}>Enviar</button>
        </form>
    )
}
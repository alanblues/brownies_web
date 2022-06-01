import React, { ChangeEvent, useEffect } from 'react';
import { InputsTypes } from '../models';

export const CustomInput = (props: InputsTypes): JSX.Element => {
    const { name, max, tipe, placeHolder, errorMsg, regExp, state, changeState } = props;

    const handleChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        changeState({...state, text: target.value});
    }

    const handleValidation = (): void => {
        if (regExp) {
            const isValid = regExp?.test(state.text.trim()) ? true : false;
            changeState({...state, valid: isValid});
        }
    }

    useEffect(()=> {
        if(!regExp) {
            changeState({...state, valid: true});
        }
    }, [])

    return (
        <div className="field">
            <label>{name}</label>
            {
                tipe === 'text'
                    ?
                    <input
                        autoComplete="off"
                        type={tipe}
                        name="first-name"
                        placeholder={placeHolder}
                        maxLength={max}
                        onChange={handleChange}
                        onKeyUp={handleValidation}
                        onBlur={handleValidation}
                        className={state.valid == false ? 'error' : ''}
                    />
                    : <textarea
                        placeholder={placeHolder}
                        rows={6}
                        maxLength={max}
                        onChange={handleChange}
                        onKeyUp={handleValidation}
                        onBlur={handleValidation}
                        className={state.valid == false ? 'error' : ''}
                        ></textarea>
            }
            {state.valid === false && <span>{errorMsg}</span>}
        </div>
    );
};
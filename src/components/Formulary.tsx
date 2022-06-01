import { CustomInput } from "./CustomInput"

export default function Formulary({ title, onSubmit }: any): JSX.Element {
    return (
        <article className="formulary">
            <form className="ui form">
                <h3 className="brownie title">{title}</h3>
                {/* <CustomInput name="Nombre" tipe="text" placeHolder="Nombre completo" />
                <CustomInput name="Testimony" tipe="textarea" placeHolder="Testimonio y/o experiencia" /> */}
                <button className="ui brownie button" type="button" onClick={() => onSubmit(false)}>Enviar</button>
            </form>
        </article>

    )
}
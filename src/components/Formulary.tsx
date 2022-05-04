export default function Formulary({ title, onSubmit }: any): JSX.Element {
    return (
        <article className="formulary">
            <form className="ui form">
                <h3 className="brownie title">{title}</h3>
                <div className="field">
                    <label>Nombre</label>
                    <input type="text" name="first-name" placeholder="Nombre" />
                </div>
                <div className="field">
                    <label>Testimoio</label>
                    <textarea placeholder="Testimonio" rows={3} maxLength={150}></textarea>
                </div>

                <button className="ui brownie button" type="button" onClick={() => onSubmit(false)}>Enviar</button>
            </form>
        </article>

    )
}

export const CustomSubmit = ({ cargando, handle }: any): JSX.Element => {
    return (
        <div>
            cargando: {cargando}<br />
            <button
                className={cargando === 'SI' ? "ui button brownie loading" : "ui button brownie"}
                type="submit"
                onClick={handle}
            >
                click
            </button>

            <button
                className={cargando === 'SI' ? "ui right labeled icon button brownie loading" : "ui right labeled icon button brownie"}>
                <i className="right arrow icon"></i>
                Next
            </button>
        </div>
    )
}
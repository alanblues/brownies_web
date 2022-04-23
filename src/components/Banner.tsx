interface Properties {
    title: string;
    description: string;
}

export const Banner = ({title, description}: Properties): JSX.Element => {
    return (
        <article className="banner">
            <div className="banner_info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    )
};
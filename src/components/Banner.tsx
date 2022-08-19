import { BannerProperties } from "../models";

export const Banner = ({title, description}: BannerProperties): JSX.Element => {
    return (
        <article className="banner">
            <div className="banner_info">
                <h2>{title}</h2>
                {/* <p>{description}</p> */}
                <div dangerouslySetInnerHTML={{__html: description}}></div>
            </div>
        </article>
    )
};
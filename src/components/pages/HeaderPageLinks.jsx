import { Link } from "react-router-dom";

const HeaderPageLinks = ({ links }) => {
    return (
        <div className="text-sm">
            {links.map((elem, index) =>
                index === links.length - 1 ? (
                    <span className="capitalize text-orangedarker">{`${elem}`}</span>
                ) : (
                    <>
                        <Link to={`/${elem}`}>
                            <span className="capitalize">{`${elem}`}</span>
                        </Link>
                        {` > `}
                    </>
                )
            )}
        </div>
    );
};
export default HeaderPageLinks;

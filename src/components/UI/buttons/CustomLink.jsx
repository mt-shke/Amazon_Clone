import { Link } from "react-router-dom";

const CustomLink = ({ children, url }) => {
    return (
        <Link
            className="text-blue hover:cursor-pointer hover:underline"
            to={url ?? ""}
        >
            {children}
        </Link>
    );
};
export default CustomLink;

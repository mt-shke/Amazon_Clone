import { uuidv4 } from "@firebase/util";
import {
    MdOutlineStarOutline,
    MdOutlineStar,
    MdOutlineStarHalf,
} from "react-icons/md";

const ProductCardRating = ({ data }) => {
    const roundedRating = Math.floor(data.rating * 2) / 2;
    const demiStar = (roundedRating * 2) % 2 === 1;
    const fullStars = Math.trunc(roundedRating);
    const numberOfFullStars = new Array(fullStars).fill(true);
    const outlineStars = new Array(5 - Math.ceil(roundedRating)).fill(true);
    return (
        <div className="flex flex-row gap-2 my-1">
            <div className="flex flex-row">
                {!!numberOfFullStars &&
                    numberOfFullStars.map((elem) => (
                        <MdOutlineStar
                            key={uuidv4()}
                            size={22}
                            color="orange"
                        />
                    ))}
                {!!demiStar && <MdOutlineStarHalf size={22} color="orange" />}
                {!!outlineStars &&
                    outlineStars.map((elem) => (
                        <MdOutlineStarOutline
                            key={uuidv4()}
                            size={22}
                            color="orange"
                        />
                    ))}
            </div>

            <span className="text-blue">{`( ${data.numOfReviews} )`}</span>
        </div>
    );
};
export default ProductCardRating;

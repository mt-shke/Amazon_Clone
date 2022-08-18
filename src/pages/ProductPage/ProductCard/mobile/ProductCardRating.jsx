import { uuidv4 } from "@firebase/util";
import {
    MdOutlineStarOutline,
    MdOutlineStar,
    MdOutlineStarHalf,
} from "react-icons/md";
import useResponsive from "../../../../hooks/useResponsive";

const ProductCardRating = ({ data }) => {
    const roundedRating = Math.floor(data.rating * 2) / 2;
    const demiStar = (roundedRating * 2) % 2 === 1;
    const fullStars = Math.trunc(roundedRating);
    const numberOfFullStars = new Array(fullStars).fill(true);
    const outlineStars = new Array(5 - Math.ceil(roundedRating)).fill(true);

    const { mobile } = useResponsive();

    if (mobile) {
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
                    {!!demiStar && (
                        <MdOutlineStarHalf size={22} color="orange" />
                    )}
                    {!!outlineStars &&
                        outlineStars.map((elem) => (
                            <MdOutlineStarOutline
                                key={uuidv4()}
                                size={22}
                                color="orange"
                            />
                        ))}
                </div>
                <span className="text-blue">{`( ${data.reviews.numOfReviews} )`}</span>
            </div>
        );
    }
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
            <span className="text-blue">{`${data.reviews.numOfReviews} évaluations | ${data.reviews.responses} questions avec réponses`}</span>
        </div>
    );
};
export default ProductCardRating;

import { useEffect } from "react";
import { useState } from "react";

const ProductFormImages = ({ setImages }) => {
    const [productImages, setProductImages] = useState([]);
    const [productImagesUrl, setProductImagesUrl] = useState([]);

    useEffect(() => {
        setImages(productImages);
    }, [productImages]);

    const inputImageHandler = (e) => {
        setProductImages((p) => [...p, e.target.files[0]]);
        setProductImagesUrl((p) => [
            ...p,
            URL.createObjectURL(e.target.files[0]),
        ]);
    };

    return (
        <label htmlFor="avatar" className="flex flex-row gap-6 my-2">
            <span className="font-emberCondensedBold bg-bg-main rounded px-3 py-2 h-fit text-sm border-[1px] border-secondary">
                Ajouter les images de votre produit
            </span>
            <div className="w-20 aspect-square">
                <input
                    onChange={(e) => inputImageHandler(e)}
                    id="avatar"
                    type="file"
                    accept="image/*"
                    placeholder="Ajouter une image"
                    className="hidden"
                />

                {!!productImagesUrl.length &&
                    productImagesUrl.map((url, index) => (
                        <img
                            key={url + index}
                            className="object-contain"
                            src={url}
                        />
                    ))}
            </div>
        </label>
    );
};
export default ProductFormImages;

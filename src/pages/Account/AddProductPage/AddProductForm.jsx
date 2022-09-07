import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addProductSchema } from "../../../schema/productSchema";
import Input from "../../../components/UI/form/Input";
import Button from "../../../components/UI/buttons/Button";
import { deleteImg, sendImgToStorage } from "../../../firebase/storage";
import { addNewProduct } from "../../../firebase/productsCollection";
import ProductFormImages from "./ProductFormImages";
import { addProductToCategoryCollection } from "../../../firebase/categoriesCollection";
import FormInputCategory from "./FormInputCategory";

const AddProductForm = ({ user }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [images, setImages] = useState([]);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addProductSchema),
    });

    const onSubmit = async (data) => {
        let imagesRefs = [];
        try {
            if (isSubmitting) return;
            setIsSubmitting(true);
            clearErrors();
            console.log(data);

            // if (images.length) {
            //     imagesRefs = await Promise.all(
            //         images.map((img) => sendImgToStorage(user, img))
            //     );
            //     if (!imagesRefs) {
            //         throw new Error("Images upload failed");
            //     }
            // }

            const newProduct = { ...data, images: [] };
            // const newProduct = { ...data, images: imagesRefs };
            const addedProduct = await addNewProduct(user, newProduct);

            if (!addedProduct) {
                throw new Error("Error while adding new product to database");
            }
            // all images successfully uploaded
            const productId = addedProduct._key.path.segments[1];
            // todo set product to category
            // const productAddedToCategory = await addProductToCategoryCollection(
            //     productId,
            //     data
            // );
            // console.log("ProductAddedToCat", productAddedToCategory);

            // if (!productAddedToCategory) {
            //     throw new Error("Failed to add product to its category");
            // }

            return;
        } catch (error) {
            if (imagesRefs.length) {
                await Promise.all(
                    imagesRefs.map((img) => deleteImg(user, img))
                );
            }
            console.error("AddProductForm error: ", error);
            setIsSubmitting(false);
            return;
        }
    };

    return (
        <form
            className="w-full flex flex-col gap-5"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="text-3xl font-emberCondensed">S'identifier</h2>
            <label>
                Nom
                <Input
                    register={register}
                    inputname={"name"}
                    error={errors?.name?.message}
                />
            </label>
            <label>
                Titre
                <Input
                    register={register}
                    inputname={"title"}
                    error={errors?.title?.message}
                />
            </label>
            <label>
                Catégorie
                <Input
                    register={register}
                    inputname={"category"}
                    inputCategory={true}
                    error={errors?.category?.message}
                />
            </label>
            <label>
                Type
                <Input
                    register={register}
                    inputname={"productType"}
                    error={errors?.productType?.message}
                />
            </label>
            <label>
                Prix actuel
                <Input
                    register={register}
                    inputname={"price"}
                    error={errors?.price?.message}
                />
            </label>
            <label>
                Prix réel
                <Input
                    register={register}
                    inputname={"fullPrice"}
                    error={errors?.fullPrice?.message}
                />
            </label>
            <ProductFormImages setImages={(value) => setImages(value)} />
            <button type="submit" className="flex w-full">
                <Button>Continuer</Button>
            </button>
        </form>
    );
};
export default AddProductForm;

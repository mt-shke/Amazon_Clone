import CustomLink from "../../components/UI/buttons/CustomLink";

const CGV = ({ page }) => {
    let message = "En créant un compte";
    if (page === "login") {
        message = "En passant votre commande";
    }

    return (
        <p className="font-emberCondensed text-sm">
            {`${message}, vous acceptez les `}
            <CustomLink>conditions générales de vente</CustomLink>
            {` 
d’Amazon. Veuillez consulter notre `}
            <CustomLink>
                notice Protection de vos Informations Personnelles
            </CustomLink>
            {`, notre `}
            <CustomLink>notice Cookies</CustomLink>
            {` et
notre `}
            <CustomLink>
                notice Annonces publicitaires basées sur vos centres d’intérêt.
            </CustomLink>
        </p>
    );
};
export default CGV;

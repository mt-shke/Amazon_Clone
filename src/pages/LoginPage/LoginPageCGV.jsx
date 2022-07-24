import CustomLink from "../../components/UI/buttons/CustomLink";

const LoginPageCGV = () => {
    return (
        <p className="font-emberc text-sm">
            {`En créant un compte, vous acceptez les `}
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
export default LoginPageCGV;

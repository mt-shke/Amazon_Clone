import CustomLink from "../../components/UI/buttons/CustomLink";

const LoginPageFooter = () => {
    return (
        <footer className="w-full flex flex-col gap-4 py-4 items-center text-xs">
            <ul className="flex flex-row gap-4 text-blue">
                <li>
                    <CustomLink>Conditions d'utilisation </CustomLink>
                </li>
                <li>
                    <CustomLink>
                        Protection de vos informations personnelles
                    </CustomLink>
                </li>
                <li>
                    <CustomLink>Aide </CustomLink>
                </li>
                <li>
                    <CustomLink>Cookies </CustomLink>
                </li>
                <li>
                    <CustomLink>
                        Annonces basées sur vos centres d’intérêt
                    </CustomLink>
                </li>
            </ul>
            <span>© 1996-2022, Amazon.com Inc. ou ses affiliés</span>
        </footer>
    );
};
export default LoginPageFooter;

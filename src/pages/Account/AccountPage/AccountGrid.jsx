import { Link } from "react-router-dom";
import imgCommand from "../../../assets/img/accountPage/commands.png";
import imgSecurity from "../../../assets/img/accountPage/security.png";
import imgPrime from "../../../assets/img/accountPage/prime.png";
import imgAddress from "../../../assets/img/accountPage/address.png";
import imgPayment from "../../../assets/img/accountPage/payment.png";
import imgGiftCard from "../../../assets/img/accountPage/gift_card.png";
import imgMessages from "../../../assets/img/accountPage/messages.png";
import imgContact from "../../../assets/img/accountPage/contact.png";
import imgMobileApp from "../../../assets/img/accountPage/mobile_app.png";

const AccountGrid = () => {
    return (
        <section className="grid-auto-cols sm:grid-auto-cols md:min-w-[960px] grid md:grid-cols-3 md:grid-rows-3 gap-4 ">
            {accountGridData.map((item, index) => (
                <AccountGridItem key={item.title + index} item={item} />
            ))}
        </section>
    );
};

export default AccountGrid;

export const AccountGridItem = ({ item }) => {
    return (
        <Link to={item.link ? "/account" + item.link : "/account"}>
            <article
                className={`${
                    item.link ? "" : "bg-bg-main"
                } h-28 w-full h-full flex items-center gap-2 p-4 border-[1px] border-secondary rounded-lg hover:bg-bg-mainlight`}
            >
                <div className="w-20 md:w-1/3">
                    <img
                        className="w-full"
                        src={item.imgUrl}
                        alt={item.title}
                    />
                </div>
                <div>
                    <h3 className="text-lg font-emberCondensed">
                        {item.title}
                    </h3>
                    <p className="text-sm">{item.description}</p>
                </div>
            </article>
        </Link>
    );
};

const accountGridData = [
    {
        imgUrl: imgCommand,
        title: "Vos commandes",
        description: "Suivre, retourner ou acheter à nouveau",
        link: "",
    },
    {
        imgUrl: imgSecurity,
        title: "Connexion & sécurité",
        description:
            "Modifier l'adresse e-mail, le nom et le numéro de téléphone mobile",
        link: "/update-user-data",
    },
    {
        imgUrl: imgPrime,
        title: "Prime",
        description: "Voir les avantages et les paramètres de paiement",
        link: "",
    },
    {
        imgUrl: imgAddress,
        title: "Adresses",
        description:
            "Modifier les adresses et les préférences de livraison des commandes et des cadeaux",

        link: "/addresses",
    },
    {
        imgUrl: imgPayment,
        title: "Vos paiements",
        description:
            "Afficher toutes les transactions, gérer les modes de paiement et les paramètres",

        link: "",
    },
    {
        imgUrl: imgGiftCard,
        title: "Cartes cadeaux",
        description:
            "Ajouter une carte cadeau, voir votre solde, ou recharger votre compte",
        link: "",
    },
    {
        imgUrl: imgMessages,
        title: "Centre de messagerie",
        description: "Consulter les messages d'Amazon et des vendeurs tiers",
        link: "",
    },
    {
        imgUrl: imgContact,
        title: "Nous contacter",
        description:
            "Contactez notre Service Client par Téléphone, Chat ou Email",
        link: "",
    },
    {
        imgUrl: imgMobileApp,
        title: "Application Mobile",
        description: "Télécharger l'application Amazon",
        link: "",
    },
    {
        imgUrl: imgContact,
        title: "Supprimer votre compte",
        description: "Supprimer définitivement votre compte Amazon",
        link: "/delete",
    },
];

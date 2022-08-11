const SecondaryContent = () => {
    return (
        <section className="min-w-[960px] grid grid-cols-3 grid-rows-3 gap-4 ">
            {secondaryData.map((content, index) => (
                <SecondaryContentItem
                    key={content.title + index}
                    content={content}
                />
            ))}
        </section>
    );
};
export default SecondaryContent;

const SecondaryContentItem = ({ content }) => {
    return (
        <article className="w-full h-full flex flex-col items-start gap-2 p-4 border-[1px] border-secondary rounded-lg">
            <h3 className="text-lg font-emberCondensedBold">{content.title}</h3>
            <ul>
                {content.items.map((item, indexItem) => (
                    <li
                        key={item + indexItem}
                        className="text-base text-blue hover:cursor-pointer hover:underline"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    );
};

const secondaryData = [
    {
        title: "Contenu numérique et appareils",
        items: [
            "Amazon Drive",
            "Applis et plus",
            "Contenu et appareils Kindle",
            "Paramètres de musique",
            "Forum Numérique et Appareils",
        ],
    },
    {
        title: "Alertes e-mail, messages, annonces et cookies",
        items: [
            "Préférences relatives aux cookies",
            "Préférences en matière de publicité",
            "Préférences de communication",
            "Centre de messagerie",
            "Les notifications d'achat Alexa",
            "Alerte Vente Flash",
        ],
    },
    {
        title: "Autres méthodes de paiement",
        items: [
            "Paramètres 1-Click",
            "Amazon Pay",
            "Coupons",
            "Pass Cadeau",
            "Shop with Points",
        ],
    },
    {
        title: "Commander et préférences d'achats",
        items: [
            "Vos transactions",
            "Convertisseur de devises Amazon",
            "Commandes archivées",
            "Listes",
            "Gérer les pièces d’identité enregistrées",
            "Profil",
            "Numéro d'enregistrement TVA",
        ],
    },
    {
        title: "Autres comptes",
        items: [
            "Liaison de compte",
            "Vendre sur Amazon",
            "Créer un compte professionnel gratuit",
            "Amazon Web Services",
            "Connexion avec Amazon",
            "Paramètres de mon compte Twitch",
        ],
    },

    {
        title: "Programmes d'achats et locations",
        items: [
            "Gérer vos profils",
            "Recycler un article",
            "Prévoyez et Économisez",
            "Amazon Famille",
            "Vos centres d’intérêt",
        ],
    },
    {
        title: "Abonnements",
        items: ["Adhésions et abonnements"],
    },
    {
        title: "Données Personnelles",
        items: [
            "Demandez vos informations",
            "Fermez votre compte Amazon",
            "Notice Protection de vos Informations Personnelles",
        ],
    },
];

import AmazonChoice from "../../../components/UI/product/AmazonChoice";
import img from "../../../assets/img/square/watch.jpg";
import ProductCardRating from "./ProductCardRating";
import ProductCardPaymentType from "./ProductCardPaymentType";
import ProductCardBuy from "./ProductCardBuy";
import ProductCardSectionSpecifications from "./ProductCardSectionSpecifications";
import ProductCardPrice from "./ProductCardPrice";
import ProductCardGallery from "./ProductCardGallery";
import ProductCardDetails from "./ProductCardDetails";

const ProductCard = () => {
    const productData = {
        title: "Apple Watch Series 7 (GPS) Boîtier en Aluminium Minuit de 41 mm, Bracelet Sport Minuit - Regular",
        rating: 4.6,
        reviews: [
            { one: "One review" },
            { one: "One review" },
            { one: "One review" },
            { one: "One review" },
            { one: "One review" },
            { one: "One review" },
        ],
        numOfReviews: 2116,
        price: 39900,
        fullPrice: 42900,
        amazonChoice: true,
        seller: "Amazon",
        images: {
            main: img,
        },
        specifications: {
            couleur: "Aluminium: Minuit",
            style: "GPS",
            taille: "41mm - Convient aux poignets",
            configuration: "Sans AppleCare+",
        },
        availableColors: [""],
        quantity: 23,
        delivery: {
            price: 0,
            estimatedDeliveryDays: 3,
            exporter: "Amazon",
        },
        description: "",
        details: [
            "Le modèle GPS vous permet de prendre des appels et de répondre à des messages directement de votre poignet",
            "Un écran Retina toujours activé avec une surface d’affichage près de 20 % supérieure à celle de la Series 6, pour que tout soit plus simple à consulter et à utiliser",
            "Le verre d’écran le plus solide à ce jour sur Apple Watch, avec une résistance à la poussière IP6X et un design étanche",
            "Mesurez votre taux d’oxygène dans le sang grâce à un capteur et à une app remarquables",
            "Faites un électrocardiogramme partout, et à tout moment",
            "Recevez des alertes en cas de fréquence cardiaque élevée ou faible, et en cas d’arythmie",
            "Obtenez des données sur de nombreux types d’entraînements, comme la course, le yoga, la natation, la danse, et maintenant le tai-chi et le Pilates",
            "Suivez votre activité physique au jour le jour sur votre Apple Watch et surveillez l’évolution de vos stats dans l’app Forme de votre iPhone",
            "Payez de façon sûre et instantanée, directement depuis votre poignet avec Apple Pay",
            "L’Apple Watch Series 7 nécessite un iPhone 6s (ou modèle ultérieur) avec iOS 15 (ou version ultérieure)",
        ],
        technicalsDetails: {
            boîtier: "41mm, 45ùmm",
            "contenue du coffret":
                "Boîtier, Bracelet Sport - deux tailles, S/M et M/L, Câble de charge magnétique (1 m)",
            connectivité: "Wi‑Fi 802.11b/g/n 2,4 GHz, Bluetooth 5.0",
            "Alimentation et batterie": "Jusqu’à 18 heures",
            bracelet:
                "Certains bracelets contiennent des aimants qui peuvent provoquer des interférences avec la boussole de l’Apple Watch",
            fonctionnalités:
                "GPS/GNSS/BeiDou intégré, SiP S7 avec processeur bicœur 64 bits, Puce sans fil Apple W3, Puce U1 Ultra Wideband (UWB), Altimètre barométrique, Capacité de 32 Go, Capteur de taux d’oxygène dans le sang, Capteur optique de fréquence cardiaque de 3ᵉ génération, Capteur électrique de fréquence cardiaque, Indice de protection IP6X pour sa résistance à la poussière, Accéléromètre amélioré jusqu’à 32 g, Gyroscope amélioré, Capteur de luminosité ambiante, Écran Retina toujours activé, 2cran OLED LPTO avec Force Touch (1000 nits), Digital Crown avec retour haptique, Haut-parleur et micro de deuxième génération, Les modèles en aluminium disposent d’un écran en verre Ion-X, Dos en cristal de saphire et céramique, Wi-Fi 802.11b/g/n 2.4GHz, Bluetooth 5.0, Batterie au lithium‑ion rechargeable intégrée, Jusqu’à 18 heures d’autonomie, Résistance à l’eau jusqu’à 50 mètres",
            Hauteur: "41 mm, 45 mm",
            Largeur: "35mm, 38mm",
            Épaisseur: "10.7mm",
            "Poids du boîtier":
                "45mm: 38.8g (Aluminum); 41mm: 32.0g (Aluminum)",
            DA: "DAS Apple Watch Series 7 GPS 41mm : DAS tronc : 0,26 W/kg ; DAS membre : 0,40 W/kg. DAS Apple Watch Series 7 GPS 45mm : DAS tronc : 0,26 W/kg ; DAS membre : 0,03 W/kg. Le DAS (débit d’absorption spécifique) des téléphones mobiles quantifie le niveau d’exposition maximal de l’utilisateur aux ondes électromagnétiques, pour la tête, un membre ou le tronc. La réglementation française impose que le DAS ne dépasse pas 2 W/kg pour le tronc et la tête et 4 W/kg pour les membres.",
            "Date de sortie du produit": "10/15/2021",
        },
        productInformations: {
            fabricant: "Apple Computer",
            "numéro du modèle de l'article": "MKMX3NF/A",
            "Dimensions du colis": "29.4 x 7.8 x 3.7 x; 390 grammes",
            ASIN: "B09HHGT5SS",
        },
    };

    return (
        <article className="flex flex-col gap-2">
            <section className="bg-white">
                <section className="p-2">
                    <span className="text-blue">
                        Visiter la boutique d'Apple
                    </span>
                    <h2 className="text-lg font-emberBold">
                        {`Apple Watch Series 7 (GPS) Boîtier en Aluminium Minuit de 41 mm, Bracelet Sport Minuit - Regular`}
                    </h2>

                    <ProductCardRating data={productData} />
                    <div className="flex flex-row gap-4">
                        <AmazonChoice />
                        <span>
                            pour
                            <span className="text-sm text-blue">{` "apple watch serie 7 41mm`}</span>
                        </span>
                    </div>
                </section>

                <ProductCardGallery data={productData} />
                {/* <hr className="h-[1px] my-4 w-full bg-secondary border-none" /> */}

                <ProductCardPrice data={productData} />
            </section>

            <ProductCardSectionSpecifications data={productData} />
            <ProductCardPaymentType />
            <ProductCardBuy data={productData} />
            <ProductCardDetails data={productData} />
        </article>
    );
};
export default ProductCard;

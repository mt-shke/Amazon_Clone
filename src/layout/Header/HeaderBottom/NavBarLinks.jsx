const NavBarLinks = () => {
    const links = [
        "Meilleures ventes",
        "Amazon Basics",
        "Musique",
        "Dernières Nouveautés",
        "Service Client",
        "Ventes Flash",
        "Ebooks Kindle",
        "Prime",
        "Audible",
        "Livre",
        "Mode",
        "High-Tech",
        "Cuisine et Maison",
        "Informatique",
        "Jeux et Jouets",
        "Auto et Moto",
        "Jeux vidéo",
    ];

    return (
        <nav className="w-full h-full flex items-center">
            <ul className="flex flex-1">
                {links.map((link, index) => (
                    <li className="flex flex-none" key={index}>
                        <a className="flex flex-none hover:cursor-pointer px-2 py-1 hover:outline hover:outline-[1px] outline-white">
                            <span className="whitespace-nowrap text-sm font-ember">
                                {link}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBarLinks;

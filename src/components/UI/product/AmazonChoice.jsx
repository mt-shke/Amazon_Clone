const AmazonChoice = () => {
    return (
        <div className="relative flex gap-1 items-center h-[24px] bg-bg-grey w-fit text-sm text-white px-2">
            <span>{`Choix`}</span>
            <span className="text-orangedarker">{` d'Amazon`}</span>
            <div className="absolute -right-[12px] w-0 h-0 border-t-[24px] border-r-[12px] border-t-bg-grey border-r-transparent"></div>
        </div>
    );
};
export default AmazonChoice;

import LoadingSpinner from "../components/UI/LoadingSpinner";

const LoadingPage = () => {
    return (
        <div className="fixed inset-0 grid place-items-center">
            <LoadingSpinner />
        </div>
    );
};
export default LoadingPage;

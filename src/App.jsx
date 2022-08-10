import AuthNavigation from "./navigation/AuthNavigation";
import AuthProvider from "./state/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <div className="App flex flex-col items-center bg-bg-main font-emberCondensed min-w-[1024px]">
                <AuthNavigation />
            </div>
        </AuthProvider>
    );
};

export default App;

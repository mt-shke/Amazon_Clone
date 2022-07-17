import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <div className="App bg-bg-main font-emberb min-w-[1080px]">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="*"
                        element={<div>Bad route, nothing here</div>}
                    />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
};

export default App;

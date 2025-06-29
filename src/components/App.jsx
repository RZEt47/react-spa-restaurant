import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home";
import Category from "./Pages/CategoryList/Category/Category";
import Recipe from "./Pages/CategoryList/Category/Recipe/Recipe";
import About from "./Pages/About";
import NotFound from "./NotFound/NotFound";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <main className="container content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="category/:name" element={<Category />} />
                        <Route path="meal/:id" element={<Recipe />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
};

export default App;

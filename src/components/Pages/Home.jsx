import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllCategories } from "../../api";

import Preloader from "../Preloader/Preloader";
import CategoryList from "./CategoryList/CategoryList";
import Search from "./Search/Search";

const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (str) => {
        if (str) {
            setSearchParams({ search: str });
        } else {
            setSearchParams({});
        }

        setFilteredCatalog(
            catalog.filter((item) => {
                return item.strCategory
                    .toLowerCase()
                    .includes(str.toLowerCase());
            })
        );
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            const search = searchParams.get("search");

            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) => {
                          return item.strCategory
                              .toLowerCase()
                              .includes(search);
                      })
                    : data.categories
            );
        });
    }, [searchParams]);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
};

export default Home;

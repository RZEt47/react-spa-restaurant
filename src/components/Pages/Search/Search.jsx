import { useState } from "react";

const Search = ({ cb = Function.prototype }) => {
    const [value, setValue] = useState("");

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    placeholder="Search"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />

                <button className="btn btn--position" onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;

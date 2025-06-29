import CategoryItem from "./CategoryItem";

const CategoryList = ({ catalog = [] }) => {
    return (
        <div className="list">
            {catalog.map((el) => {
                return <CategoryItem key={el.idCategory} {...el} />;
            })}
        </div>
    );
};

export default CategoryList;

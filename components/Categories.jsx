import { useState } from 'react';

const Categories = ({ categories, onClickCategory, setCategories, products }) => {
  const handleChange = (e) => {
    const category = e.target.value;
    onClickCategory(category);
  };
  console.log(categories);

  return (
    <div className="flex flex-col gap-4">
      <button value="" onClick={() => setCategories(products)}>
        All Category
      </button>
      {categories.map((category) => (
        <button key={category} value={category} onClick={handleChange}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;

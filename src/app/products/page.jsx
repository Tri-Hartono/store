'use client';
import { useState, useEffect, Suspense } from 'react';
import CardProducts from '../../../components/CardProducts';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchProducts } from '../../../redux/productSlice';

export default function Products() {
  const { data: products, status } = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    setCategories([...new Set(products.map((product) => product.category))]);
  }, []);

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchResult([]);
  };
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const searchQuery = searchInput.trim().toLowerCase();

    if (searchQuery) {
      const filteredProducts = selectedCategory ? products.filter((product) => product.category === selectedCategory) : products;

      const filteredAndSearchedProducts = filteredProducts.filter((product) => product.title.toLowerCase().includes(searchQuery));

      setSearchResult(filteredAndSearchedProducts);
    } else {
      setSearchResult([]);
    }
  };
  const filteredProducts = selectedCategory ? products.filter((product) => product.category === selectedCategory) : products;
  return (
    <div className="w-auto flex flex-col justify-between gap-20  md:flex-row relative">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 h-fit  ">
        <button onClick={() => handleCategorySelect('')}>All Categories</button>
        {status === STATUSES.LOADING ? (
          <p>Tunggu sebentar</p>
        ) : (
          <>
            {categories.map((category) => (
              <button key={category} onClick={() => handleCategorySelect(category)}>
                {category}
              </button>
            ))}
          </>
        )}
      </div>

      <div className="w-full space-y-4">
        <div className="flex items-center justify-center gap-4">
          <input type="text" placeholder="search data" value={searchInput} onChange={handleSearchInputChange} />
          <button onClick={handleSearch}>Cari</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {status === STATUSES.LOADING ? (
            <p>Loading data...</p>
          ) : (
            <>
              {(searchResult.length > 0 ? searchResult : filteredProducts).map((product) => (
                <CardProducts key={product.id} {...product} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

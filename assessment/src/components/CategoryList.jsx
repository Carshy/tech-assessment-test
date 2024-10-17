// src/components/Categories.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/slices/categorySlice'; 

const CategoryList = ({ onSelectCategory }) => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <div>
      <h2>Categories</h2>
      <div>
        {categories.map((category) => (
          <div key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

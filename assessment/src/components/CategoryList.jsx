// src/components/Categories.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/slices/categorySlice';

const CategoryList = ({ onSelectCategory }) => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  let content;

  if (status === 'loading') {
    content = <p>Loading categories...</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => handleCategoryClick(category)}>{category}</button>
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Categories</h2>
      {content}
    </div>
  );
};

export default CategoryList;

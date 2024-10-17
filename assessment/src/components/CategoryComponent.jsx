import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/slices/categorySlice';

const CategoryComponent = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  console.log('Show my Categories:', categories);

  useEffect(() => {
    dispatch(fetchCategories)
  }, [dispatch]);
  return (
    <div>
      {
        categories.map((category) => (
          <div
            key={category.id}
          >
            {categories}
          </div>
        ))
      }
    </div>
  )
}

export default CategoryComponent;

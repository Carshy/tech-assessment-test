// src/components/Jokes.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJokes } from '../redux/slices/jokesSlice';

const JokesList = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const { jokes, loading, error } = useSelector((state) => state.jokes);

  // Fetch jokes when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchJokes(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  if (!selectedCategory) return <p>Please select a category.</p>;
  if (loading) return <p>Loading jokes for {selectedCategory}...</p>;
  if (error) return <p>Error loading jokes: {error}</p>;

  return (
    <div>
      <h2>Jokes for: {selectedCategory}</h2>
      <ul>
        {jokes.length > 0 ? (
          jokes.map((joke) => <li key={joke.id}>{joke.value}</li>)
        ) : (
          <p>No jokes found for this category.</p>
        )}
      </ul>
    </div>
  );
};

export default JokesList;

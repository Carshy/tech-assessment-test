// src/components/Jokes.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJokes } from '../redux/slices/jokesSlice';

const JokesList = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const { jokes, loading, error } = useSelector((state) => state.jokes);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchJokes(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  if (!selectedCategory) return <p>Please select a category.</p>;
  if (loading) return <p>Loading jokes...</p>;
  if (error) return <p>Error loading jokes: {error}</p>;

  return (
    <div>
      <h2>Jokes for: {selectedCategory}</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default JokesList;

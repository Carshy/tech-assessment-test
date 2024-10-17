// src/components/Jokes.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJokesByCategory } from '../redux/slices/jokesSlice';

const JokesList = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const { jokes, status, error } = useSelector((state) => state.jokes);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchJokesByCategory(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  let content;

  if (!selectedCategory) {
    content = <p>Please select a category to view jokes.</p>;
  } else if (status === 'loading') {
    content = <p>Loading jokes for "{selectedCategory}"...</p>;
  } else if (status === 'succeeded') {
    if (jokes.length > 0) {
      content = (
        <ul>
          {jokes.map((joke) => (
            <li key={joke.id} style={{ marginBottom: '20px' }}>
              <img src={joke.icon_url} alt="Chuck Norris Icon" style={{ width: '50px', height: '50px' }} />
              <p>{joke.value}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      content = <p>No jokes found for "{selectedCategory}".</p>;
    }
  } else if (status === 'failed') {
    content = <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Jokes in Category: {selectedCategory}</h2>
      {content}
    </div>
  );
};

export default JokesList;

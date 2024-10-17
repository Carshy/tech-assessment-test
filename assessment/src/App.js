// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import CategoryList from './components/CategoryList';
import JokesList from './components/JokesList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Provider store={store}>
      <h1>Chuck Norris Jokes</h1>
      {/* Categories Component */}
      <CategoryList onSelectCategory={handleSelectCategory} />

      {/* Jokes Component */}
      <JokesList selectedCategory={selectedCategory} />
    </Provider>
  );
}

export default App;

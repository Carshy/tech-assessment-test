// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import CategoryList from './components/CategoryList';
import JokesList from './components/JokesList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Provider store={store}>
      <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Chuck Norris Jokes</h1>
        <CategoryList onSelectCategory={handleSelectCategory} />
        <JokesList selectedCategory={selectedCategory} />
      </div>
    </Provider>
  );
};

export default App;

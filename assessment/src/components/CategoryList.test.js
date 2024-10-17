import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CategoryList from './CategoryList';

const mockStore = configureStore([]);

describe('Categories Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      category: {
        categories: ['animal', 'career', 'celebrity'],
        isLoading: false,
        error: null
      }
    });
  });

  it('renders categories correctly', () => {
    render(
      <Provider store={store}>
        <CategoryList />
      </Provider>
    );

    // Check if categories are rendered
    expect(screen.getByText('animal')).toBeInTheDocument();
    expect(screen.getByText('career')).toBeInTheDocument();
    expect(screen.getByText('celebrity')).toBeInTheDocument();
  });

  it('shows loading when isLoading is true', () => {
    store = mockStore({
      category: {
        categories: [],
        isLoading: true,
        error: null
      }
    });

    render(
      <Provider store={store}>
        <CategoryList />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error message if fetching fails', () => {
    store = mockStore({
      category: {
        categories: [],
        isLoading: false,
        error: 'Failed to fetch categories'
      }
    });

    render(
      <Provider store={store}>
        <CategoryList />
      </Provider>
    );

    expect(screen.getByText('Failed to fetch categories')).toBeInTheDocument();
  });
});

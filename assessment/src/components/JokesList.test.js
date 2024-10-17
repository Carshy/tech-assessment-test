import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import JokesList from './JokesList';

const mockStore = configureStore([]);

describe('Jokes Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      category: {
        jokes: [
          { id: '1', value: 'Joke 1' },
          { id: '2', value: 'Joke 2' }
        ],
        isLoading: false,
        error: null
      }
    });
  });

  it('renders jokes correctly', () => {
    render(
      <Provider store={store}>
        <JokesList />
      </Provider>
    );

    // Check if jokes are rendered
    expect(screen.getByText('Joke 1')).toBeInTheDocument();
    expect(screen.getByText('Joke 2')).toBeInTheDocument();
  });

  it('shows loading when isLoading is true', () => {
    store = mockStore({
      category: {
        jokes: [],
        isLoading: true,
        error: null
      }
    });

    render(
      <Provider store={store}>
        <JokesList />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error message if fetching jokes fails', () => {
    store = mockStore({
      category: {
        jokes: [],
        isLoading: false,
        error: 'Failed to fetch jokes'
      }
    });

    render(
      <Provider store={store}>
        <JokesList />
      </Provider>
    );

    expect(screen.getByText('Failed to fetch jokes')).toBeInTheDocument();
  });
});

import './App.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import CategoryList from './components/CategoryList';
// import JokesList from './components/JokesList';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CategoryList />
        {/* <JokesList /> */}
      </Provider>
    </div>
  );
}

export default App;

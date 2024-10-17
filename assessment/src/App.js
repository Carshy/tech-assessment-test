import './App.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import CategoryComponent from './components/CategoryComponent';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CategoryComponent />
      </Provider>
    </div>
  );
}

export default App;

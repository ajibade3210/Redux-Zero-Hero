import MealContainer from './components/MealContainer'
import {Provider} from "react-redux"
import store from './redux/store'
import './App.css';
import SnackContainer from './components/SnackContainer';
import ClothContainer from './components/ClothContainer';
import ArticleContainer from './components/ArticleContainer';
import UsersContainer from './components/usersContainer';


function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <MealContainer/>
          <SnackContainer />
          <ClothContainer/>
          <ArticleContainer/>
          <UsersContainer />
        </div>
      </Provider>
  );
}

export default App;

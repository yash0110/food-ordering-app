import Header from './components/Header/Header'
import MealsSummary from './components/constants/MealsSummary'
import MealList from './components/Meals/MealList';

import './css/Header.css'

function App() {
  return (
    <div>
        <Header />
        <div className='main-image'>
            <img src={require('./images/meals.jpg')} alt='Meals' />
        </div>
        <MealsSummary />
        <MealList />
    </div>
  );
}

export default App;

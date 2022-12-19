import React from 'react';
import Header from './components/Header/Header'
import MealsSummary from './components/MealsSummary'
import MealList from './components/Meals/MealList';

import './css/Header.css'

function App() {
    return (
        <React.Fragment> 
            <Header />
            <div className='main-image'>
                <img src={require('./images/meals.jpg')} alt='Meals' />
            </div>
            <MealsSummary />
            <MealList />
        </React.Fragment>
    );
}

export default App;

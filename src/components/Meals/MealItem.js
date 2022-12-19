import MealItemForm from './MealItemForm';

import '../../css/MealItem.css'

const MealItem = (props) => {
    return (
        <li className='meal'>
            <div>
                <h3>{props.item.name}</h3>
                <div className='description'>{props.item.description}</div>
                <div className='price'>{'$'+props.item.price.toFixed(2)}</div>
            </div>
            <MealItemForm itemID={props.item.id}/>
        </li>
    );
}

export default MealItem;
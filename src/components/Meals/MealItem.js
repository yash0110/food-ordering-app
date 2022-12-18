import MealItemForm from './MealItemForm';

import '../../css/MealItem.css'

const MealItem = (props) => {
    return (
        <div className='meal'>
            <div>
                <h3>{props.item.name}</h3>
                <div className='description'>{props.item.description}</div>
                <div className='price'>{props.item.price}</div>
            </div>
            <MealItemForm />
        </div>
    );
}

export default MealItem;
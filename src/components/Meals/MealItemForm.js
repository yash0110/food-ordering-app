import Input from '../UI/Input';
import { useState, useContext } from 'react';

import '../../css/MealItemForm.css'
import CartContext from '../../store/cart-context';

const MealItemForm = (props) => {
    const cart_ctx = useContext(CartContext);

    const [inputAmount, setInputAmount] = useState(+1);

    const onChangeHandler = (amount) => {
        setInputAmount(amount);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        cart_ctx.addItem(props.itemID, inputAmount);

        setInputAmount(1);
    }

    return (
        <form className='form' onSubmit={onSubmitHandler}>
            <Input label='Amount' onChange={onChangeHandler} input={{item: props.item,
                           type: 'number',
                           min: 1,
                           max: 5,
                           defaultValue: inputAmount,
            }}/>
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;
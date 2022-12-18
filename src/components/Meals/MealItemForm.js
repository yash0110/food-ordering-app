import Input from '../UI/Input';

import '../../css/MealItemForm.css'

const MealItemForm = (props) => {
    return (
        <form className='form'>
            <Input label='Amount' value={1}/>
            <button>+Add</button>
        </form>
    );
}

export default MealItemForm;
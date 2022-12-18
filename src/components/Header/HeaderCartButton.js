import CartIcon from '../UI/CartIcon'
import '../../css/HeaderCartButton.css'

const HeaderCartButton = (props) => {
    return (
        <button className='button'>
            <CartIcon className='icon'/>
            Your Cart
            <span className='badge'>0</span>
        </button>
    );
}

export default HeaderCartButton;
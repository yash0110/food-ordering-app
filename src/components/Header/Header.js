import HeaderCartButton from './HeaderCartButton';

import '../../css/Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <h2>ReactMeals</h2>
            <HeaderCartButton />
        </div>
    );
}

export default Header;
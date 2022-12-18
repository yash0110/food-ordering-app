import '../../css/Input.css'

const Input = (props) => {
    return (
        <div className='input'>
            <label>{props.label}</label>
            <input value={props.value}/>
        </div>
    );
}

export default Input;
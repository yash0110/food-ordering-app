import '../../css/Input.css'

const Input = (props) => {
    const onChangeHandler = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className='input'>
            <label>{props.label}</label>
            <input onChange={onChangeHandler} {...props.input}/>
        </div>
    );
}

export default Input;
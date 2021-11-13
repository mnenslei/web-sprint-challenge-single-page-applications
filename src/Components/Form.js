import React from "react";

const Form = (props) => {
    const { change, submit, disabled, errors } = props;
    const { name, size, pepperoni, mushrooms, pineapple, peppers, special } = props.values;
    
    const onChange = (e) => {
        const{ name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return(
        <div>
            <p>{errors.name}</p>
            <p>{errors.special}</p>
            <h2>Order yo pizzaaaa and get out! or stay, up to you</h2>
            <form id='pizza-form' onSubmit={onSubmit}>
                <label> Pizza order for:
                    <input
                        id='name-input'
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </label>

                <label> Size: 
                    <select id='size-dropdown' name='size' value={size} onChange={onChange}>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='thicc'>THICC</option>
                    </select>
                </label>

                <div>
                    <h3>Select Obi Toppings</h3>
                <label> Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        checked={pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label> Mushrooms
                    <input
                        type='checkbox'
                        name='mushrooms'
                        checked={mushrooms}
                        onChange={onChange}
                    />
                </label>
                <label> Pineapple
                    <input
                        type='checkbox'
                        name='pineapple'
                        checked={pineapple}
                        onChange={onChange}
                    />
                </label>
                <label> Peppers
                    <input
                        type='checkbox'
                        name='peppers'
                        checked={peppers}
                        onChange={onChange}
                    />
                </label>
                </div>
                <label> Special Instructions:
                    <input
                        id='special-text'
                        type='text'
                        name='special'
                        value={special}
                        onChange={onChange}
                    />
                </label>
                <div>
                    <button id='order-button' disabled={disabled}>Add Order</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
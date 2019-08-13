import React from 'react';
import './form-input.styles.scss';
//use of spread operator is efficient. As we dont need what all attributes are passed, its better to
//store the necessary params, and spread across all other user given params.
const FormInput = ({ handleChange, label, ...otherProps }) => (

  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps}/>
    {
      label ?
      (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>)
      :null
    }
  </div>
)

export default FormInput;

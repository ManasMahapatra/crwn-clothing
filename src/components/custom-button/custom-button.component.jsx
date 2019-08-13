import React from 'react';
import './custom-button.styles.scss';
//buttons can accept the attribute of type=submit like input
//Props are the attributes that are based while type declaration. props.children contain the characters passed between tags
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;

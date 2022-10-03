import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({children, name, onClick}) => (
	<button 
		className={[styles.btn, styles[name]].join(' ')} 
		onClick={onClick}
	>
		{children}
	</button>
);

Button.propTypes = {
	children: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Button;
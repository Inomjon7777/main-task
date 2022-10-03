import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './NewGame.module.scss';

const NewGame = ({maxScore, onClick}) => {
	const [valueMaxScore, setvalueMaxScore] = React.useState(maxScore);

	const handleInputChange = (e) => {
		setvalueMaxScore(+e.target.value)
	}

	const newGame = () => {
		onClick(valueMaxScore)
	}

	return (
		<>
			<Button name={'new'} onClick={newGame}>New Game</Button>
			<label 
				className={styles['maxScore-label']} 
				htmlFor="valueMaxScore"
			>
				Final Score
			</label>

			<input 
				onChange={handleInputChange}
				name="valueMaxScore"
				value={valueMaxScore}
				type="number" 
				className={styles['maxScore-input']}/>
		</>
	)
}

NewGame.propTypes = {
	maxScore: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default NewGame;
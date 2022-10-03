import React from 'react';
import PropTypes from 'prop-types';
import styles from './Player.module.scss';

const Player = ({player, isActive}) => {
	const {name, score, currentScore, winner} = player;
	
	const style = [styles.player]
	style.push(winner ? styles['winner'] : !isActive || styles['active']);

	return (
		<div className={style.join(' ')}>
			<div className={styles.name}>{name}</div>
			<div className={styles.score}>{score}</div>
			<div className={styles['current-box']}>
				<div className={styles['current-label']}>Current</div>
				<div className={styles['current-score']}>{currentScore}</div>
			</div>
		</div>
	);
}

Player.propTypes = {
	player: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired
}

export default Player;

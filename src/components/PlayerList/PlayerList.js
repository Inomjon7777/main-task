import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import styles from './PlayerList.module.scss';

const PlayerList = ({players, currentPlayer}) => (

	<div className={styles.game}>
	{
		players.map((player, index) => {
			const isActive = +currentPlayer === index;
			return (
				<Player 
					key={index}
					player={player}
					isActive={isActive}
				/>
			);
		})
	}
	</div>
);

PlayerList.propTypes = {
	players: PropTypes.arrayOf(PropTypes.object).isRequired,
	currentPlayer: PropTypes.bool.isRequired
}

export default PlayerList;
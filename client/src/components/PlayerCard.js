import React from 'react';

export default function PlayerCard(props){
    console.log('card', props.players);
    return(
        <div>
            {
                props.players.map(player => {
                    return (
                        <div>
                            <h2>{player.name}</h2>
                            <h3>{player.country}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
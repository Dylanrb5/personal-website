import React from 'react'

const TierlistItem = ({name, sc}) => {
    return (
        <div className="tier-item">
            <img src={sc} alt="tierlist item" className="tier-item"/>
            <div className='tier-item-desc w-4 h-4 bg-slate-400 flex justify-center flex-col text-center'>
                <p>{name}</p>
            </div>
        </div>
    )
  }

export default TierlistItem
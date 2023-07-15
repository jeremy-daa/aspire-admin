import React from 'react'

const a = [1, 2, 3, 4]
export default function SubscribersLoading() {
  return (
    <div className='subscriber__loading'>
        {a.map((i) => (
            <div key={i} className='subscriber__loading__con'>
                <div className='subscriber__loading__text loading'></div>
            </div>
        ))}
        
    </div>
  )
}

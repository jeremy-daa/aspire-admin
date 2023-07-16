import React from 'react'

const a = [1, 2, 3, 4]
export default function BlogLoading() {
  return (
    <div className='blog__loading'>
        {a.map((i) => (
            <div key={i} className='blog__loading__con'>
                <div style={{height: "100%", flex: .5}} className='loading'></div>
                <div style={{height: "100%", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "16px", gap: "8px"}} >
                    <div style={{height: "16px", borderRadius: "4px", width: "50%"}} className='loading'></div>
                    <div style={{height: "16px", borderRadius: "4px", width: "75%"}} className='loading'></div>
                    <div style={{height: "16px", borderRadius: "4px", width: "75%"}} className='loading'></div>
                </div>
            </div>
        ))}
    </div>
  )
}

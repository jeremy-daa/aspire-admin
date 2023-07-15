'use client'
import React from 'react'

export default function Test() {

    const handleImage = async (e: any) => {
        // const img = e.target.files[0]
        // const data = new FormData()
        // data.append('file', img)
        // data.append('upload_preset', 'afriopia')

        // const res = await fetch('https://api.cloudinary.com/v1_1/drp73bqti/image/upload', {
        //     method: 'POST',
        //     body: data
        // })
        // const json = await res.json()
        // console.log(json)
    }
  return (
    <div>
        <input type="file" accept="image/*" onChange={handleImage}/>
    </div>
  )
}

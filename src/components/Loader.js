import React from 'react'
import loading from "./Loading.gif"

export default function Loader(props) {
    return (
      <div className='text-center justify-content-center'>
        <img style={{width: "50px" , height : "50px"}} src={loading} alt="Loading..." />
      </div>
    )
}

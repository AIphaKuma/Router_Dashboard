import React from 'react'
import { useParams } from 'react-router-dom'

export default function Wildcard() {
    const {wildcard} = useParams();

    
  return (
    <div>
        <h2> {wildcard} </h2>
    </div>
  )
}

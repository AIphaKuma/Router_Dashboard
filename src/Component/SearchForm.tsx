import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
    
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();
    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate('/${value}');
    }
  return (
    <form>
        <input></input>
        <button>Rechercher</button>
    </form>

  )
}

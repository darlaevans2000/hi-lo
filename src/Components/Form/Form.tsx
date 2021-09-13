import React, { useState, useEffect } from 'react'
import './Form.css'
import { fetchCityForecast } from '../../apiCalls'

const Form = () => {
  const [cityInput, setCityInput] = useState('')
  const disableSearch = cityInput.trim() === '';


  useEffect(() => {
    fetchCityForecast(cityInput)
  }, [cityInput])

  return (
    <div className='searchForm'>
      <form>
        Search Location <input type='text' value={cityInput} onChange={e => setCityInput(e.target.value)}/>
        <button disabled={disableSearch}>Search</button>
      </form>
    </div>
  )
}

export default Form

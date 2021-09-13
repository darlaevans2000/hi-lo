import React, { FC, useState, useEffect } from 'react'
import './Form.css'
import { fetchCityForecast } from '../../apiCalls'

interface SearchCityProps {
  onSearch: (cityInput: string) => void;
}

const Form: FC<SearchCityProps> = ({ onSearch }) => {
  const [cityInput, setCityInput] = useState('')
  const disableSearch = cityInput.trim() === '';

  const addCity = () => {
    onSearch(cityInput)
    setCityInput('')
  }

  useEffect(() => {
    fetchCityForecast(cityInput)
  }, [cityInput])

  return (
    <div className='searchForm'>
      <form>
        Search Location <input type='text' value={cityInput} onChange={e => setCityInput(e.target.value)}/>
        <button onClick={addCity} disabled={disableSearch}>Search</button>
      </form>
    </div>
  )
}

export default Form

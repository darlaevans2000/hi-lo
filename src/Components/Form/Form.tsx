import React, { FC, useState, useEffect } from 'react'
import './Form.css'
import { fetchCityForecast } from '../../apiCalls'

interface SearchCityProps {
  onSearch: (cityInput: string) => void;
}

const Form: FC<SearchCityProps> = ({ onSearch }) => {
  const [cityInput, setCityInput] = useState('')
  const disableSearch = cityInput.trim() === '';

  const addCity = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    onSearch(cityInput)
    setCityInput('')
  }

  return (
    <div className='searchForm'>
      <form>
        Search Location <input type='text' value={cityInput} onChange={e => setCityInput(e.target.value)}/>
        <button type='submit' onClick={addCity} disabled={disableSearch}>Search</button>
      </form>
    </div>
  )
}

export default Form

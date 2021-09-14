import React, { FC, useState, useEffect } from 'react'
import './Form.css'
import { fetchCityForecast } from '../../apiCalls'

interface SearchCityProps {
  onSearch: (cityInput: string) => void;
}

export const Form: FC<SearchCityProps> = ({onSearch}) => {
  const [cityInput, setCityInput] = useState('')
  const disableSearch = cityInput.trim() === '';

  const addCity = () => {
    onSearch(cityInput);
    setCityInput('');
  };

  return (
    <div className='searchForm'>
      <form>
        <label>
        Search by City 
        <input className="search-by-city" type="text" value={cityInput}
               onChange={e => setCityInput(e.target.value)}/>
        </label>
        <button className="search-btn" type='submit' onClick={addCity} disabled={disableSearch}>Search</button>
      </form>
    </div>
  )
}

export default Form

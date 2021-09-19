import React, { FC, useState } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete'
import './Form.css'
interface SearchCityProps {
  onSearch: (cityInput: string) => void;
}

export const Form: FC<SearchCityProps> = ({onSearch}) => {
  const [cityInput, setCityInput] = useState('');
  const disableSearch = cityInput.trim() === '';
  const [coordinates, setCoordinates] = useState({});
 
  const handleSelect = async (value:string) => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setCityInput(value)
    setCoordinates(latLng)
  };

  const addCity = () => {
    onSearch(cityInput);
    setCityInput('');
  };

  const searchOptions = {
  types: ['(cities)']
}

  return (
    <div className='searchForm'>
      <PlacesAutocomplete
        value={cityInput}
        onChange={setCityInput}
        onSelect={handleSelect}
        searchOptions={searchOptions}
        >{({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
        <div>
          <label>Search by City  </label>
          <input id="searchInput" {...getInputProps({placeholder: "Type City"})}/>
          <div>
            {loading ? <div>loading...</div> : null}
            {suggestions.map((suggestion) => {
              const style = suggestion.active
               ? {backgroundColor: "#668b8a"}
               :  {backgroundColor: "#ffff"};
               
              return <div{...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
            })}
             <button className="search-btn" type='submit' onClick={addCity} disabled={disableSearch}>Search</button>
          </div>
        </div>
        )}
      </PlacesAutocomplete>
      </div>
  )
}

export default Form

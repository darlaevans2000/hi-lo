import { FC, useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import './Form.css'

interface SearchCityProps {
  onSearch: (cityInput: string) => void;
}

export const Form: FC<SearchCityProps> = ({onSearch}) => {
  const [cityInput, setCityInput] = useState<string>('');
  const disableSearch = cityInput.trim() === '';

  const handleSelect = async (value:string) => {
    const results = await geocodeByAddress(value)
    setCityInput(results[0].formatted_address)
  };

  const cleanInput = (input: string) => {
    if (input.includes('USA')) {
      let newInput = input.split('')
      let slicedInput = newInput.slice(0, -1)
      return slicedInput.join('')
    }
    return input;
  }

  const addCity = () => {
    onSearch(cleanInput(cityInput));
    setCityInput('');
  };

  const searchOptions = {
  types: ['(cities)']
}

  return (
    <div className='searchForm'>
      <form className="search-by-city">
      <PlacesAutocomplete
        value={cityInput}
        onChange={setCityInput}
        onSelect={handleSelect}
        searchOptions={searchOptions}
        >
        {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
        <div className="autocomplete">
          <label>Search by City</label>
          <input className="my-input" id="searchInput" {...getInputProps({placeholder: "Type City"})}/>
          <button className="search-btn" type='submit' onClick={addCity} disabled={disableSearch}>add</button>
          <div className="suggestions">
            {loading ? <div>Loading...</div> : null}
            {suggestions.map((suggestion) => {
              const style = suggestion.active
               ? {backgroundColor: "#668b8a"}
               :  {backgroundColor: "#ffff"};

              return <li{...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</li>
            })}
          </div>
        </div>
        )}
      </PlacesAutocomplete>
      </form>
      </div>
  )
}


export default Form

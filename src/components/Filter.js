import {BiSolidDownArrow} from 'react-icons/bi';
import { useState } from 'react';

const Filter = ({setSearchValue, setPageNumber}) => {

    const [visibleCheckbox, setVisibleCheckbox] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputStatusValue, setInputStatusValue] = useState('');
    const [inputSpeciesValue, setInputSpeciesValue] = useState('');
    const [inputTypeValue, setInputTypeValue] = useState('');
    const [inputGenderValue, setInputGenderValue] = useState('');
    const [locationType, setLocationType] = useState('');
    const [locationDemantion, setLocationDemantion] = useState('');
    const [episodeValue, setEpisodeValue] = useState('');
    const [character, setCharacter] = useState(false);
    const [episode, setEpisode] = useState(false);
    const [location, setLocation] = useState(false);
  
    
  const  handleInputChange = event => {
        const { value, name} = event.currentTarget;
        console.log("input value --->", value);
        console.log("input name --->", name)
        // setInputValue(value);
    }

   const handleSubmit = event => {
        event.preventDefault();
        setPageNumber(1);
        setSearchValue(() => inputValue);
        reset();
    }

   const reset = () => {
        setInputValue('');
    }

    const handleCheckboxChange = (value) => {
       if(value === 'character'){
        setCharacter(s => !s)
       }
       if(value === 'episode'){
        setEpisode(s => !s)
       }
       if(value === 'location'){
        setLocation(s => !s)
       }
    }

       return (
        <form className="filter__container" >
            <div className="filter__select">
                <div className='filter__select-main'><span>Select item</span> <BiSolidDownArrow onClick={() => setVisibleCheckbox(visibleCheckbox => !visibleCheckbox)}/></div>
                {visibleCheckbox && <div className='filter__checkbox-wraper'>
                    <div className='filter__checkbox'>
                        <span>Character</span>
                        <input type='checkbox' value={character} onChange={() => handleCheckboxChange("character")}/>
                    </div>
                    <div className='filter__checkbox'>
                        <span>Location</span>
                        <input type='checkbox' value={location} onChange={() => handleCheckboxChange("location")}/>
                    </div>
                    <div className='filter__checkbox'>
                        <span>Episode</span>
                        <input type='checkbox' value={episode} onChange={() => handleCheckboxChange("episode")}/>
                    </div>
                </div>}  
            </div>
 
                <div className='filter__input-container'>
                    <input 
                        className='filter__input' 
                        type='text' 
                        value={inputValue}
                        name='common' 
                        placeholder='Add key words to find'
                        onChange={handleInputChange}
                    />
                    {character && 
                    <div className='filter__input-wrapper'>
                        <input
                            className='filter__input' 
                            type='text' 
                            value={inputStatusValue}
                            name='status' 
                            placeholder='Add status'
                            onChange={handleInputChange}
                        />
                        <input
                            className='filter__input' 
                            type='text' 
                            value={inputSpeciesValue}
                            name='species' 
                            placeholder='Add species'
                            onChange={handleInputChange}
                        />
                        <input
                            className='filter__input' 
                            type='text' 
                            value={inputTypeValue}
                            name='type' 
                            placeholder='Add type'
                            onChange={handleInputChange}
                        />
                        <input
                            className='filter__input' 
                            type='text' 
                            value={inputGenderValue}
                            name='gender' 
                            placeholder='Add gender'
                            onChange={handleInputChange}
                        />
                    </div>
                    }
                    {location &&
                    <div className='filter__input-wrapper'>
                        <input
                            className='filter__input' 
                            type='text' 
                            value={locationType}
                            name='locationtype' 
                            placeholder='Add type'
                            onChange={handleInputChange}
                        />
                        <input
                            className='filter__input' 
                            type='text' 
                            value={locationDemantion}
                            name='locationdemantion' 
                            placeholder='Add demantion'
                            onChange={handleInputChange}
                        />
                    </div>
                    }
                    {episode &&
                    <div className='filter__input-wrapper'>
                        <input
                            className='filter__input' 
                            type='text' 
                            value={episodeValue}
                            name='episode' 
                            placeholder='Add episode'
                            onChange={handleInputChange}
                        />
                    </div>
                    }
                 </div>

            <button type='submit' onClick={handleSubmit} className='filter__btn'>Find</button>
        </form>
    ) 
};

export default Filter;

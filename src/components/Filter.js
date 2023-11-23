import {BiSolidDownArrow} from 'react-icons/bi';
import Search from './Search';
import { useState } from 'react';

const Filter = ({setSearchValue, setPageNumber}) => {

    const [visibleCheckbox, setVisibleCheckbox] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    
  const  handleInputChange = event => {
        const {name, value} = event.currentTarget;
        setInputValue(value);
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


       return (
        <form className="filter__container" >
            <div className="filter__select">
                <div className='filter__select-main'><span>Select item</span> <BiSolidDownArrow onClick={() => setVisibleCheckbox(visibleCheckbox => !visibleCheckbox)}/></div>
                {visibleCheckbox && <div className='filter__checkbox-wraper'>
                    <div className='filter__checkbox'>
                        <span>Character</span>
                        <input type='checkbox'/>
                    </div>
                    <div className='filter__checkbox'>
                        <span>Location</span>
                        <input type='checkbox'/>
                    </div>
                    <div className='filter__checkbox'>
                        <span>Episode</span>
                        <input type='checkbox'/>
                    </div>
                </div>}
                
            </div>
 
            <div className='filter__input-container'>
                <input 
                    className='filter__input' 
                    type='text' 
                    value={inputValue}
                    name='character' 
                    placeholder='Add key words to find'
                    onChange={handleInputChange}
                />
            </div>

            <button type='submit' onClick={handleSubmit} className='filter__btn'>Find</button>
        </form>
    ) 
};

export default Filter;

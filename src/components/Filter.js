import { Component } from 'react';
import {BiSolidDownArrow} from 'react-icons/bi';

class Filter extends Component {

    state = {
        isOpenSelect: true,
        character: ''
    }

    handleInputChange = event => {
        const {name, value} = event.currentTarget;

        this.setState({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onFilter(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({character: ''})
    }

    render(){
       return (
        <form className="filter__container" onSubmit={this.handleSubmit}>
            <div className="filter__select">
                <div className='filter__select-main'><span>Select item</span> <BiSolidDownArrow/></div>
            </div>
 
            <div className='filter__input-container'>
                <input 
                className='filter__input' 
                type='text' 
                value={this.state.character}
                name='character' 
                placeholder='Add key words to find'
                onChange={this.handleInputChange}
                />
            </div>

            <button type='submit' className='filter__btn'>Find</button>
        </form>
    ) 
    }
    
};

export default Filter;
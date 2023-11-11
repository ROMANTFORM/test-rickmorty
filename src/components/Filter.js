
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import {BiSolidDownArrow} from 'react-icons/bi';

const Filter = ({value, onChange}) => {

    
//   const  handleInputChange = event => {
//         const {name, value} = event.currentTarget;

//         this.setState({[name]: value})
//     }

//    const handleSubmit = event => {
//         event.preventDefault();
//         this.props.onFilter(this.state.character);
//         reset();
//     }

//    const reset = () => {
//         this.setState({character: ''})
//     }

       return (
        <form className="filter__container" >
            <div className="filter__select">
                <div className='filter__select-main'><span>Select item</span> <BiSolidDownArrow/></div>
            </div>
 
            <div className='filter__input-container'>
                <input 
                    className='filter__input' 
                    type='text' 
                    value={value}
                    name='character' 
                    placeholder='Add key words to find'
                    onChange={onChange}
                />
            </div>

            <button type='submit' className='filter__btn'>Find</button>
        </form>
    ) 
};

const mapStateToProps = state => {
    return {
        value: state.filterState
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChange: (event) => dispatch(actions.ChangeFilter(event.currentTarget.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

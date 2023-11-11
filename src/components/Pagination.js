import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';


const Pagination = ({value, next, prev}) => {

    return (
        <div className="pagination__container">
            <button type="button" onClick={prev} className="pagination__btn"><IoIosArrowBack/></button>
            <div className='pagination__btn-num'></div>
            <button type="button" onClick={next} className="pagination__btn"><IoIosArrowForward/></button>
        </div>
    )   
};

const mapStateToProps = state => {
        return {
            value: state.pageNumber
        }
};
const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch(actions.NextPageNum(1)),
        prev: () => dispatch(actions.PrevPageNum(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination) ;
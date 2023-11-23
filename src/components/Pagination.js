import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import ReactPaginate from 'react-paginate';


const Pagination = ({setPageNumber, info}) => {

    // const prev = () => {
    //     setPageNumber(prevState => prevState !== 1 ? prevState - 1 : prevState)
    // };

    // const next = () => {
    //     setPageNumber(prevState => prevState + 1)
    // };

    return (
        <ReactPaginate 
            className="pagination__container" 
            pageCount={info?.pages}
            previousLabel={<IoIosArrowBack/>}
            previousClassName="pagination__btn"
            nextLabel={<IoIosArrowForward/>}
            nextClassName='pagination__btn'
            onPageChange={(data) => {setPageNumber(data.selected + 1 )}}
            activeClassName="pagination__btn-active"
            disabledClassName="pagination__btn-disable"
        />
        // <div className="pagination__container">
            
        //     <button type="button" onClick={prev}  className="pagination__btn"><IoIosArrowBack/></button>
        //     <div className='pagination__btn-num'></div>
        //     <button type="button" onClick={next}  className="pagination__btn"><IoIosArrowForward/></button>
        // </div>
    )   
};

export default Pagination;
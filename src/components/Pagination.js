import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';


const Pagination = ({changeNum, pageNum}) => {

    const prev = () => { 
        if(pageNum === 1){
            return
        }
        let prevPage = pageNum - 1
        changeNum(prevPage)
    }

    const next = () => {
        let nextPage = pageNum + 1
        changeNum(nextPage)
    }

   

    return (
        <div className="pagination__container">
            <button type="button" onClick={prev} className="pagination__btn"><IoIosArrowBack/></button>
            <div className='pagination__btn-num'></div>
            <button type="button" onClick={next} className="pagination__btn"><IoIosArrowForward/></button>
        </div>
    )
};

export default Pagination;
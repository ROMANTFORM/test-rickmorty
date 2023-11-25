import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsDownload, BsExclamationCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";


function DetailCard ({id}) {

    const [fetchData, setFetchData] = useState([]);
    const [visibleBtns, setVisibleBtns] = useState(false);
    const [visibleSidebar, setVisibleSidebar] = useState(false);
  

    let api = `https://rickandmortyapi.com/api/character/${id}`;
    

    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => setFetchData(data))
    }, [api]);
  

    let indicator = '';
    
        if(fetchData?.status === 'Alive'){
            indicator = 'green'
        }
        if(fetchData?.status === 'Dead'){
            indicator = 'red'
        }
       

       
            return (
        <div className="detail-card__section">
            <div className="detail-card__conatiner">
                <img className="detail-card__img" src={fetchData?.image} alt="pic"/>
                <div className="detail-card-descr__container">
                    <div className="card__title-container">
                        <h3 className="card__title">{fetchData?.name}</h3>
                        <p className="card__title-descr"><span style={{background: indicator}}></span>{fetchData?.status} - {fetchData?.species}</p>
                    </div>
                    <div className="card__location-container">
                        <p className="card__label">Last known location:</p>
                        <p className="card__descr">{fetchData?.location?.name}</p>
                    </div>
                    <div className="card__seen-container">
                        <p className="card__label">First seen in:</p>
                        <p className="card__descr">{fetchData?.episode?.[0]}</p>
                    </div>
                    <div className="card__other-container">
                        <p className="card__label">Other info:</p>
                        <p className="card__descr">
                        created: {fetchData?.created}
                        </p>
                    </div>
                </div>
            </div>

            <div className="history-btn__container">
                {visibleBtns && <button type="button" className="history-btn info__btn" onClick={() => setVisibleSidebar(true)}><BsExclamationCircle /></button>}
                {visibleBtns && <button type="button" className="history-btn download__btn"><BsDownload /></button>}
                <button type="button" className="history-btn menu__btn" onClick={() => setVisibleBtns(visibleBtns => !visibleBtns)}>
                    {visibleBtns ? <IoMdClose /> : <HiOutlineDotsVertical /> }    
                </button>  
            </div>

            <Sidebar  setVisibleSidebar={setVisibleSidebar} visibleSidebar={visibleSidebar}/>
            
        </div>  
        )
        
        
    
    
};

export default DetailCard;
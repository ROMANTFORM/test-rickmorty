import Card from "../components/Card";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ReactLoading from 'react-loading';
import React, { useState, useEffect } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsDownload, BsExclamationCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Sidebar from "../components/Sidebar";



function Home () {

    const [pageNumber, setPageNumber] = useState(1);
    const [fetchData, setFetchData] = useState([]);
    const [visibleFilter, setVisibleFilter] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [visibleBtn, setVisibleBtn] = useState(false);
    const [visibleSidebar, setVisibleSidebar] = useState(false)

    const [searchValue, setSearchValue] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');

    let {info, results} = fetchData;
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${stringToLowerCase(searchValue)}&status=${stringToLowerCase(status)}&species=${stringToLowerCase(species)}&type=${stringToLowerCase(type)}&gender=${stringToLowerCase(gender)}`;

    function stringToLowerCase(string){
        return string.toLowerCase();
    }

    function clearedFilter(){
        setSearchValue('');
        setStatus('');
        setSpecies('');
        setType('');
        setGender('');
        setPageNumber(1);
    }

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then(res => {
                setIsLoading(true)
                return res.json()
            });  
            setFetchData(data);
            setIsLoading(false);   
        })()
    }, [api]);

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(searchValue));
    }, [searchValue])

   
       return (
        <div className="home-page__container">
            {isLoading && <ReactLoading type={ReactLoading.spinningBubbles} color={'#fff'} height={300} width={300}  />}
            
            <div className="home-page__filter-container">
                <button 
                    type="button" 
                    onClick={() => {
                        setVisibleFilter(visibleFilter => !visibleFilter);
                        clearedFilter()
                    }} 
                    className="home-page__btn-filter"
                    >
                        {!visibleFilter ? 'Filter' : 'Remove filter'}
                    </button>

                {visibleFilter && <Filter 
                    setPageNumber={setPageNumber} 
                    setSearchValue={setSearchValue}
                    setStatus={setStatus}
                    setSpecies={setSpecies}
                    setType={setType}
                    setGender={setGender}
                    />}
             </div>
            
            <ul className="home-page__list">
                {results?.map(item => (
                    <li key={item.id}>
                        <Card item={item}/>
                    </li>
                ))}  
            </ul>

            <Pagination info={info} setPageNumber={setPageNumber}/> 

            <div className="history-btn__container">
                {visibleBtn && <button type="button" className="history-btn info__btn" onClick={() => setVisibleSidebar(true)}><BsExclamationCircle /></button>}
                {visibleBtn && <button type="button" className="history-btn download__btn" disabled><BsDownload /></button>}
                <button type="button" className="history-btn menu__btn" onClick={() => setVisibleBtn(visibleBtn => !visibleBtn)}>
                    {visibleBtn ? <IoMdClose /> : <HiOutlineDotsVertical /> }    
                </button>  
            </div>

           <Sidebar setVisibleSidebar={setVisibleSidebar} visibleSidebar={visibleSidebar}/>
        </div>
        )        
};

export default Home;
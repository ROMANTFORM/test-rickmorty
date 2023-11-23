import Card from "../components/Card";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ReactLoading from 'react-loading';
import React, { useState, useEffect } from 'react';



function Home () {

    const [pageNumber, setPageNumber] = useState(1);
    const [fetchData, setFetchData] = useState([]);
    const [visibleFilter, setVisibleFilter] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    let {info, results} = fetchData;
    const normalizeSearchValue = searchValue.toLowerCase();

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${normalizeSearchValue}`;
    // console.log(searchValue)

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then(res => {
                setIsLoading(true)
                return res.json()
            });
            
            setFetchData(data);
            setIsLoading(false)
        })()
    }, [api]);


//  const filteredData = results?.filter(item => item.name.toLowerCase().includes(normalizeSearchValue));
   

       return (
        <div className="home-page__container">
            {isLoading && <ReactLoading type={ReactLoading.spinningBubbles} color={'#fff'} height={300} width={300}  />}
            
            <div className="home-page__filter-container">
                <button type="button" onClick={() => setVisibleFilter(visibleFilter => !visibleFilter)} className="home-page__btn-filter">Filter</button>
                {visibleFilter && <Filter setPageNumber={setPageNumber} setSearchValue={setSearchValue}/>}
             </div>
            
            <ul className="home-page__list">
                {results?.map(item => (
                    <li key={item.id}>
                        <Card item={item}/>
                    </li>
                ))}  
            </ul>

            <Pagination info={info} setPageNumber={setPageNumber}/> 
        </div>
        ) 
        
};



export default Home;
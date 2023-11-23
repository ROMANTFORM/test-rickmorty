import React, { useState, useEffect } from 'react';


function DetailCard (props) {

    const [fetchData, setFetchData] = useState([]);
  

    let api = `https://rickandmortyapi.com/api/character/${props.id}`;
    

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then(res => res.json());
            setFetchData( data)
        })()
    }, [api]);


    let {name, status, species, image, location, episode, created} = fetchData;

    let indicator = '';
    
        if(status === 'Alive'){
            indicator = 'green'
        }
        if(status === 'Dead'){
            indicator = 'red'
        }
       

       
            return (
        <div className="detail-card__section">
            <div className="detail-card__conatiner">
                <img className="detail-card__img" src={image} alt="pic"/>
                <div className="detail-card-descr__container">
                    <div className="card__title-container">
                        <h3 className="card__title">{name}</h3>
                        <p className="card__title-descr"><span style={{background: indicator}}></span>{status} - {species}</p>
                    </div>
                    <div className="card__location-container">
                        <p className="card__label">Last known location:</p>
                        <p className="card__descr">{location.name}</p>
                    </div>
                    <div className="card__seen-container">
                        <p className="card__label">First seen in:</p>
                        <p className="card__descr">{episode[0]}</p>
                    </div>
                    <div className="card__other-container">
                        <p className="card__label">Other info:</p>
                        <p className="card__descr">
                        created: {created}
                        </p>
                    </div>
                </div>
            </div>
        </div>  
        )
        
        
    
    
};

export default DetailCard;
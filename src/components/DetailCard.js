import { Component } from "react";
import axios from "axios";


class DetailCard extends Component {

state = {
    data: []
}

async componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character/${this.props.id}`)
    .then( (response) => {
        this.setState({data: response.data});
    })
    .catch( (error) => {
    console.log(error);
    })
   
}


    render() {
       const {name, status, species, image} = this.state.data

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
                        <p className="card__descr">Earth</p>
                    </div>
                    <div className="card__seen-container">
                        <p className="card__label">First seen in:</p>
                        <p className="card__descr">episode 1</p>
                    </div>
                    <div className="card__other-container">
                        <p className="card__label">Other info:</p>
                        <p className="card__descr">
                        The Mosaic Rooms are a leading non-profit arts organisation and bookshop dedicated to supporting 
                        and promoting contemporary culture from the Arab world and beyond in London.Established in 2009, 
                        as a project of the A.M. Qattan Foundation, it dedicates its work to championing creative and critical
                        voices that are often underrepresented.
                        </p>
                    </div>
                </div>
            </div>
        </div>  
        )
    }
    
};

export default DetailCard;
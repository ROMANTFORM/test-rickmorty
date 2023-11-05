import { Component } from "react";


class DetailCard extends Component {

state = {
    data: {}
}
    render() {
       
        return (
        <div className="detail-card__section">
            <div className="detail-card__conatiner">
                <img className="detail-card__img" src="#" alt="pic"/>
                <div className="detail-card-descr__container">
                    <div className="card__title-container">
                        <h3 className="card__title">Aqua Rick</h3>
                        <p className="card__title-descr"><span></span>unknown - Humanoid</p>
                    </div>
                    <div className="card__location-container">
                        <p className="card__label">Last known location:</p>
                        <p className="card__descr">Citadel of Ricks</p>
                    </div>
                    <div className="card__seen-container">
                        <p className="card__label">First seen in:</p>
                        <p className="card__descr">Close Rick-counters of the Rick Kind</p>
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
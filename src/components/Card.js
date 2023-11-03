
const Card = () => {
    return (
        <div className="card__conatiner">
            <img className="card__img" src="#" alt="pic"/>
            <div className="card-descr__container">
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
            </div>
        </div>
    )
};

export default Card;
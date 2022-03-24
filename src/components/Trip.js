import location_icon from '../images/location-icon.png'

export const Trip = (props)=>{
    return (
        <div className="trip">
            <img src={`./images/${props.image}`} alt="mountain in Japan" className="trip__image"/>
            <div className="trip__info">
                <div className="info__location">
                    <img src={location_icon} alt="location icon" className="location__icon"/>
                    <p className="location__country">{props.location}</p>
                    <a href={props.map} className="location__map" >View on Google Maps</a>
                </div>
                <h2 className="info_title">{props.title}</h2>
                <p className="info__date">{props.date}</p>
                <p className="info_description">
                    {props.description}
                </p>
            </div>
        </div>
    );
};
import location_icon from '../images/location-icon.png'

export const Trip = (props)=>{
    return (
        <div className="trip">
            <img src={`./images/${props.image}`} alt="mountain in Japan" className="trip__image"/>
            <div className="trip__info">
                <div className="info__location">
                    <img src={location_icon} alt="location icon" className="location__icon"/>
                    <p className="location__country">Japan</p>
                    <a href="https://goo.gl/maps/cjtnsHrempC5rd7A7" className="location__map" >View on Google Maps</a>
                </div>
                <h2 className="info_title">Mount Fuji</h2>
                <p className="info__date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="info_description">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
    );
};
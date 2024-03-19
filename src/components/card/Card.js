import logo from '../../img/S7 Logo.png';

const Card = () => {
  return (
    <div className="card">
      <span className="card__price">13 400 Р</span>
      <img src={logo} alt="Logo airlines." className="card__logo" />
      <div className="card__data-container">
        <div className="card__info-container">
          <div className="card__data">
            <span className="card__description">MOW - HKT</span>
            <span className="card__info">10:45 - 08:00</span>
          </div>
          <div className="card__data">
            <span className="card__description">в пути</span>
            <span className="card__info">21ч 15м</span>
          </div>
          <div className="card__data">
            <span className="card__description">2 пересадки</span>
            <span className="card__info">HKG, JNB</span>
          </div>
        </div>
        <div className="card__info-container">
          <div className="card__data">
            <span className="card__description">MOW - HKT</span>
            <span className="card__info">11:20 - 00:50</span>
          </div>
          <div className="card__data">
            <span className="card__description">в пути</span>
            <span className="card__info">13ч 30м</span>
          </div>
          <div className="card__data">
            <span className="card__description">2 пересадки</span>
            <span className="card__info">HKG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

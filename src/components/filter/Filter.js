const Filter = () => {
  return (
    <div className="filter">
      <span className="filter__title">количество пересадок</span>
      <ul className="filter__list">
        <li className="filter__item">
          <input type="checkbox" className="filter__checkbox" id="All" />
          <label className="filter__span" htmlFor="All">
            Все
          </label>
        </li>
        <li className="filter__item">
          <input type="checkbox" className="filter__checkbox" id="w/o-transfers" />
          <label className="filter__span" htmlFor="w/o-transfers">
            Без пересадок
          </label>
        </li>
        <li className="filter__item">
          <input type="checkbox" className="filter__checkbox" id="one-transfers" />
          <label className="filter__span" htmlFor="one-transfers">
            1 пересадка
          </label>
        </li>
        <li className="filter__item">
          <input type="checkbox" className="filter__checkbox" id="two-transfers" />
          <label className="filter__span" htmlFor="two-transfers">
            2 пересадки
          </label>
        </li>
        <li className="filter__item">
          <input type="checkbox" className="filter__checkbox" id="three-transfers" />
          <label className="filter__span" htmlFor="three-transfers">
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;

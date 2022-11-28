import "./style.css"
const Form = () => {
  const currency = [
    {name:"EUR",value:"4,68"},
    {name:"USD",value:"4,49"},
    {name:"NOK",value:"0,45"}
  ]
  const onFormSubmit = (event) => {
    event.preventDefault();
  }
    return (
        <form onSubmit={onFormSubmit} className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walut</legend>
          <label className="form__label">
            <span className="form__labelText">
              Kwota do przeliczenia:
            </span>
            <input className="form__input " type="number" required min="1" step="1" />
          </label>
          <p>
            <label className="form__label">
              <span className="form__labelText">
                Waluta:
              </span>
              <select value={currency} className="form__input" name="Select a currency">
                <option>EUR</option>
                <option>USD</option>
                <option>NOK</option>
              </select>
            </label>
          </p>
          <button className="form__button ">Przelicz</button>
          <p>
            <label className="form__label">
              Otrzymasz:
              <strong className="result"></strong>
            </label>
          </p>
        </fieldset>
      </form>
    )
};
export default Form;
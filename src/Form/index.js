import "./style.css"
const Form = () => {
    return (
        <form className="form js-form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walut</legend>
          <label className="form__label">
            <span className="form__labelText">
              Kwota do przeliczenia:
            </span>
            <input className="form__input js-amount" type="number" required min="1" step="1" />
          </label>
          <p>
            <label className="form__label">
              <span className="form__labelText">
                Waluta:
              </span>
              <select className="form__input js-currency" name="Select a currency">
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="NOK">NOK</option>
              </select>
            </label>
          </p>
          <button className="form__button js-form__button">Przelicz</button>
          <p>
            <label className="form__label">
              Otrzymasz:
              <strong className="js-result"></strong>
            </label>
          </p>
        </fieldset>
      </form>
    )
};
export default Form;
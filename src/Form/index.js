import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react"
const Form = () => {

  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [currency, setCurrency] = useState("EUR");

  const onSelectCurrency = ({ target }) => setCurrency(target.value);
  const onSelectChange = ({target}) => setAmount(target.value);


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
          <input value={amount} onChange={onSelectChange} className="form__input " type="number" required min="1" step="1" />
        </label>
        <p>
          <label className="form__label">
            <span className="form__labelText">
              Waluta:
            </span>
            <select value={currency.short} onChange={onSelectCurrency} className="form__input" name="Select a currency">
              {currencies.map((currency) => (
                <option key={currency.short} value={currency}>{currency.short}</option>
              ))};
            </select>
          </label>
        </p>
        <button className="form__button ">Przelicz</button>
        <p>
          <label className="form__label">
            Otrzymasz:
            <strong value={result}></strong>
          </label>
        </p>
      </fieldset>
    </form>
  )
};
export default Form;
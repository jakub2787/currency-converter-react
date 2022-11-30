import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react"
const Form = () => {

  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [currency, setCurrency] = useState(currencies[0].short);

  const onSelectCurrency = ({ target }) => setCurrency(target.value);
  const onSelectChange = ({ target }) => setAmount(target.value);

    const calculateResult = (ammountExchange, currency) => {
      const { rate, short } = currencies.find(({ short }) => short === currency);
  
      setResult((ammountExchange / rate).toFixed(2) + short);
    };
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    setResult("");
    setAmount("");
  }
  return (
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <label className="form__label">
          <span className="form__labelText">
            Kwota do przeliczenia:
          </span>
          <input
            placeholder="Wpisz kwotę w zł"
            value={amount}
            onChange={onSelectChange}
            className="form__input "
            type="number"
            required min="1"
            step="1"
          />
        </label>
        <p>
          <label className="form__label">
            <span className="form__labelText">
              Waluta:
            </span>
            <select
              value={currency.short}
              onChange={onSelectCurrency}
              className="form__input"
              name="Select a currency"
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency}>{currency.name}</option>
              ))};
            </select>
          </label>
        </p>
        <button className="form__button">Przelicz</button>
        <p>
          <label className="form__label">
            Otrzymasz:
            <strong >{result}</strong>
          </label>
        </p>
      </fieldset>
    </form>
  )
};
export default Form;
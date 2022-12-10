import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";
import Result from "../Result";
const Form = () => {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState(null);

  const onSelectCurrency = ({ target }) => setCurrency(target.value);
  const onSelectChange = ({ target }) => setAmount(target.value);

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    setAmount("");

  }
  return (
    <form onSubmit={onFormSubmit} className="form">
      <h1 class="form__header">Kalkulator walutowy</h1>
      <fieldset className="form__fieldset">
        <label className="form__label">
          <span className="form__labelText">
            Kwota w zł*:
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
            <span className="form__labelText">Waluta:</span>
            <select
              value={currency}
              onChange={onSelectCurrency}
              className="form__input"
              name="currency"
            >
              {currencies.map((currency) => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              ))};
            </select>
          </label>
        </p>
        <button className="form__button">Przelicz</button>
        <p>
          <Result result={result} />
        </p>
      </fieldset>
    </form>
  )
};
export default Form;
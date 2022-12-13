import { currencies } from "../currencies";
import { useState } from "react";
import Result from "../Result";
import { Button, Fieldset, Header, StyledForm, Input, Label, LabelText } from "./styled";

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
    <StyledForm onSubmit={onFormSubmit}>
      <Header>Kalkulator walutowy</Header>
      <Fieldset>
        <label className="form__label">
          <span className="form__labelText">
            Kwota w zł*:
          </span>
          <Input
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
          <Label>
            <LabelText>Waluta:</LabelText>
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
          </Label>
        </p>
        <Button className="form__button">Przelicz</Button>
        <p>
          <Result result={result} />
        </p>
      </Fieldset>
    </StyledForm>
  )
};
export default Form;
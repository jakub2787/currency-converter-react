import { useState } from "react";
import Result from "./Result";
import { Button, Fieldset, Header, StyledForm, Input, Label, LabelText, Select } from "./styled";
import { useDate, useRatesData} from "./useRatesData";

const Form = () => {
  
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  const currenciesData = useRatesData();

  const onSelectCurrency = ({ target }) => setCurrency(target.value);
  const onSelectChange = ({ target }) => setAmount(target.value);

  const calculateResult = () => {
   const rates = currenciesData[currency];
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rates,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    calculateResult();
    event.preventDefault();
    setAmount("");
  }
  
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Header>Kalkulator walutowy</Header>
      <Fieldset>
        <Label>
          <LabelText>
            Kwota w zł*:
          </LabelText>
          <Input
            placeholder="Wpisz kwotę w zł"
            value={amount}
            onChange={onSelectChange}
            type="number"
            required min="1"
            step="1"
          />
        </Label>
        <p>
          <Label>
            <LabelText>Waluta:</LabelText>
            <Select
              onChange={onSelectCurrency}
              className="form__input"
              name="currency"
              value={currency} 
            >
              {Object.keys(currenciesData).map((currency) => (
                <option
                key={currency}
                >
                  {currency}
                </option>
              ))};
            </Select>
          </Label>
        </p>
        <Button>Przelicz</Button>
        <p>
          <Result result={result} />
        </p>
      </Fieldset>
    </StyledForm>
  )
};
export default Form;
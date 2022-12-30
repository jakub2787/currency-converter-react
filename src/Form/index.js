import { useState, useEffect } from "react";
import Result from "./Result";
import { Button, Fieldset, Header, Input, Label, LabelText, Select } from "./styled";
import { useRatesData } from "./useRatesData";
import ClipLoader from "react-spinners/ClipLoader";

const Form = () => {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)

  }, []);

  const onSelectCurrency = ({ target }) => setCurrency(target.value);
  const onSelectChange = ({ target }) => setAmount(target.value);

  const currenciesData = useRatesData();

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
    <form onSubmit={onFormSubmit}>
      <Header>Kalkulator walutowy</Header>
      <Fieldset>
        {
          loading ?
            <ClipLoader
              color={'#ffd700'}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            :
            <div>
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
            </div>
        }
      </Fieldset>
    </form>
  )
};

export default Form;
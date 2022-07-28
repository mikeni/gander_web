import React, { useState } from 'react';
import API from './Api';
import styled from "styled-components";

const Page = styled.div`
  width: 500px;
  margin: 20px auto;
`;

const Label = styled.label`
  width: 130px;
  float: left;
  text-align: right;
  padding-right: 10px;
`;

const Input = styled.input`
  width: 350px
`

const FormRow = styled.div`
  padding-bottom: 20px
`

const Result = styled.div`
  margin: 10px
`

const Sum = () => {
  const [firstNumber, setFirstNumber] = useState<number | undefined>(undefined);
  const [secondNumber, setSecondNumber] = useState<number | undefined>(undefined);
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    API.post('/add-two-numbers', {
      firstNumber,
      secondNumber
    })
    .then(({data}) => {
      if (data.error) {
        setResult(data.error);
      } else {
        setResult(data.data);
      }
    });
}
  return (
    <Page>
      <Result>
        {result}
      </Result>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="first-number">First Number</Label>
          <Input className="border-1" type="text" name="first-number" onChange={e => setFirstNumber(parseFloat(e.target.value))} />
        </FormRow>
        <FormRow>
          <Label htmlFor="second-number">Second Number</Label>
          <Input className="border-1" type="text" name="second-number" onChange={e => setSecondNumber(parseFloat(e.target.value))} />
        </FormRow>
        <button type="submit">
          Submit
        </button>
      </form>
    </Page>
  );
};

export default Sum;

import React, { useState } from 'react';
import API from './Api';
import styled from "styled-components";
import SumForm, { FormData } from './SumForm';

const Page = styled.div`
  width: 500px;
  margin: 20px auto;
`;

const Result = styled.div`
  margin: 10px
`

const Sum = () => {
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent, formData: FormData) => {
    e.preventDefault();
    API.post('/add-two-numbers', formData)
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
      <h2>Enter two numbers and submit to return the sum below</h2>
      <Result id="result">
        {result}
      </Result>
      <SumForm handleSubmit={handleSubmit} />
    </Page>
  );
};

export default Sum;

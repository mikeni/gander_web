import React, { ChangeEvent, useState } from 'react';
import styled from "styled-components";
	
import _ from "lodash";

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

export interface FormData {
  firstNumber: number | null
  secondNumber: number | null
};

interface Props {
  handleSubmit: (e: React.FormEvent, values: FormData) => void
};

const Sum = ({ handleSubmit }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    firstNumber: null,
    secondNumber: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [_.camelCase(e.target.name)]: parseFloat(value)
    });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <FormRow>
        <Label htmlFor="first-number">First Number</Label>
        <Input className="border-1" type="text" id="first-number" name="first-number" onChange={handleChange} />
      </FormRow>
      <FormRow>
        <Label htmlFor="second-number">Second Number</Label>
        <Input className="border-1" type="text" id="second-number" name="second-number" onChange={handleChange} />
      </FormRow>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Sum;

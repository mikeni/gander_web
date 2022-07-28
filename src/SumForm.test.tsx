import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import SumForm from './SumForm';

describe('Sum', () => {
  const handleSubmit = jest.fn();
  const setup = () => render(<SumForm handleSubmit={handleSubmit} />);


  beforeEach(() => {
    handleSubmit.mockClear();
  });

  it('form renders', () => {
    setup();

    expect(screen.getByText("First Number")).toBeInTheDocument();
  })

  it('form can submit formData', async () => {
    setup();
    handleSubmit.mockImplementation((e, formData) => e.preventDefault());

    const firstNumberInput = screen.getByLabelText("First Number") as HTMLInputElement;
    user.type(firstNumberInput, "22")

    const secondNumberInput = screen.getByLabelText("Second Number") as HTMLInputElement;
    user.type(secondNumberInput, "7")

    const submitButton = screen.getByText('Submit');
    user.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith(expect.anything(), {"firstNumber": 22, "secondNumber": 7});
  })
});
import styled from "styled-components";

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  padding: 20px;

  div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;

    label {
      font-family: var(--font-family);
      font-size: var(--font-size-10);
      font-weight: 400;
      color: var(--grey-0);
    }

    select {
      height: 38.5px;
      min-width: 250px;
      border: 1px solid var(--grey-0);
      border-radius: var(--radius-3);

      font-family: var(--font-family);
      font-size: var(--font-size-10);
      font-weight: 400;
      background-color: var(--grey-2);
      color: var(--grey-0);
    }
  }

  button {
    height: 38.5px;
    min-width: 250px;

    border: 1.22px solid var(--color-primary-negative);
    border-radius: var(--radius-4);

    background-color: var(--color-primary-negative);

    font-family: var(--font-family);
    font-size: var(--font-size-13);
    font-weight: 500;
    color: var(--white);
    line-height: 21.17px;
    margin-top: 10px;
  }
`;

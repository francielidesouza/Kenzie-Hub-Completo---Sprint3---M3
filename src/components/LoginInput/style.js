import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  label {
    align-self: flex-start;
    font-size: var(--font-size-10);
    font-weight: 400;
    color: var(--grey-0);
  }

  input {
    height: 38.5px;
    min-width: 250px;
    max-width: 250px;

    border: 1px solid var(--grey-0);
    border-radius: var(--radius-3);
  }

  input::placeholder {
    background-color: var(--grey-2);

    font-family: var(--font-family);
    font-size: var(--font-size-13);
    font-weight: 400;
    color: var(--grey-0);
    line-height: 21.17px;
    padding: 10px;
  }

  p {
    align-self: flex-start;
    font-size: var(--font-size-13);
    font-weight: 400;
    color: var(--color-negative);
  }
`;

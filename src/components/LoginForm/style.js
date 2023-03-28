import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  padding: 20px;

  button {
    height: 38.5px;
    min-width: 250px;

    border: 1.22px solid var(--color-primary);
    border-radius: var(--radius-4);

    background-color: var(--color-primary);

    font-family: var(--font-family);
    font-size: var(--font-size-13);
    font-weight: 500;
    color: var(--grey-0);
    line-height: 21.17px;
  }

  span {
    font-size: var(--font-size-13);
    font-weight: 600;
    color: var(--grey-1);
    line-height: 14.44px;
    padding-top: 10px;
  }

  a {
    height: 38.5px;
    min-width: 250px;

    border: 1.22px solid var(--grey-1);
    border-radius: var(--radius-4);

    background-color: var(--grey-1);

    font-family: var(--font-family);
    font-size: var(--font-size-13);
    font-weight: 500;
    color: var(--grey-0);
    line-height: 21.17px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

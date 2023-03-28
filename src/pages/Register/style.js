import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;

  header {
    width: 320px;
    height: 80px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px 9px;

    img {
      padding-bottom: 9px;
    }
  }

  a {
    height: 31.95px;
    width: 79.54px;

    border: 1.22px solid var(--grey-3);
    border-radius: var(--radius-4);

    background-color: var(--grey-3);

    font-family: var(--font-family);
    font-size: var(--font-size-10);
    font-weight: 600;
    color: var(--grey-0);
    line-height: 22.73px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MainRegister = styled.main`
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;

  box-shadow: rgba(0, 0, 0, 0.25);
  background-color: var(--grey-3);
  border-radius: var(--radius-3);

  h1 {
    font-size: var(--font-size-14);
    font-weight: 700;
    color: var(--grey-0);

    padding: 20px;
  }

  span {
    font-size: var(--font-size-10);
    font-weight: 400;
    color: var(--grey-1);
    line-height: 17.59px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 80%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 9px;

    background-color: var(--grey-4);

    img {
      padding-bottom: 9px;
    }

    button {
      height: 32px;
      width: 55.49px;

      border: 1.22px solid var(--grey-3);
      border-radius: var(--radius-4);

      background-color: var(--grey-3);

      font-family: var(--font-family);
      font-size: var(--font-size-12);
      font-weight: 600;
      color: var(--grey-0);
      line-height: 22.73px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const MainHome = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: rgba(0, 0, 0, 0.25);
  background-color: var(--grey-4);
  border-radius: var(--radius-3);

  .containerDataUser {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 20px 0;

    h1 {
      font-size: var(--font-size-18);
      font-weight: 700;
      line-height: 28px;
      color: var(--grey-0);
    }

    span {
      font-size: var(--font-size-12);
      font-weight: 400;
      line-height: 22px;
      color: var(--grey-1);
    }
  }

  section {
    display: none;
  }

  @media (min-width: 600px) {
    section {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
      padding: 30px 0;

      h1 {
        font-size: var(--font-size-18);
        font-weight: 700;
        line-height: 28px;
        color: var(--grey-0);
      }

      p {
        font-size: var(--font-size-16);
        font-weight: 400;
        line-height: 24.36px;
        color: var(--white);
      }
    }
  }
`;

export const ContainerBorder = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid var(--grey-2);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    .containerDataUser {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

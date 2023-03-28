import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 30px;

  div {
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: rgba(0, 0, 0, 0.25);
    background-color: var(--grey-3);
    border-radius: var(--radius-3);

    h1 {
      font-size: var(--font-size-14);
      font-weight: 700;
      color: var(--grey-0);

      padding: 35px 0 10px 0;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background: #2f3036;
  display: grid;
  gap: 20px;
  height: 100%;

  .no-movies {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 70px;

    h1 {
      color: white;
      font-family: sans-serif;
    }
  }
`;

export const MoviesContainter = styled.div`
  margin-top: 80px;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, 370px);
`;

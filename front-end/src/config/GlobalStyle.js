import styled, { createGlobalStyle } from "styled-components";

// here there are a globalStyle and components that more than one page use

export const GlobalStyle = createGlobalStyle`
*, body, html {
    margin: 0;
    padding: 0;
}
`;

export const MoviesContainter = styled.div`
  margin-top: 80px;
  padding-top: 20px;
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(380px, 200px));
`;

export const Container = styled.div`
  background: #2f3036;
  display: grid;
  min-height: 100vh;
  gap: 20px;
  position: relative;
  a {
    text-decoration: none;
    color: white;
  }
  .movie-link {
    height: 300px;
    margin-top: 10px;
  }

  .no-movies {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 120px;

    h1 {
      color: white;
      font-family: sans-serif;
    }
  }

  @media (max-width: 860px) {
    .no-movies {
      font-size: 10px;
    }
  }
`;

import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  align-items: center;
  justify-items: center;
  z-index: 1;
`;

export const Main = styled.div`
  background: #2b2a2e;
  width: 400px;
  height: 700px;
  display: grid;
  grid-template-rows: 500px 0.7fr 3fr 0.5fr;
  border-radius: 20px;

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .movie-image {
    position: relative;
    img {
      max-height: 500px;
      width: 100%;
      height: auto;
      border-radius: 20px 20px 0px 0px;
    }
    .exit {
      position: absolute;
      right: 19px;
      top: 10px;
    }

    .shadow {
      height: 150px;
      width: 100%;
      position: absolute;
      bottom: 0px;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    }
  }

  .movie-title {
    color: white;
    font-family: sans-serif;
    text-transform: capitalize;
    padding: 10px 0px 0px 10px;
  }

  .movie-description {
    color: white;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    p,
    h3 {
      padding-left: 10px;
      width: 95%;
      text-align: justify;
    }
    p {
      color: #ddd;
      font-size: 15px;
    }
    // bar scroll customize
    ::-webkit-scrollbar {
      width: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #434247;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #5b5b5c;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #6f6f70;
    }
  }

  .button-C {
    display: flex;
    flex-direction: row-reverse;
    padding-bottom: 20px;
    button {
      cursor: pointer;
      border: none;
      border-radius: 6px;
      width: 120px;
      height: 40px;
      background: #db272c;
      margin: 20px 20px 0px 0px;
      color: white;
      font-weight: bold;
      font-family: sans-serif;
      transition: all 0.2s;
      :hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        background: #e81405;
      }
    }
  }

  @media (max-width: 700px) and (max-height: 700px) {
    width: 260px;
    height: 500px;
    grid-template-rows: 300px 0.7fr 3fr 0.5fr;

    .movie-image {
      position: relative;
      img {
        max-height: 300px;
      }
    }

    .movie-title {
      font-size: 13px;
    }

    .movie-description {
      font-size: 13px;
      p {
        font-size: 13px;
      }
    }
  }
`;

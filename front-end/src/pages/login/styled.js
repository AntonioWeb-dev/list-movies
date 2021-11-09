import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  background: #42444f;
  height: 100vh;

  .movie-banner {
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0px 60px 60px 0px;
      opacity: 0.2;
      object-fit: fill;
    }
    .title {
      position: absolute;
      top: 40%;
      left: 23%;
      color: #d7d8db;
      font-size: 35px;
      font-weight: normal;
      font-family: sans-serif;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 2fr;
  width: 65%;
  height: 35%;
  padding-left: 20px;
  h1 {
    font-size: 40px;
    color: #c94447;
    font-weight: bold;
    font-family: sans-serif;
  }

  .main-form {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    button {
      width: 120px;
      height: 40px;
      border: none;
      border-radius: 10px;
      background: #ad282c;
      color: white;
      font-weight: bold;
      font-size: 15px;
      cursor: pointer;

      transition: all 0.4s;
      :hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        background: #b52a2d;
      }
    }
  }
  .input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
  .input input {
    width: 50%;
    font-size: 15px;
    outline: none;
    background: none;
    border: none;
    border-bottom: 1px solid #ad282c;
    padding: 15px;
    color: white;

    :focus {
      border-bottom: 1px solid red;
    }
  }

  .error-field {
    color: #e3db14;
    font-family: sans-serif;
    font-size: 15px;
  }
`;

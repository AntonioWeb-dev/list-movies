import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  padding: 10px;
  background: ${(props) => (props.active ? "#2f3036" : "transparent")};
  box-shadow: ${(props) => (props.active ? "0px 2px 7px 0px rgba(0, 0, 0, 0.1)" : null)};
  width: 100vw;
  position: fixed;
  z-index: 1;
  transition: all 0.2 ease-in-out;
  justify-content: space-between;

  .title-header a {
    color: #fa5043;
    font-weight: bold;
    font-family: sans-serif;
    margin-left: 5%;
    font-size: 34px;
  }

  nav {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-weight: bold;
      font-size: 20px;
      font-family: sans-serif;
      :hover {
        color: #db4539;
      }
    }
  }
  .search {
    margin-right: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: none;
      border: none;

      width: 32px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    input {
      background: none;
      border: 1px solid #d1d1d1;
      border-radius: 2px;
      padding-left: 5px;
      height: 26px;
      width: 280px;
      outline: none;
      color: white;
    }
  }

  @media (max-width: 890px) {
    display: grid;
    gap: 5px;
    nav {
      width: 350px;
      justify-content: start;
      gap: 36px;
      .my-catalog {
        font-size: 15px;
      }
    }

    .search {
      margin: 0px;
    }
  }
`;

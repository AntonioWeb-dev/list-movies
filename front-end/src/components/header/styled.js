import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  padding: 10px;
  background: ${(props) => (props.active ? "#2f3036" : "transparent")};
  box-shadow: ${(props) => (props.active ? "0px 2px 7px 0px rgba(0, 0, 0, 0.1)" : null)};
  width: 100%;
  position: fixed;
  z-index: 1;
  transition: all 0.2 ease-in-out;
  justify-content: space-between;

  .title-header {
    color: #e81405;
    font-weight: bold;
    font-family: sans-serif;
    margin-left: 5%;
    font-size: 18px;
  }
  .search {
    margin-right: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: #1f2029;
      border: none;

      width: 32px;
      height: 29px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    input {
      background: none;
      border: 1px solid #940e04;
      border-radius: 0px 5px 5px 0px;
      padding-left: 5px;
      height: 26px;
      width: 280px;
      outline: none;
      color: white;
    }
  }
`;

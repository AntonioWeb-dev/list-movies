import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.7s;
  margin-bottom: 150px;
  :hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  img {
    width: 350px;
    height: 300px;
    opacity: 0.7;
    border-radius: 10px;
    object-fit: cover;
  }

  .movie-title {
    background: black;
  }
`;

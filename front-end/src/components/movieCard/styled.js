import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.7s;
  margin-bottom: 50px;
  background: #3b3b40;
  position: relative;
  :hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  img {
    width: 350px;
    height: 300px;
    border-radius: 5px;

    opacity: 0.7;
    object-fit: cover;
  }
  .title {
    text-transform: capitalize;
    font-family: sans-serif;
    position: absolute;
    bottom: 0;
    color: white;
    width: 100%;
    height: 100px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    border-radius: 0px 0px 5px 5px;

    h3 {
      position: absolute;
      bottom: 15px;
      padding: 2px 10px 2px 25px;
    }
  }

  .movie-title {
    background: black;
  }

  @media (max-width: 890px) {
    width: 260px;

    img {
      width: 260px;
    }
  }
`;

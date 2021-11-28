import styled from "styled-components";

export const HeaderStyled = styled.header`
  a {
    color: #ffffff;
    text-decoration: none;
  }
  font-weight: 200;
  font-size: 1.2rem;
  color: white;
  padding: 20px;
  background: linear-gradient(
    90deg,
    #0982ae,
    #51caf6,
    #0caee9,
    #0982ae,
    #054861
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const UlStyled = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;

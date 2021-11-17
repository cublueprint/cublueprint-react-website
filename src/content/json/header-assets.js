import blueprintIcon from "../images/blueprint_banner_negative.webp";
import styled from 'styled-components';

export const BlueprintIcon = () => {
  return (
    <img style={{ maxWidth: '150px' }} src={blueprintIcon}></img>
  );
};

export const StyledHeader = styled.div`
  background-color: #3988ff;
  color: #dfefff;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 8vh;
`;

export const StyledHeaderList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3vw;
`;

export const StyledHeaderLink = styled.div`
  display: block;
  margin-left: auto;
  position: relative;
  min-width: auto;
  a {
    text-decoration: none;
    color: #dfefff;
  }
  a:hover {
    color: #ffffff;
  }
`;
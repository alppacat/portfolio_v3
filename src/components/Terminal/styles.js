import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 70vh;
  max-width: 630px;
  display: flex;
  flex-direction: column;
  background-color: #18181C;
  border-radius: 15px;
  box-shadow: 0.5em 0.5em 15px 9px #0000004a;
  position: absolute;
  top: 25%;
  z-index: 1;

  @media(max-width: 590px){
    width: 90%;
    height: unset;
  }

  @media(max-width: 375px){
    top: 5%;
  }
`;
export const Tab = styled.div`
  background-color: #d6d6d6;
  border-radius: 12px 12px 0 0;
`;
export const TabIcons = styled.div`
  width: fit-content;
  background-color: #d6d6d6;
  font-family: "VT323", monospace;
  font-weight: bolder;
  cursor: pointer;
  padding: .6em;
  margin-left: 9px;
  
  p {
    margin: 0;
  }
`;
export const BodyContainer = styled.div`
  padding: 30px 45px;

  @media(max-width: 320px){
    padding: 25px;
  }
`
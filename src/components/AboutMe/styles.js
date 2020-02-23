import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Paragraph = styled.p`
  font-family: ${props => props.font ? props.font : 'unset'};
  margin: ${props => props.margin ? props.margin : '0'};
  font-size: ${props => props.size ? props.size : '16px'};
  letter-spacing:${props => props.spacing ? props.spacing : 'unset'};
  text-align: ${props => props.align ? props.align : 'unset'};
  font-weight: ${props => props.weight ? props.weight : 'unset'};
  color: ${props => props.color ? props.color : '#008b68'};
`;
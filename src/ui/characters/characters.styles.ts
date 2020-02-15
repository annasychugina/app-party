import styled from 'styled-components';

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -10px;
  margin-right: -10px;
`;

export const Column = styled.li`
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 220px;
  margin-bottom: 30px;
  max-width: 200px;
`;

export const ErrorText = styled.div`
  color: #ff0000;
  text-align: center;
`;

export const WarningText = styled.div`
  color: #dadada;
  text-align: center;
`;

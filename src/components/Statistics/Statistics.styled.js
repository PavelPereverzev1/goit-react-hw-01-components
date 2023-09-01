import styled from 'styled-components';

export const Container = styled.section`
  width: 400px;
  margin: 0 auto 30px;

  .title {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    text-transform: uppercase;
    color: gray;
  }
  .stats-list {
    display: flex;
    height: 80px;
  }
`;

export const StatItem = styled.li`
  flex-basis: calc(100% / 5);
  text-align: center;
  color: white;
  padding-top: 10px;
  &:nth-child(1) {
    background-color: #4fc4f9;
  }
  &:nth-child(2) {
    background-color: #a43cf3;
  }
  &:nth-child(3) {
    background-color: #e64c68;
  }
  &:nth-child(4) {
    background-color: #20b8c5;
  }
  &:nth-child(5) {
    background-color: #6a6f08;
  }
  .label {
    display: block;
    margin-bottom: 10px;
  }
  .percentage {
    font-size: 22px;
    font-weight: 500;
  }
`;

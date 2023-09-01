import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 550px;
  margin: 0 auto 30px;
  padding-top: 50px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.36);
  .thumb {
    width: 160px;
    height: 160px;
    margin: 0 auto 40px;
    padding-top: 10px;
    border: 1px solid #aaaaaa;
    border-radius: 50%;
    overflow: hidden;
  }

  .description {
    text-align: center;
  }
  .name {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .tag,
  .location {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }
  .location {
    margin-bottom: 0;
  }
  .stats {
    display: flex;
    height: 120px;
    border-top: 1px solid gray;
    text-align: center;
  }
  .stats-item {
    flex-basis: calc(100% / 3);
    background-color: #d3dbde;
  }
  .stats-item:not(:last-child) {
    border-right: 1px solid gray;
  }
  .label {
    display: block;
    font-size: 20px;
    margin-bottom: 10px;
    padding-top: 25px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }
  .quantity {
    font-size: 20px;
    font-weight: 700;
    font-size: 22px;
  }
`;

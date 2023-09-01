import styled from 'styled-components';

export const Container = styled.ul`
  width: 300px;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  .item {
    display: flex;
    align-items: center;
    height: 100px;
    padding-left: 15px;
    background-color: white;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.36);
  }

  .avatar {
    width: 80px;
    height: 80px;
  }

  span {
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .isOnline {
    background-color: #46af49;
  }

  .isOfline {
    background-color: #fa5255;
  }

  .name {
    margin-left: 20px;
    font-size: 24px;
  }

  .thumb {
    border: 1px solid #aaaaaa;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 20px;
  }
`;

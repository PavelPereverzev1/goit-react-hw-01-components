import styled from 'styled-components';

export const HistoryTable = styled.table`
  table-layout: fixed;
  width: 750px;
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
  thead {
    background-color: #00bcd5;
    color: #dafefd;
  }

  th,
  td {
    padding: 10px;
    border-left: 1px solid #bbbbbb;
    border-right: 1px solid #bbbbbb;
  }
  .type {
    text-transform: capitalize;
    text-align: left;
    padding-left: 90px;
  }

  tr:nth-child(2n + 2) {
    background-color: #cbdee5;
  }
`;

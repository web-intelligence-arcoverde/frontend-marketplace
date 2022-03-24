import styled from 'styled-components';

export const Container = styled.li`
  display: inline-block;
  list-style: none;
  padding: 7px;
  border-radius: 5px;
  border-bottom: 3px solid transparent;
  transition: 0.5s;
  background: #f6f5f5;
  margin-left: 30px;
  box-shadow: 5px 8px 14px -3px rgba(0, 0, 0, 0.41);
  .active,
  :hover {
    cursor: pointer;
    border-bottom: 3px solid var(--secondary);
    transition: 0.5s;
    background-color: #f6f5f5;
  }

  img {
    width: 100%;
    height: 135px;
    border-radius: 5px;
    vertical-align: baseline;
    background: #fff;
  }
  b {
    margin-bottom: 0;
  }
`;

export const CardInfos = styled.div`
  display: inline-block;
  padding-left: 3px;
  align-items: flex-end;

  b {
    margin-bottom: 0;
  }

  .mdi {
    vertical-align: middle;
    color: #626264;
  }

  span.mdi-star {
    color: #facd5d;
  }
  .badge-secondary {
    color: #503e9d;
    background: #503e9d10;
    padding: 4px 8px;
    border-radius: 4px;
  }
`;
export const Text = styled.span`
  font-size: 13px;
  margin-right: 10px;
  vertical-align: middle;
  color: #626264;
`;

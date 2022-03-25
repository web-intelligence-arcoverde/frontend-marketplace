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
  @media (max-width: 769px) {
    width: 100px;
  }

  img {
    width: 100%;
    height: 135px;
    border-radius: 5px;
    vertical-align: baseline;
    background: #fff;
    @media (max-width: 769px) {
      height: 60px;
    }
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
    @media (max-width: 769px) {
      display: none;
    }
  }
  .mdicontainer {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    b {
      font-size: 14px;
    }
    .mdi {
      width: 10px;
    }
    .mdicontainer {
      flex-direction: column;
    }
    .gap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }
  }
`;
export const Text = styled.span`
  font-size: 13px;
  margin-right: 10px;
  vertical-align: middle;
  color: #626264;
`;

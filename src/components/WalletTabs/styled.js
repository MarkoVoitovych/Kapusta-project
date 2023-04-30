import styled from 'styled-components';
import { Link } from 'components/NavLink/NavLink.styled';

export const Container = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const Box = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 4px;
  @media screen and (min-width: 768px) {
    position: static;
    width: fit-content;
    justify-content: flex-start;
    gap: 0;
  }
`;

export const TabLink = styled(Link)`
  width: calc(50% - 2px);
  height: 53px;
  border-radius: 0;
  box-shadow: none;
  filter: none;
  background-color: #f5f6fb;
  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;
    background-color: #fafbfd;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    &:hover,
    &:focus {
      filter: none;
      background-color: #fafbfd;
      color: ${p => p.theme.colors.PrimaryOrange};
    }
    &: active {
      filter: none;
      background-color: #fafbfd;
      color: ${p => p.theme.colors.PrimaryOrange};
    }
  }
`;

export const Outlet = styled.div`
  padding: 0px;
  margin-top: 0px;
  background-color: white;
  border-radius: 0px 30px 30px 30px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  @media screen and (min-width: 768px) {
    padding: 24px 40px 42px;
  }
  @media screen and (min-width: 1280px) {
    padding: 32px 32px 61px 32px;
  }
`;

export const TransactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SummaryWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

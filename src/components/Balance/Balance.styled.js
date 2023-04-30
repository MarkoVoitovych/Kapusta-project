import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BalanceContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 47px;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 44px;
    margin: 0 auto;
    gap: 0;
    margin-bottom: 60px;
    position: relative;
    padding-top: 40px;
    align-items: center;
  }
  @media screen and (max-width: 1280px) {
    justify-content: flex-end;
  }
`;

export const PortalContainer = styled.div`
  height: 0;
  width: 125px;
  padding-left: 68px;
  padding-right: 141px;
`;

export const AbsoluteContainer = styled(BalanceContainer)`
  box-sizing: border-box;
  top: 144px;
  height: 0;
  width: 100%;
  position: absolute;
  margin: 0 auto;
  padding: 0 91px;
  @media screen and (max-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (max-width: 480px) {
    top: 232px;
    left: -22px;

    padding: 0 20px;
  }
`;

export const BalanceForm = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: translate(-50%, 0);
  gap: 8px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0;
  }
  @media screen and (min-width: 1280px) {
    align-self: center;
    justify-content: center;
    flex-grow: 3;
  }
`;

export const BalanceFormNotification = styled(BalanceForm)``;

export const Text = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;

  color: rgba(82, 85, 95, 0.7);

  margin-right: 20px;
`;

export const CurrentBalance = styled.p`
  box-sizing: border-box;
  position: relative;
  height: 44px;
  width: 125px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.67px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;

  color: black;
  background-color: ${p => p.theme.colors.BgGray};

  border: 2px solid #ffffff;
  border-radius: 16px;
  margin-right: 16px;

  @media screen and (max-width: 480px) {
    width: 140px;

    padding-right: 16px;
    border-radius: 22px 0px 0px 22px;
    margin: 0;
    margin-top: 8px;
  }
`;

export const Input = styled.input`
  width: 74px;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.67px;
  letter-spacing: 0.02em;
  text-align: right;

  color: black;

  background-color: transparent;

  border: none;

  outline: none;
`;

export const CurrentBalanceContainer = styled.div`
  position: relative;
`;

export const StyledBtn = styled.button`
  box-sizing: border-box;

  height: 44px;
  width: 125px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: rgba(82, 85, 95, 0.7);
  background-color: ${p => p.theme.colors.BgGray};

  transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    border 400ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 2px solid #ffffff;
  border-radius: 16px;

  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background-color: ${p => p.theme.colors.PrimaryOrange};

    border: none;
  }

  @media screen and (max-width: 480px) {
    width: 140px;

    border-radius: 0px 22px 22px 0px;
    margin: 0;
    margin-top: 8px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;

  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.04em;

  text-decoration: none;

  color: rgba(82, 85, 95, 0.7);

  transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.PrimaryOrange};
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-grow;
  }
`;

export const ReportsSvg = styled.svg`
  height: 14px;
  width: 14px;

  margin-left: 20px;
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

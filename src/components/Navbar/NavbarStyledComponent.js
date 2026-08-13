import { Link as LinkR } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.div`
    background-color: ${({ theme, $scrolled }) => ($scrolled ? theme.card_light + 'ee' : 'transparent')};
    backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(14px)' : 'none')};
    -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(14px)' : 'none')};
    box-shadow: ${({ $scrolled, theme }) => ($scrolled ? `0 8px 30px ${theme.shadow}` : 'none')};
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: background-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1240px;
`;

export const NavLogo = styled(LinkR)`
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

export const Span = styled.div`
    padding: 0 6px;
    font-weight: 700;
    font-size: 19px;
    background: linear-gradient(120deg, ${({ theme }) => theme.primary}, #c084fc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 960px) {
      display: none;
    }
`;

export const NavLink = styled.a`
  color: ${({ $scrolled }) =>
    $scrolled ? '#ffffff' : '#000000'};

  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  padding: 4px 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      #c084fc
    );
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const IconToggleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 6px;
  padding-right: 12px;
  border-right: 1px solid ${({ theme }) => theme.text_secondary}30;

  @media screen and (max-width: 960px) {
    margin-right: 0;
    padding-right: 0;
    border-right: none;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.primary}55;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.25s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    transform: translateY(-2px) rotate(8deg);
  }
`;

export const LangButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 38px;
  padding: 0 10px;
  border-radius: 20px;
  border: 1.5px solid ${({ theme }) => theme.primary}55;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.25s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    transform: translateY(-2px);
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 38px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 18px;
  font-weight: 500;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: #fff;
      transform: translateY(-2px);
    }
    @media screen and (max-width: 768px) {
    font-size: 14px;
    }
`;

export const LinkedinButton = styled.a`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 38px;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  padding: 0 18px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  background: linear-gradient(120deg, ${({ theme }) => theme.primary}, #c084fc);
  box-shadow: 0 6px 18px ${({ theme }) => theme.primary}55;
  transition: all 0.3s ease-in-out;
    :hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px ${({ theme }) => theme.primary}70;
    }
    @media screen and (max-width: 768px) {
    font-size: 14px;
    }
`;

export const MobileIcon = styled.div`
  display: none;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

export const MobileBars = styled.button`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    background: transparent;
    border: none;
    border-radius: 8px;

    font-size: 1.5rem;
    cursor: pointer;

    color: ${({ $scrolled }) =>
      $scrolled ? '#ffffff' : '#000000'};

    transition: color 0.25s ease, background 0.25s ease;

    &:hover {
      background: ${({ theme }) => theme.primary}15;
    }
  }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 76px;
    right: 0;
    width: 100%;
    padding: 20px 32px 32px 32px;
    background: ${({ theme }) => theme.card_light};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 20px 40px ${({ theme }) => theme.shadow};
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

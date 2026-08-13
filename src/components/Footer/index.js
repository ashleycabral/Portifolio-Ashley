import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import { useLanguage } from '../../context/LanguageContext';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.primary}18;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 20px;
  font-family: 'Space Grotesk', sans-serif;
  background: linear-gradient(120deg, ${({ theme }) => theme.primary}, #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

function Footer() {
  const { t } = useLanguage();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{Bio.name}</Logo>
        <Nav>
          <NavLink href="#about">{t.nav.about}</NavLink>
          <NavLink href="#skills">{t.nav.skills}</NavLink>
          <NavLink href="#experience">{t.nav.experience}</NavLink>
          <NavLink href="#projects">{t.nav.projects}</NavLink>
          <NavLink href="#education">{t.nav.education}</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank" rel="noreferrer"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2026 {Bio.name}. {t.footer.rights}
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;

import React from "react";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactCard = styled.div`
  width: 100%;
  max-width: 550px;
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: rgba(23, 92, 230, 0.12) 0px 8px 30px;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 18px;
  text-decoration: none;
  padding: 18px;
  border-radius: 16px;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.text_primary};

  &:hover {
    background: ${({ theme }) => theme.primary}15;
    transform: translateY(-4px);
  }
`;

const IconBox = styled.div`
  width: 54px;
  height: 54px;
  min-width: 54px;
  border-radius: 14px;
  background: ${({ theme }) => theme.primary}20;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  font-size: 28px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 4px;
`;

const Value = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Contact = () => {
  return (
    <Container id="Contato">
      <Wrapper>
        <Title>Contato</Title>

        <Desc>
          Estou disponível para novas oportunidades. Se quiser conversar sobre projetos, vagas ou parcerias,
          entre em contato por um dos canais abaixo.
        </Desc>

        <ContactCard>
          <ContactItem href="mailto:ashleycabral1806@gmail.com">
            <IconBox>
              <MdOutlineEmail />
            </IconBox>

            <ContactInfo>
              <Label>E-mail</Label>
              <Value>ashleycabral1806@gmail.com</Value>
            </ContactInfo>
          </ContactItem>

          <ContactItem href="tel:+5519996992527">
            <IconBox>
              <FiPhone />
            </IconBox>

            <ContactInfo>
              <Label>Telefone</Label>
              <Value>(19) 99699-2527</Value>
            </ContactInfo>
          </ContactItem>

          <ContactItem
            href="https://www.linkedin.com/in/ashley-cabral"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox>
              <FaLinkedin />
            </IconBox>

            <ContactInfo>
              <Label>LinkedIn</Label>
              <Value>linkedin.com/in/ashley-cabral</Value>
            </ContactInfo>
          </ContactItem>
        </ContactCard>
      </Wrapper>
    </Container>
  );
};

export default Contact;
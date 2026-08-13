import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px 100px;
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
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
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
  border: 1px solid ${({ theme }) => theme.primary}25;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 16px 40px ${({ theme }) => theme.shadow};
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
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}30, ${({ theme }) => theme.primary}10);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  font-size: 26px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 4px;
`;

const Value = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Container id="contact">
      <Wrapper>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
          <Title>{t.contact.title}</Title>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} custom={0.08}>
          <Desc>{t.contact.desc}</Desc>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.16}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <ContactCard>
            <ContactItem href="mailto:ashleycabral1806@gmail.com">
              <IconBox>
                <MdOutlineEmail />
              </IconBox>
              <ContactInfo>
                <Label>{t.contact.email}</Label>
                <Value>ashleycabral1806@gmail.com</Value>
              </ContactInfo>
            </ContactItem>

            <ContactItem href="tel:+5519996992527">
              <IconBox>
                <FiPhone />
              </IconBox>
              <ContactInfo>
                <Label>{t.contact.phone}</Label>
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
                <Label>{t.contact.linkedin}</Label>
                <Value>linkedin.com/in/ashley-cabral</Value>
              </ContactInfo>
            </ContactItem>
          </ContactCard>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Contact;

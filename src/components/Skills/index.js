import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import { useLanguage } from '../../context/LanguageContext'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 20px 0;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
padding: 0 24px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
font-family: 'Space Grotesk', sans-serif;
text-align: center;
font-weight: 700;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  gap: 24px;

  margin-top: 34px;

  align-items: center;

  & > .skill-card-0 {
    grid-column: 1;
    grid-row: 1 / 3;

    align-self: center;
    justify-self: center;
  }

  & > .skill-card-1 {
    grid-column: 2;
    grid-row: 1;
  }

  & > .skill-card-2 {
    grid-column: 2;
    grid-row: 2;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    margin-top: 28px;

    & > .skill-card-0,
    & > .skill-card-1,
    & > .skill-card-2 {
      width: 100%;
      max-width: 400px;
    }
  }

  @media (max-width: 500px) {
    gap: 16px;

    & > .skill-card-0,
    & > .skill-card-1,
    & > .skill-card-2 {
      max-width: 330px;
    }
  }
`;

const Skill = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}30;

  box-shadow: 0 12px 30px ${({ theme }) => theme.shadow};

  border-radius: 18px;

  padding: 22px 34px 30px;

  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.primary}80;
    box-shadow: 0 20px 45px ${({ theme }) => theme.shadow};
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 26px 24px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 14px 22px 22px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 22px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 4px;
`

const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_secondary}40;
  background: ${({ theme }) => theme.card_light};
  border-radius: 12px;
  padding: 11px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}15;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 13.5px;
    padding: 8px 12px;
  }
`

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
`

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Skills = () => {
  const { lang, t } = useLanguage();

  return (
    <Container id="skills">
      <Wrapper>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
          <Title>{t.skills.title}</Title>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} custom={0.08}>
          <Desc>{t.skills.desc}</Desc>
        </motion.div>

        <SkillsContainer>
          {skills.map((skill, index) => (
             <motion.div
                key={skill.title.en}
                className={`skill-card skill-card-${index}`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={0.1 + index * 0.1}
              >
              <Skill>
                <SkillTitle>{skill.title[lang]}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem key={item.name}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </motion.div>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills

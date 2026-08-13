import React from 'react';
import { motion } from 'framer-motion';
import {
  Container, Wrapper, Tag, Title, TopGrid, Panel, PanelTag, PanelTitle, PanelText,
  StatRow, Stat, StatValue, StatLabel, VisionPanel, ValuesGrid, ValueCard, ValueIndex, ValueTitle, ValueDesc,
} from './AboutStyle';
import { Bio } from '../../data/constants';
import { useLanguage } from '../../context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const About = () => {
  const { lang, t } = useLanguage();

  return (
    <Container id="about">
      <Wrapper>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
        >
          <Tag style={{ textAlign: 'center', display: 'block' }}>{t.about.tag}</Tag>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.05}
        >
          <Title>{t.about.title}</Title>
        </motion.div>

        <TopGrid>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0.1}
          >
            <Panel>
              <PanelTag>{t.about.tag}</PanelTag>
              <PanelTitle>{Bio.name}</PanelTitle>
              <PanelText>{Bio.description[lang]}</PanelText>
              <StatRow>
                {t.about.stats.map((stat) => (
                  <Stat key={stat.label}>
                    <StatValue>{stat.value}</StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </Stat>
                ))}
              </StatRow>
            </Panel>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0.2}
          >
            <VisionPanel>
              <PanelTag>{t.about.visionTag}</PanelTag>
              <PanelTitle>{t.about.visionTitle}</PanelTitle>
              <PanelText>{t.about.visionText}</PanelText>
            </VisionPanel>
          </motion.div>
        </TopGrid>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          style={{ width: '100%' }}
        >
          <Tag style={{ marginBottom: 20, display: 'block' }}>{t.about.valuesTag}</Tag>
        </motion.div>

        <ValuesGrid>
          {t.about.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.1 + index * 0.08}
            >
              <ValueCard>
                <ValueIndex>0{index + 1}</ValueIndex>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDesc>{value.desc}</ValueDesc>
              </ValueCard>
            </motion.div>
          ))}
        </ValuesGrid>
      </Wrapper>
    </Container>
  );
};

export default About;

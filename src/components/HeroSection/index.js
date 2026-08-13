import React from 'react';
import { motion } from 'framer-motion';
import Particle from '../ParticleAnimation';
import {
  HeroContainer, HeroBg, HeroLeftContainer, ImageRing, Img, HeroRightContainer, HeroInnerContainer,
  TextLoop, Title, NameGradient, Span, SubTitle, ButtonRow, ResumeButton, OutlineButton,
  Badge, BadgeDot, BlobOne, BlobTwo, ScrollCue,
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { useLanguage } from '../../context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const HeroSection = () => {
  const { lang, t } = useLanguage();

  return (
    <div id="hero">
      <HeroContainer>
        <BlobOne />
        <BlobTwo />
        <HeroBg>
           <Particle
            particleColors={["#ca7eec","#854CE6", "#13ADC7"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
              <Badge>
                <BadgeDot /> {t.hero.available}
              </Badge>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0.1}>
              <Title>
                {t.hero.greeting} <br />
                <NameGradient>{Bio.name}</NameGradient>
              </Title>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0.2}>
              <TextLoop>
                {t.hero.rolePrefix}
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles[lang],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
            </motion.div>

      

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0.4}>
              <ButtonRow>
                <ResumeButton href={Bio.resume} target="_blank" rel="noreferrer">
                  {t.hero.resume}
                </ResumeButton>
                <OutlineButton href="#projects">{t.hero.viewProjects}</OutlineButton>
              </ButtonRow>
            </motion.div>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ animation: 'floatY 6s ease-in-out infinite' }}
            >
              <ImageRing>
                <Img src={HeroImg} alt="hero" />
              </ImageRing>
            </motion.div>
          </HeroRightContainer>
        </HeroInnerContainer>

        <ScrollCue href="#skills">
          <span>{t.hero.scroll}</span>
          <span>↓</span>
        </ScrollCue>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;

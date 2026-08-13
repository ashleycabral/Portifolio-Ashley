import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, ToggleIndicator } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { useLanguage } from '../../context/LanguageContext'

const TABS = [
  { key: 'all', value: 'all' },
  { key: 'sites', value: 'web app' },
  { key: 'landing', value: 'android app' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const { t } = useLanguage();

  const activeIndex = TABS.findIndex((tab) => tab.value === toggle);
  const visibleProjects = toggle === 'all' ? projects : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
          <Title>{t.projects.title}</Title>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} custom={0.08}>
          <Desc>{t.projects.desc}</Desc>
        </motion.div>

        <ToggleButtonGroup>
          
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>{t.projects.all}</ToggleButton>
          <ToggleButton active={toggle === 'web app'} onClick={() => setToggle('web app')}>{t.projects.sites}</ToggleButton>
          <ToggleButton active={toggle === 'android app'} onClick={() => setToggle('android app')}>{t.projects.landing}</ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            </motion.div>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects

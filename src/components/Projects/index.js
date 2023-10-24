import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <Desc>
        Aqui estão alguns dos meus projetos, tanto pessoais quanto acadêmicos.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>TODOS</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>TODOS</ToggleButton>
          }
          <Divider />
          {toggle === 'Sites' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>SITES</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>SITES</ToggleButton>
          }
          <Divider />
          {toggle === 'Landing page' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>LANDING PAGES</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>LANDING PAGES</ToggleButton>
          }
        
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
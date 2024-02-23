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
        <Title>Projects</Title>
        <Desc>
          {/* I have worked on a wide range of projects. From Analog to Digital. Here are some of my projects. */}
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'ANALOG DESIGN' ?
            <ToggleButton active value="ANALOG DESIGN" onClick={() => setToggle('ANALOG DESIGN')}>ANALOG DESIGN</ToggleButton>
            :
            <ToggleButton value="ANALOG DESIGN" onClick={() => setToggle('ANALOG DESIGN')}>ANALOG DESIGN</ToggleButton>
          }
          <Divider />
          {toggle === 'PHYSICAL DESIGN' ?
            <ToggleButton active value="PHYSICAL DESIGN" onClick={() => setToggle('PHYSICAL DESIGN')}>PHYSICAL DESIGN</ToggleButton>
            :
            <ToggleButton value="PHYSICAL DESIGN" onClick={() => setToggle('PHYSICAL DESIGN')}>PHYSICAL DESIGN</ToggleButton>
          }
          <Divider />
          {toggle === 'CMOS' ?
            <ToggleButton active value="CMOS" onClick={() => setToggle('CMOS')}>CMOS</ToggleButton>
            :
            <ToggleButton value="CMOS" onClick={() => setToggle('CMOS')}>CMOS</ToggleButton>
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
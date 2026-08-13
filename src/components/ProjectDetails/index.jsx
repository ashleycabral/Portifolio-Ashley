import { CloseRounded, GitHub } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../../context/LanguageContext'

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 24px;
display: flex;
flex-direction: column;
position: relative;
border: 1px solid ${({ theme }) => theme.primary}30;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 20px;
    background: ${({ theme }) => theme.card_light};
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    transition: all 0.2s ease;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: #fff;
    }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
    color: ${({ theme }) => theme.text_secondary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    margin: 4px;
    padding: 4px 10px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary}20;
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px 0px 6px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    padding: 14px 16px;
    border-radius: 12px;
    background: linear-gradient(120deg, ${({ theme }) => theme.primary}, #c084fc);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 24px ${({ theme }) => theme.primary}55;
    }
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const { lang, t } = useLanguage();

    if (!project) return null;

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseButton onClick={() => setOpenModal({ state: false, project: null })} aria-label="Close">
                        <CloseRounded />
                    </CloseButton>
                    <Image src={project.image} alt={project.title[lang]} />
                    <Title>{project.title[lang]}</Title>
                    <Date>{project.date[lang]}</Date>
                    <Tags>
                        {project.tags?.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project.description[lang]}</Desc>
                    <ButtonGroup>
                        <Button href={project.webapp} target="_blank" rel="noreferrer">
                            {t.projects.view}
                        </Button>
                        {project.github && project.github !== '/' && (
                            <Button
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                style={{ background: 'transparent', border: '1.5px solid currentColor', color: 'inherit' }}
                            >
                                <GitHub fontSize="small" /> GitHub
                            </Button>
                        )}
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default ProjectDetails

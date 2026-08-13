import React, { useRef } from 'react'
import styled from 'styled-components'
import { useLanguage } from '../../context/LanguageContext'

const Card = styled.div`
    --spot-x: 50%;
    --spot-y: 0%;
    width: 330px;
    max-width: 100%;
    height: 500px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 16px;
    box-shadow: 0 10px 26px ${({ theme }) => theme.shadow};
    overflow: hidden;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.primary}25;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 16px;
        padding: 1px;
        background: radial-gradient(220px circle at var(--spot-x) var(--spot-y), ${({ theme }) => theme.primary}90, transparent 70%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 26px 50px ${({ theme }) => theme.shadow};
        border-color: ${({ theme }) => theme.primary}70;
    }

    &:hover::before {
        opacity: 1;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    background-color: ${({ theme }) => theme.card_light};
    border-radius: 12px;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary}18;
    padding: 3px 10px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const ViewLink = styled.div`
    margin-top: auto;
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    gap: 6px;

    ${Card}:hover & {
        transform: translateX(4px);
    }

    transition: transform 0.25s ease;
`

const ProjectCards = ({ project, setOpenModal }) => {
    const { lang, t } = useLanguage();
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        node.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
        node.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
    };

    return (
        <Card ref={ref} onMouseMove={handleMouseMove} onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.image} alt={project.title[lang]} />
            <Tags>
                {project.tags?.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title[lang]}</Title>
                <Date>{project.date[lang]}</Date>
                <Description>{project.description[lang]}</Description>
            </Details>
            <ViewLink>{t.projects.view} →</ViewLink>
        </Card>
    )
}

export default ProjectCards

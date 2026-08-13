import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../../context/LanguageContext'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    max-width: 100%;
    border-radius: 16px;
    box-shadow: 0 8px 24px ${({ theme }) => theme.shadow};
    padding: 20px 24px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: ${({ theme }) => theme.card};
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0 16px 36px ${({ theme }) => theme.shadow};
        transform: translateY(-6px);
        border-color: ${({ theme }) => theme.primary}70;
    }
    @media only screen and (max-width: 768px){
        padding: 16px;
        gap: 8px;
        width: 320px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }

    border: 1px solid ${({ theme }) => theme.primary}30;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 14px;
`

const Image = styled.img`
    height: 50px;
    width: 50px;
    object-fit: cover;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
        width: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const RoleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const CurrentBadge = styled.span`
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #22c55e;
    background: #22c55e20;
    border-radius: 100px;
    padding: 3px 10px;
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const ExperienceCard = ({ experience }) => {
    const { lang, t } = useLanguage();
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <RoleRow>
                        <Role>{experience.role[lang]}</Role>
                        {experience.current && <CurrentBadge>{t.experience.current}</CurrentBadge>}
                    </RoleRow>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date[lang]}</Date>
                </Body>
            </Top>
            <Description>
                <Span>{experience.desc[lang]}</Span>
            </Description>
        </Card>
    )
}

export default ExperienceCard

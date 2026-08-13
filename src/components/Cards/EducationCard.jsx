import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../../context/LanguageContext'

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
    }
    @media only screen and (max-width: 768px){
        padding: 16px;
        gap: 8px;
        width: 320px;
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

const Name = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Degree = styled.div`
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

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const EducationCard = ({ education }) => {
    const { lang, t } = useLanguage();
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree[lang]}</Degree>
                    <Date>{education.date[lang]}</Date>
                </Body>
            </Top>
            <Grade><b>{t.education.grade}: </b>{education.grade[lang]}</Grade>
            <Description>
                <Span>{education.desc[lang]}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard

import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  height: 80vh;
  position: relative;
  padding: 90px 30px 60px;
  overflow: hidden;
  z-index: 1;

  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    70% 95%,
    0 100%
  );

  @media (max-width: 960px) {
    height: auto;
    min-height: 700px;
    padding: 80px 20px 110px;

    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      70% 97%,
      0 100%
    );
  }

  @media (max-width: 640px) {
    min-height: 650px;
    padding: 70px 16px 100px;

    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      70% 98%,
      0 100%
    );
  }
`;


export const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
  pointer-events: none;
  z-index: 0;
  animation: floatBlob 14s ease-in-out infinite;
`;

export const BlobOne = styled(Blob)`
  width: 340px;
  height: 340px;
  background: ${({ theme }) => theme.primary};
  top: -80px;
  left: -60px;
`;

export const BlobTwo = styled(Blob)`
  width: 280px;
  height: 280px;
  background: #c084fc;
  bottom: -60px;
  right: -40px;
  animation-delay: 3s;
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

  overflow: hidden;

  pointer-events: auto;
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  z-index: 2;
  pointer-events: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    gap: 35px;
  }

  @media (max-width: 640px) {
    gap: 24px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  position: relative;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.primary}55;
  background: ${({ theme }) => theme.primary}12;
  color: ${({ theme }) => theme.primary};
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 22px;
  letter-spacing: 0.3px;

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const BadgeDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulseRing 1.8s infinite;
`;

export const ImageRing = styled.div`
  position: relative;
  width: fit-content;
  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, ${({ theme }) => theme.primary}, #c084fc, #61dafb, ${({ theme }) => theme.primary});
    animation: spin-slow 8s linear infinite;
    z-index: 0;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.card_light};
    z-index: 0;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 380px;
  max-height: 380px;
  border-radius: 50%;
  z-index: 1;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 280px;
    max-height: 280px;
  }

  @media (max-width: 640px) {
    max-width: 230px;
    max-height: 230px;
  }
`;

export const Title = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 52px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.15;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 38px;
    margin-bottom: 8px;
  }
`;

export const NameGradient = styled.span`
  background: linear-gradient(120deg, ${({ theme }) => theme.primary}, #c084fc 60%, #61dafb);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientShift 6s ease infinite;
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 30px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 8px;
  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 19px;
  line-height: 1.7;
  margin-top: 22px;
  margin-bottom: 38px;
  max-width: 540px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 15px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  pointer-events: auto;
  margin-top: 25px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    text-decoration: none;
    padding: 16px 32px;
    color: #fff;
    pointer-events: auto;
    border-radius: 14px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(120deg, ${({ theme }) => theme.primary} 0%, #c084fc 100%);
    box-shadow: 0 14px 30px -8px ${({ theme }) => theme.primary}70;
    &:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 20px 40px -6px ${({ theme }) => theme.primary}90;
    }
    @media (max-width: 640px) {
        padding: 14px 26px;
        font-size: 15px;
    }
`;

export const OutlineButton = styled.a`
    text-decoration: none;
    padding: 14px 30px;
    color: ${({ theme }) => theme.text_primary};
    border: 1.5px solid ${({ theme }) => theme.text_secondary}55;
    border-radius: 14px;
    cursor: pointer;
    pointer-events: auto;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.25s ease-in-out;
    &:hover {
        border-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.primary};
        transform: translateY(-3px);
    }
    @media (max-width: 640px) {
        padding: 12px 24px;
        font-size: 15px;
    }
`;

export const ScrollCue = styled.a`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;

  z-index: 5;

  pointer-events: auto;

  span:last-child {
    display: block;
    animation: bounceArrow 1.8s ease-in-out infinite;
  }

  @media (max-width: 640px) {
    bottom: 25px;
    font-size: 10px;
  }

  @media (max-width: 400px) {
    bottom: 18px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0 20px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  padding: 0 24px;
  gap: 12px;
`;

export const Tag = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
`;

export const Title = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  margin-top: 10px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 34px;
  }
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  width: 100%;
  align-items: stretch;
  margin-bottom: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}25;
  border-radius: 22px;
  padding: 34px;
  box-shadow: 0 20px 45px ${({ theme }) => theme.shadow};
  position: relative;
  overflow: hidden;
`;

export const PanelTag = styled.div`
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}15;
  padding: 5px 12px;
  border-radius: 100px;
  margin-bottom: 16px;
`;

export const PanelTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 14px;
  font-family: 'Space Grotesk', sans-serif;
`;

export const PanelText = styled.p`
  font-size: 15.5px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
`;

export const StatRow = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.text_secondary}25;

  @media (max-width: 500px) {
    gap: 16px;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatValue = styled.span`
  font-size: 26px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  background: linear-gradient(120deg, ${({ theme }) => theme.primary}, #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const StatLabel = styled.span`
  font-size: 12.5px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const VisionPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(150deg, ${({ theme }) => theme.primary}18, transparent 60%), ${({ theme }) => theme.card};

  &::before {
    content: '"';
    position: absolute;
    top: -30px;
    right: 10px;
    font-size: 180px;
    font-family: Georgia, serif;
    color: ${({ theme }) => theme.primary}12;
    line-height: 1;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}20;
  border-radius: 18px;
  padding: 26px 22px;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.primary}70;
    box-shadow: 0 16px 34px ${({ theme }) => theme.shadow};
  }
`;

export const ValueIndex = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 14px;
`;

export const ValueTitle = styled.h4`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

export const ValueDesc = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

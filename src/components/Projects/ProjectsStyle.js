import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 24px 100px;
    gap: 12px;
`;

export const Title = styled.div`
font-size: 42px;
font-family: 'Space Grotesk', sans-serif;
text-align: center;
font-weight: 700;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  border: 1.5px solid ${({ theme }) => theme.primary};
  border-radius: 14px;

  padding: 4px;
  margin: 26px 0;

  background: ${({ theme }) => theme.card};

  gap: 2px;

  @media (max-width: 768px) {
    max-width: 100%;
    overflow-x: auto;
  }
`;



export const ToggleButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 18px;

  min-height: 40px;

  border: none;
  border-radius: 10px;

  cursor: pointer;

  background: ${({ active, theme }) =>
    active
      ? `linear-gradient(120deg, ${theme.primary}, #c084fc)`
      : 'transparent'};

  color: ${({ active, theme }) =>
    active ? '#fff' : theme.primary};

  font-weight: 600;
  font-size: 13px;

  transition:
    background 0.3s ease,
    color 0.25s ease,
    transform 0.2s ease;

  white-space: nowrap;

  &:hover {
    color: #fff;

    background: ${({ active, theme }) =>
      active
        ? `linear-gradient(120deg, ${theme.primary}, #c084fc)`
        : `${theme.primary}20`};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 11.5px;
  }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 28px;
    flex-wrap: wrap;
`;

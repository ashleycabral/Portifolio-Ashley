import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  z-index: 60;
  background: transparent;
  pointer-events: none;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #c084fc);
  transition: width 0.1s linear;
`;

const TopButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 60;
  box-shadow: 0 8px 24px ${({ theme }) => theme.shadow};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '16px')});
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;

  svg {
    position: relative;
    z-index: 1;
    font-size: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }

  @media (max-width: 640px) {
    right: 16px;
    bottom: 16px;
    width: 46px;
    height: 46px;
  }
`;

const RingSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
`;

const ScrollTop = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 480);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ProgressBar>
        <ProgressFill $progress={progress} />
      </ProgressBar>
      <TopButton onClick={scrollToTop} $visible={visible} aria-label="Voltar ao topo">
        <RingSvg width="52" height="52" viewBox="0 0 52 52">
          <circle cx="26" cy="26" r={RADIUS} fill="none" stroke="rgba(133,76,230,0.18)" strokeWidth="3" />
          <circle
            cx="26"
            cy="26"
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </RingSvg>
        <FaArrowUp />
      </TopButton>
    </>
  );
};

export default ScrollTop;

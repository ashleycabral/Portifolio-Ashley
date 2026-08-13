import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const dictionaries = {
  pt: {
    code: 'pt',
    label: 'PT',
    nav: {
      about: 'Sobre',
      skills: 'Skills',
      experience: 'Experiência',
      projects: 'Projetos',
      education: 'Formação',
      github: 'Github',
      linkedin: 'Linkedin',
    },
    hero: {
      greeting: 'Olá, eu sou',
      rolePrefix: 'e sou',
      resume: 'Meu currículo',
      viewProjects: 'Ver projetos',
      available: 'Disponível para novas oportunidades',
      scroll: 'Role para explorar',
    },
    about: {
      tag: 'Sobre mim',
      title: 'Quem é a Ashley por trás do código',
      visionTag: 'Visão',
      visionTitle: 'Como eu enxergo o desenvolvimento',
      visionText:
        'Acredito que código bom é código que resolve problemas reais com clareza — pra quem usa e pra quem mantém. Quero crescer como referência em front-end, unindo engenharia sólida a interfaces que as pessoas sintam prazer em usar.',
      valuesTag: 'Valores',
      values: [
        { title: 'Aprendizado contínuo', desc: 'Estudo todo dia. Tecnologia muda rápido e eu gosto de acompanhar de perto.' },
        { title: 'Código limpo', desc: 'Clean Code e SOLID não são só teoria — é o que faz um projeto sobreviver no tempo.' },
        { title: 'Empatia com o usuário', desc: 'Interface bonita sem acessibilidade e usabilidade não é interface boa.' },
        { title: 'Colaboração', desc: 'Os melhores produtos nascem de time alinhado, não de herói solitário.' },
      ],
      stats: [
        { value: '2+', label: 'Anos de experiência' },
        { value: '7+', label: 'Projetos' },
        { value: '2', label: 'Formações Acadêmicas' },
      ],
    },
    skills: {
      title: 'Skills',
      desc: 'Aqui estão algumas das habilidades nas quais venho trabalhando.',
    },
    experience: {
      title: 'Experiência',
      desc: 'Essas são as minhas experiências de trabalho.',
      current: 'Atual',
    },
    education: {
      title: 'Formação Acadêmica',
      desc: 'Minha jornada educacional tem sido uma busca constante de autoconhecimento e evolução. A seguir, apresento detalhes sobre minha trajetória educacional.',
      grade: 'Situação',
    },
    projects: {
      title: 'Projetos',
      desc: 'Aqui estão alguns dos meus projetos, tanto pessoais quanto acadêmicos.',
      all: 'TODOS',
      sites: 'SITES',
      landing: 'LANDING PAGES',
      view: 'Visualizar o projeto',
      members: 'Membros',
    },
    contact: {
      title: 'Contato',
      desc: 'Estou disponível para novas oportunidades. Se quiser conversar sobre vagas ou parcerias, entre em contato por um dos canais abaixo.',
      email: 'E-mail',
      phone: 'Telefone',
      linkedin: 'LinkedIn',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    code: 'en',
    label: 'EN',
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      github: 'Github',
      linkedin: 'Linkedin',
    },
    hero: {
      greeting: "Hi, I'm",
      rolePrefix: 'and I am a',
      resume: 'My resume',
      viewProjects: 'View projects',
      available: 'Available for new opportunities',
      scroll: 'Scroll to explore',
    },
    about: {
      tag: 'About me',
      title: "Who's Ashley behind the code",
      visionTag: 'Vision',
      visionTitle: 'How I see software development',
      visionText:
        'I believe good code is code that solves real problems clearly — for the people who use it and the people who maintain it. I want to grow into a front-end reference, pairing solid engineering with interfaces people genuinely enjoy using.',
      valuesTag: 'Values',
      values: [
        { title: 'Continuous learning', desc: 'I study every day. Technology moves fast and I like staying close to it.' },
        { title: 'Clean code', desc: "Clean Code and SOLID aren't just theory — they're what makes a project survive over time." },
        { title: 'User empathy', desc: "A beautiful interface without accessibility and usability isn't actually a good interface." },
        { title: 'Collaboration', desc: 'The best products come from an aligned team, not a lone hero.' },
      ],
      stats: [
        { value: '2+', label: 'Years of experience' },
        { value: '7+', label: 'Projects' },
        { value: '2', label: 'Degrees' },
      ],
    },
    skills: {
      title: 'Skills',
      desc: "Here are some of the skills I've been working on.",
    },
    experience: {
      title: 'Experience',
      desc: 'These are my work experiences.',
      current: 'Current',
    },
    education: {
      title: 'Education',
      desc: 'My educational journey has been a constant search for self-knowledge and growth. Below are the details of my academic path.',
      grade: 'Status',
    },
    projects: {
      title: 'Projects',
      desc: 'Here are some of my projects, both personal and academic.',
      all: 'ALL',
      sites: 'WEBSITES',
      landing: 'LANDING PAGES',
      view: 'View project',
      members: 'Members',
    },
    contact: {
      title: 'Contact',
      desc: "I'm available for new opportunities. If you'd like to talk about projects, jobs or partnerships, reach out through one of the channels below.",
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};

const LanguageContext = createContext(undefined);

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'pt';
  const saved = window.localStorage.getItem('portfolio-lang');
  if (saved === 'pt' || saved === 'en') return saved;
  const browserLang = window.navigator?.language?.toLowerCase() || 'pt';
  return browserLang.startsWith('pt') ? 'pt' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: dictionaries[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage deve ser usado dentro de LanguageProvider');
  return ctx;
};

export default LanguageContext;

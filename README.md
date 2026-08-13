# Portfólio — Ashley Cabral

Portfólio pessoal em React + styled-components, com tema claro/escuro, PT-BR/EN e animações com Framer Motion.

## O que tem de novo nessa versão

- **Tema claro/escuro** — toggle no navbar (ícone sol/lua), persiste no `localStorage`, respeita a preferência do sistema no primeiro acesso.
- **PT-BR / EN** — toggle no navbar, todo o texto de interface e o conteúdo (bio, experiências, formação, projetos) é bilíngue, com detecção automática do idioma do navegador na primeira visita.
- **Seção "Sobre mim" nova** (`src/components/About`) — bio + bloco de "Visão" + grid de "Valores", que não existia antes (o componente estava só como placeholder).
- **Efeitos e animações**:
  - Framer Motion em todas as seções (fade/slide ao entrar na viewport, stagger em listas de cards).
  - Hero com badge "disponível para oportunidades" com pulso, nome com gradiente animado, imagem com anel gradiente giratório.
  - Cards de projeto com efeito *spotlight* que segue o mouse (borda que brilha onde você passa o cursor).
  - Navbar com efeito glass (`backdrop-filter: blur`) ao rolar a página.
  - Abas de filtro de projetos com indicador deslizante animado.
  - Barra de progresso de leitura no topo + botão "voltar ao topo" com anel de progresso em SVG.
- Estrutura de dados (`src/data/constants.js`) reorganizada: cada texto (bio, experiências, formação, projetos) agora tem `{ pt, en }`.

## Rodar

```bash
npm install
npm start
```

Abre em `http://localhost:3000`.

```bash
npm run build
```

Gera a build de produção em `/build`.

## Novos arquivos relevantes

```
src/context/ThemeModeContext.js   -> estado global do tema (claro/escuro)
src/context/LanguageContext.js    -> estado global do idioma + dicionário de textos
src/components/About/             -> nova seção "Sobre mim"
src/components/ScrollTop/         -> barra de progresso + botão voltar ao topo
src/hooks/useReveal.js            -> hook de scroll-reveal (utilitário, disponível se quiser usar em novos blocos)
```

## Como subir isso no seu repositório atual do GitHub

Não precisa criar outro repositório. É só substituir os arquivos dentro da pasta do projeto que você já tem clonado localmente:

```bash
# dentro da pasta do seu repositório local, sobrescreva com os arquivos deste zip
git add .
git commit -m "Redesign do portfólio: tema claro/escuro, PT/EN e novos efeitos"
git push
```

Se você usa Vercel/Netlify conectado ao repo, o deploy novo sobe sozinho depois do push — não precisa reconfigurar nada, porque a estrutura de pastas (`src/`, `public/`, `package.json`) continua a mesma de antes.



# Portuguese with Thaís — Design System

Este documento registra os elementos visuais e componentes reutilizáveis do projeto.

O objetivo é manter consistência entre páginas e criar uma base reaproveitável para projetos futuros.

---

# Identidade Visual

## Direção

- Editorial
- Elegante
- Minimalista
- Brasileiro contemporâneo
- Acolhedor
- Cultural
- Premium sem parecer distante

## Evitar

- Verde e amarelo clichês
- Elementos turísticos
- Excesso de sombras
- Layout com aparência de template
- Decoração sem função

---

# Cores

Controladas em:

frontend/src/styles/variables.css

Tokens atuais:

- --color-primary
- --color-primary-dark
- --color-accent
- --color-accent-hover
- --color-background
- --color-surface
- --color-text
- --color-text-light
- --color-border

---

# Tipografia

## Heading

Fonte:

Playfair Display

Usada em:

- Hero
- Títulos
- Frases editoriais
- Destaques

## Body

Fonte:

Inter

Usada em:

- Parágrafos
- Navegação
- Botões
- Labels

---

# Layout

## Container

Todo conteúdo principal utiliza:

SectionContainer

Responsável por:

- largura máxima
- centralização
- padding horizontal

Nunca repetir manualmente esses estilos.

---

# Componentes

## Header

Responsável por:

- Logo
- Navegação
- CTA
- Menu mobile

---

## Hero

Responsável por:

- Apresentar a marca
- CTA principal
- Imagem da Thaís

Específico da Home.

---

## IntroSection

Responsável por:

- Manifesto
- Introdução da marca
- Selo editorial

Selo atual:

EST. 2024 / SÃO PAULO

Confirmar futuramente o ano correto.

---

## InfoCard

Objetivo:

Apresentar informações reutilizáveis.

Props:

- icon
- title
- description
- href
- buttonLabel

Nunca utilizar textos fixos dentro do componente.

Sempre receber conteúdo por props.

---

## SectionHeading

Objetivo:

Padronizar títulos das seções.

Props:

- eyebrow
- title
- description
- align
- maxWidth

maxWidth permite controlar a largura do bloco em cada página.

---

## SectionContainer

Objetivo:

Padronizar largura e padding horizontal.

Props:

- children
- as
- className

---

## SectionDivider

Objetivo:

Separações editoriais.

Props:

- label
- tone
- className

Usar apenas quando realmente fizer sentido.

Não utilizar dentro da IntroSection.

---

# Home

## Hero

Objetivo:

Apresentar a marca.

---

## Intro

Objetivo:

Mostrar que aprender português vai além da gramática.

---

## Lessons Preview

Objetivo:

Mostrar rapidamente os formatos de aula.

Não explicar tudo.

Despertar curiosidade.

Componentes utilizados:

- SectionContainer
- SectionHeading
- InfoCard

Cards atuais:

- Private Lessons
- Conversation Practice
- Business Portuguese

(Placeholders até validação da Thaís.)

---

# Responsividade

Fluxo oficial:

Desktop

↓

Tablet

↓

Mobile

Cada seção deve ser validada antes da próxima.

---

# Convenções

## Componentes

PascalCase

Exemplo:

Header

InfoCard

LessonsPreview

---

## Variáveis

camelCase

---

## CSS Modules

camelCase

Exemplo:

primaryButton

imagePlaceholder

headingColumn

---

## Estrutura

ComponentName/

├── ComponentName.jsx

└── ComponentName.module.css

---

## Ordem dos imports

1. Bibliotecas externas

2. Componentes

3. Assets

4. CSS Module

---

# Regras

Antes de criar um componente perguntar:

Ele será reutilizado?

SIM

↓

common/

NÃO

↓

sections/

---

Criar abstrações somente quando houver repetição real.

Nunca criar componentes "porque talvez um dia use".

---

# Componentes planejados

- Button
- Footer
- FinalCTA
- MainLayout

Criar apenas quando forem utilizados.

---

# Próxima atualização

Atualizar este documento sempre que:

- surgir um novo componente reutilizável
- houver mudança visual importante
- houver nova decisão arquitetural
# 01 - Stack de Tecnologia

Este documento detalha as principais tecnologias, bibliotecas e frameworks utilizados na aplicação Pokedex.

## Frontend

- **React 19**: Biblioteca principal para a construção da interface de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática, melhorando a robustez e a manutenibilidade do código.
- **Vite**: Ferramenta de build moderna que oferece um ambiente de desenvolvimento rápido com Hot Module Replacement (HMR).

## Gerenciamento de Dados e Estado

- **TanStack Query (React Query)**: Utilizada para gerenciar o cache e o estado de dados assíncronos (data fetching), simplificando a lógica de carregamento, erros e atualização de dados da API.
- **React Context API**: Usada para gerenciamento de estado global simples, como o ID do Pokémon atual na `SearchStore`.

## Requisições HTTP

- **Axios**: Cliente HTTP baseado em Promises para fazer requisições à PokeAPI. Ele é encapsulado no `pokemonService`.

## Estilização

- **Tailwind CSS**: Framework CSS utility-first para criar designs customizados de forma rápida e eficiente. As cores dos tipos de Pokémon são customizadas no arquivo `tailwind.config.js`.
- **PostCSS**: Ferramenta para transformar CSS com plugins. Usado em conjunto com o Tailwind CSS.
- **Framer Motion**: Biblioteca para criar animações fluidas e performáticas.

## Testes

- **Vitest**: Framework de teste rápido e moderno, com uma API compatível com o Jest.
- **React Testing Library**: Biblioteca para testar componentes React da maneira como os usuários os utilizariam.
- **JSDOM**: Ambiente de teste que simula um navegador sem a necessidade de uma interface gráfica.
- **MSW (Mock Service Worker)**: Biblioteca para interceptar requisições de rede e retornar respostas mockadas durante os testes.

# 03 - Fluxo de Dados

Este documento explica como os dados são obtidos, gerenciados e exibidos na aplicação.

## Visão Geral

O fluxo de dados é unidirecional e reativo, centrado no estado do Pokémon atual, que é gerenciado pelo `SearchStore`. Quando o ID do Pokémon muda, a aplicação reage para buscar e exibir os novos dados.

## Fluxo Detalhado

1.  **Interação do Usuário**:
    *   O usuário clica nos botões de navegação (`<` ou `>`) ou pressiona as teclas de seta.
    *   Essas ações chamam as funções `next()` or `prev()` do `SearchStore`.

2.  **Gerenciamento de Estado (`SearchStore`)**:
    *   O `SearchStore` (`src/stores/SearchStore.tsx`) é um contexto React que armazena o `currentId` do Pokémon.
    *   As funções `next()` e `prev()` atualizam este ID.
    *   O componente `App` consome este estado usando o hook `useSearch()`.

3.  **Busca de Dados (Data Fetching)**:
    *   O componente `App` detecta a mudança no `currentId`.
    *   Ele usa os hooks customizados `usePokemon(currentId)` e `usePokemonSpecies(currentId)`.
    *   Esses hooks (`src/hooks/`) são wrappers em torno do `useQuery` do TanStack Query.
    *   O `useQuery` chama as funções `getPokemon(id)` e `getPokemonSpecies(id)` do `pokemonService`.

4.  **Camada de Serviço (`pokemonService`)**:
    *   O `pokemonService` (`src/services/pokemonService.ts`) usa o `axios` para fazer requisições GET à PokeAPI (`https://pokeapi.co/api/v2`).
    *   Ele retorna os dados brutos da API, tipados com as interfaces de `src/entities`.

5.  **Gerenciamento de Cache (TanStack Query)**:
    *   O TanStack Query gerencia automaticamente o estado da requisição (carregamento, sucesso, erro) e o cache dos dados.
    *   Se o usuário navegar de volta para um Pokémon já visitado, os dados são servidos do cache, tornando a navegação mais rápida.

6.  **Renderização na UI**:
    *   O componente `App` recebe o estado (`data`, `isLoading`, `isError`) do TanStack Query.
    *   Ele passa esses dados para o componente `PokedexCard`.
    *   `PokedexCard` e seus sub-componentes (`DataSide`, `VisualSide`) usam o `usePokedexCard` context hook para acessar os dados e renderizar as informações na tela.
    *   Durante o carregamento (`isLoading`), a UI pode exibir um estado de loading. Em caso de erro (`isError`), uma mensagem de erro pode ser mostrada.

## Diagrama Simplificado

```
[Usuário] -> [Ação de Navegação] -> [SearchStore.updateId]
    ^                                        |
    |                                        v
[UI Renderiza] <- [PokedexCard] <- [App Componente] -> [usePokemon(id)]
                                                         |
                                                         v
                                                    [pokemonService] -> [PokeAPI]
```

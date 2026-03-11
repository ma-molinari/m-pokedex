# 04 - Biblioteca de Componentes

Este documento descreve os principais componentes React da aplicação.

## `PokedexCard`

-   **Localização**: `src/components/PokedexCard/index.tsx`
-   **Responsabilidade**: É o componente principal que serve como um contêiner e provedor de contexto para todos os dados de um Pokémon. Ele não renderiza nenhuma UI diretamente, mas envolve os sub-componentes que o fazem.
-   **Contexto**: Cria o `PokedexCardContext` para fornecer `pokemon`, `pokemonSpecies`, `isLoading`, e `isError` para seus componentes filhos.
-   **Hook associado**: `usePokedexCard()` é usado pelos filhos para consumir o contexto.

### Sub-componentes de `PokedexCard`

#### `VisualSide`

-   **Localização**: `src/components/PokedexCard/VisualSide.tsx`
-   **Responsabilidade**: Renderiza o lado esquerdo do cartão, que contém os elementos visuais principais:
    -   A imagem oficial do Pokémon.
    -   O nome e o número do Pokémon.
    -   As tags de tipo do Pokémon.

#### `DataSide`

-   **Localização**: `src/components/PokedexCard/DataSide.tsx`
-   **Responsabilidade**: Renderiza o lado direito do cartão, focado nos dados e estatísticas:
    -   Uma breve descrição do Pokémon (flavor text).
    -   Uma tabela com as estatísticas base (HP, Attack, Defense, etc.).
    -   A geração a que o Pokémon pertence.

#### `BackgroundText`

-   **Localização**: `src/components/PokedexCard/BackgroundText.tsx`
-   **Responsabilidade**: Renderiza o nome do Pokémon como um texto de fundo estilizado e de grande porte, posicionado atrás do cartão principal.

#### `GenerationTag`

-   **Localização**: `src/components/PokedexCard/GenerationTag.tsx`
-   **Responsabilidade**: Exibe uma tag formatada com o número da geração do Pokémon (ex: "Gen I", "Gen II").

#### `Image`

-   **Localização**: `src/components/PokedexCard/Image.tsx`
-   **Responsabilidade**: Componente focado em exibir a imagem do Pokémon, com um estado de carregamento visual (esqueleto) enquanto a imagem não é carregada.

## `App.tsx`

-   **Localização**: `src/App.tsx`
-   **Responsabilidade**: É o componente orquestrador principal da aplicação.
    -   Gerencia os efeitos colaterais globais, como a mudança da cor de fundo e o registro de eventos de teclado.
    -   Chama os hooks `usePokemon` e `usePokemonSpecies` para iniciar o fluxo de dados.
    -   Compõe a página principal, incluindo os botões de navegação e o `PokedexCard` com seus filhos.

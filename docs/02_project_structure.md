# 02 - Estrutura do Projeto

Este documento descreve a organização dos diretórios e arquivos no projeto Pokedex.

```
/
├── src/
│   ├── components/       # Componentes React reutilizáveis
│   │   └── PokedexCard/  # Componente principal e seus sub-componentes
│   │
│   ├── entities/         # Definições de tipos e interfaces (ex: Pokemon, PokemonSpecies)
│   │
│   ├── hooks/            # Hooks customizados para lógica de UI e dados
│   │
│   ├── services/         # Módulos para interagir com APIs externas (pokemonService)
│   │
│   ├── stores/           # Gerenciamento de estado global (SearchStore)
│   │
│   ├── test/             # Configuração e arquivos de teste
│   │
│   ├── utils/            # Funções utilitárias (ex: formatação, cores)
│   │
│   ├── App.tsx           # Componente raiz da aplicação
│   ├── main.tsx          # Ponto de entrada da aplicação React
│   └── index.css         # Estilos globais
│
├── public/               # Arquivos estáticos
├── package.json          # Dependências e scripts do projeto
├── tailwind.config.js    # Configuração do Tailwind CSS
└── vitest.config.ts      # Configuração do Vitest
```

## Descrição dos Diretórios Principais

- **`src/components`**: Contém todos os componentes React. A estrutura é modular, com cada componente complexo (como `PokedexCard`) tendo seu próprio diretório com seus sub-componentes.
- **`src/entities`**: Define as estruturas de dados centrais da aplicação. Essencial para garantir a consistência dos dados com TypeScript.
- **`src/hooks`**: Abriga hooks customizados que encapsulam lógica de estado e efeitos. Por exemplo, `usePokemon` encapsula a chamada de dados usando TanStack Query.
- **`src/services`**: Centraliza a comunicação com APIs externas. O `pokemonService` é responsável por todas as chamadas à PokeAPI.
- **`src/stores`**: Fornece estado global para a aplicação. `SearchStore` utiliza a Context API do React para gerenciar o ID do Pokémon atual.
- **`src/test`**: Contém a configuração dos testes (`setup.ts`), mocks (`msw`) e os próprios arquivos de teste (`*.test.tsx`).
- **`src/utils`**: Funções auxiliares puras que podem ser usadas em qualquer parte da aplicação, como `colors.ts` e `formatters.ts`.

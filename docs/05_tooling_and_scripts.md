# 05 - Ferramentas e Scripts

Este documento descreve as ferramentas de desenvolvimento e os scripts NPM disponíveis no projeto.

## Scripts NPM

Os seguintes scripts estão definidos no arquivo `package.json` e podem ser executados com `npm run <script_name>`.

-   **`npm run dev`**
    -   **Comando**: `vite`
    -   **Descrição**: Inicia o servidor de desenvolvimento do Vite. A aplicação estará disponível em um endereço local (geralmente `http://localhost:5173`) com Hot Module Replacement (HMR) ativado para um desenvolvimento rápido.

-   **`npm run build`**
    -   **Comando**: `vite build`
    -   **Descrição**: Compila a aplicação para produção. O Vite gera arquivos estáticos otimizados (HTML, CSS, JS) no diretório `dist/`.

-   **`npm run test`**
    -   **Comando**: `vitest`
    -   **Descrição**: Executa os testes da aplicação usando o Vitest. Ele procura por arquivos com sufixo `.test.ts` ou `.test.tsx` no diretório `src/` e exibe os resultados no console.

## Configuração de Ferramentas

-   **Vite (`vite.config.ts`)**: Arquivo de configuração para o Vite. Define plugins (como `@vitejs/plugin-react`), o diretório raiz e outras opções de build. (Nota: o arquivo não foi encontrado, então a configuração padrão do Vite está sendo assumida).

-   **Tailwind CSS (`tailwind.config.js`)**: Configura o Tailwind CSS.
    -   `content`: Especifica os arquivos que o Tailwind deve analisar para encontrar as classes de utilitários usadas.
    -   `theme.extend`: Permite a customização do tema padrão, como a adição de uma paleta de cores específica para os tipos de Pokémon.

-   **PostCSS (`postcss.config.cjs`)**: Configura os plugins do PostCSS, como `tailwindcss` e `autoprefixer`, que são necessários para processar o CSS do Tailwind.

-   **Vitest (`vitest.config.ts`)**: Configuração para o framework de testes Vitest. Geralmente define o ambiente de teste (como `jsdom`), arquivos de setup global e outras configurações relacionadas a testes.

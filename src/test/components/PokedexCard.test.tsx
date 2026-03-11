import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "../../stores/SearchStore";
import App from "../../App";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderApp = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </QueryClientProvider>,
  );
};

describe("PokedexCard Integration Test", () => {
  it("should display the pokemon data correctly", async () => {
    renderApp();

    await waitFor(() => {
      expect(screen.getByTestId("pokemon-name")).toHaveTextContent("bulbasaur");
    });

    expect(screen.getByText("#0001")).toBeInTheDocument();
    expect(screen.getByText("generation-i")).toBeInTheDocument();
  });

  it("should display error state with retry button when API fails", async () => {
    server.use(
      http.get("https://pokeapi.co/api/v2/pokemon/:id", () =>
        HttpResponse.json({ error: "Not found" }, { status: 500 }),
      ),
    );

    renderApp();

    await waitFor(() => {
      expect(screen.getByText("Erro ao carregar Pokémon")).toBeInTheDocument();
    });

    expect(
      screen.getByRole("button", { name: /tentar novamente/i }),
    ).toBeInTheDocument();
  });
});

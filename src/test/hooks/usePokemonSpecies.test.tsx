import { describe, it, expect } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { usePokemonSpecies } from '../../hooks/usePokemonSpecies';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
};

describe('usePokemonSpecies', () => {
  it('should fetch pokemon species data successfully', async () => {
    const { result } = renderHook(() => usePokemonSpecies('1'), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.generation.name).toBe('generation-i');
    expect(result.current.isLoading).toBe(false);
  });

  it('should expose refetch function', async () => {
    const { result } = renderHook(() => usePokemonSpecies('1'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(typeof result.current.refetch).toBe('function');
  });
});

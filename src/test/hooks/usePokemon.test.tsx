import { describe, it, expect } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { usePokemon } from '../../hooks/usePokemon';

const createWrapper = (retry = true) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: retry ? undefined : false,
      },
    },
  });

  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
};

describe('usePokemon', () => {
  it('should fetch pokemon data successfully', async () => {
    const { result } = renderHook(() => usePokemon('1'), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.name).toBe('bulbasaur');
    expect(result.current.data?.id).toBe(1);
    expect(result.current.isLoading).toBe(false);
  });

  it('should expose refetch function', async () => {
    const { result } = renderHook(() => usePokemon('1'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(typeof result.current.refetch).toBe('function');
  });
});

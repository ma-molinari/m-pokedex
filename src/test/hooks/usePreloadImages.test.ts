import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePreloadImages } from '../../hooks/usePreloadImages';

describe('usePreloadImages', () => {
  it('should not throw when called with empty array', () => {
    const { result } = renderHook(() => usePreloadImages([]));
    expect(result).toBeDefined();
  });

  it('should not throw when called with valid urls', () => {
    const urls = [
      'https://example.com/1.png',
      'https://example.com/2.png',
    ];
    const { result } = renderHook(() => usePreloadImages(urls));
    expect(result).toBeDefined();
  });

  it('should not throw when called with single url', () => {
    const { result } = renderHook(() =>
      usePreloadImages(['https://example.com/image.png'])
    );
    expect(result).toBeDefined();
  });
});

import { describe, it, expect } from 'vitest';
import { formatId, toMetric } from '../../utils/formatters';

describe('formatters', () => {
  describe('formatId', () => {
    it('should format a single digit id', () => {
      expect(formatId(1)).toBe('#0001');
    });

    it('should format a double digit id', () => {
      expect(formatId(12)).toBe('#0012');
    });

    it('should format a triple digit id', () => {
      expect(formatId(123)).toBe('#0123');
    });

    it('should format a four digit id', () => {
      expect(formatId(1025)).toBe('#1025');
    });
  });

  describe('toMetric', () => {
    it('should convert decimeters to meters', () => {
      expect(toMetric(10)).toBe(1);
    });

    it('should convert hectograms to kilograms', () => {
      expect(toMetric(10)).toBe(1);
    });
  });

});

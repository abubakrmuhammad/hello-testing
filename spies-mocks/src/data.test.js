import { it, describe, vi, expect } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    const logFn = vi.fn();

    generateReportData(logFn);

    expect(logFn).toHaveBeenCalled();
  });
});

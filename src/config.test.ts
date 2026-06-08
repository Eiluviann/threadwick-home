import { describe, expect, it } from 'vitest';
import { STUDIO_IS_EXTERNAL, STUDIO_REPO_URL, STUDIO_URL } from './config';

describe('config', () => {
  it('resolves a Studio URL', () => {
    expect(STUDIO_URL).toBeTruthy();
    // In test/dev (not PROD) with no override, it falls back to the live Studio URL.
    expect(STUDIO_URL).toMatch(/^https?:\/\//);
    expect(STUDIO_IS_EXTERNAL).toBe(true);
  });

  it('points the repo link at the Studio repository', () => {
    expect(STUDIO_REPO_URL).toContain('github.com/Eiluviann/threadwick');
  });
});

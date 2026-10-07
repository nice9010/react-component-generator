import { describe, it, expect } from 'vitest';
import { validatePromptLength, MAX_PROMPT_LENGTH } from './validatePrompt';

describe('validatePromptLength', () => {
  it('최대 길이는 500자다', () => {
    expect(MAX_PROMPT_LENGTH).toBe(500);
  });

  it('500자 이하면 유효하다', () => {
    expect(validatePromptLength('a'.repeat(500))).toEqual({ valid: true, length: 500 });
  });

  it('501자 이상이면 오류 메시지와 함께 무효다', () => {
    const result = validatePromptLength('a'.repeat(501));
    expect(result.valid).toBe(false);
    expect(result.length).toBe(501);
    expect(result.error).toContain('500');
  });
});

import { vi, describe, it, expect, beforeEach } from 'vitest';
import { Window } from 'happy-dom';
import fs from 'fs';
import path from 'path';
import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

describe('showError()', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocContent);
  });

  it('should add an error paragraph to the id="errors" element', () => {
    showError('test');

    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it('should not contain an error paragraph initially', () => {
    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).toBeNull();
  });
});

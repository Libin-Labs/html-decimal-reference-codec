import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('encodes ASCII character', () => {
  assert.equal(api.encodeDecimalReferences('A'), '&#65;');
});
test('encodes supplementary character', () => {
  assert.equal(api.encodeDecimalReferences('😀'), '&#128512;');
});
test('round trips text', () => {
  assert.equal(api.decodeDecimalReferences(api.encodeDecimalReferences('Aé😀')), 'Aé😀');
});
test('leaves ordinary text', () => {
  assert.equal(api.decodeDecimalReferences('plain'), 'plain');
});
test('decodes numeric reference', () => {
  assert.equal(api.decodeDecimalReferences('&#169;'), '©');
});
test('rejects invalid scalar', () => {
  assert.throws(() => api.decodeDecimalReferences('&#1114112;'), RangeError);
});

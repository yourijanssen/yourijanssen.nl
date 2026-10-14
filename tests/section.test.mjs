import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createSection} from '../lib/section.mjs';

test('section load waits for fonts and already-loaded image decoding', async () => {
  let finishFonts;
  let finishImage;
  const fonts = new Promise(resolve => { finishFonts = resolve; });
  const image = new Promise(resolve => { finishImage = resolve; });
  const section = createSection('Curriculum vitae');
  const element = {
    ownerDocument: {fonts: {ready: fonts}},
    querySelectorAll: () => [{complete: true, naturalWidth: 100, decode: () => image}],
  };
  let loaded = false;
  const pending = section.load(element).then(() => { loaded = true; });
  await Promise.resolve();
  assert.equal(loaded, false);
  finishFonts();
  await Promise.resolve();
  assert.equal(loaded, false);
  finishImage();
  await pending;
  assert.equal(loaded, true);
  assert.equal(section.label, 'Curriculum vitae');
});

test('section load skips unloaded images and tolerates asset failures', async () => {
  let lazyImageRequested = false;
  await createSection('Projects').load({
    ownerDocument: {},
    querySelectorAll: () => [
      {complete: false, naturalWidth: 0, decode: () => { lazyImageRequested = true; }},
      {complete: true, naturalWidth: 100, decode: () => Promise.reject(new Error('decode failed'))},
    ],
  });
  assert.equal(lazyImageRequested, false);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';

const english = JSON.parse(readFileSync(new URL('../public/locales/en/common.json', import.meta.url)));
const dutch = JSON.parse(readFileSync(new URL('../public/locales/nl/common.json', import.meta.url)));
const greek = JSON.parse(readFileSync(new URL('../public/locales/el/common.json', import.meta.url)));

test('every language exposes the same non-empty keys and interpolation variables', () => {
	for (const [locale, translations] of Object.entries({en: english, nl: dutch, el: greek})) {
		assert.deepEqual(Object.keys(translations).sort(), Object.keys(english).sort());
		for (const [key, value] of Object.entries(translations)) {
			assert.equal(typeof value, 'string', `${locale}: ${key} must be text`);
			assert.notEqual(value.trim(), '', `${locale}: ${key} must not be empty`);
			assert.deepEqual(value.match(/\{\{[^}]+\}\}/g) || [], english[key].match(/\{\{[^}]+\}\}/g) || [], `${locale}: ${key} interpolation variables must match`);
		}
	}
});

test('literal translation calls reference existing common keys', () => {
	const projectRoot = new URL('..', import.meta.url);
	const files = execFileSync(
		'rg',
		['--files', 'components', 'pages', '-g', '*.js', '-g', '*.jsx', '-g', '*.ts', '-g', '*.tsx'],
		{cwd: projectRoot, encoding: 'utf8'},
	).trim().split('\n');
	const missing = [];

	for (const file of files) {
		const source = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
		for (const match of source.matchAll(/\b(?:t|tCommon|translate)\(\s*["']([^"']+)["']/g)) {
			if (!(match[1] in english)) missing.push(`${file}: ${match[1]}`);
		}
	}

	assert.deepEqual(missing, []);
});

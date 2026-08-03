import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';

const english = JSON.parse(readFileSync(new URL('../public/locales/en/common.json', import.meta.url)));
const dutch = JSON.parse(readFileSync(new URL('../public/locales/nl/common.json', import.meta.url)));

test('English and Dutch expose the same non-empty translation keys', () => {
	assert.deepEqual(Object.keys(english).sort(), Object.keys(dutch).sort());

	for (const [key, value] of Object.entries(english)) {
		assert.equal(typeof value, 'string', `English translation ${key} must be text`);
		assert.notEqual(value.trim(), '', `English translation ${key} must not be empty`);
		assert.notEqual(dutch[key].trim(), '', `Dutch translation ${key} must not be empty`);
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

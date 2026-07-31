import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';
import test from 'node:test';

const diplomaFiles = [
	'HBO Associate Degree Software Development - EN.pdf',
	'HBO Bachelor Kunst en Economie (Art and Economics).pdf',
	'HBO Bachelor Kunst en Economie Propedeuse bachelor (Art and Economics).pdf',
	'Voorbereidend wetenschappelijk onderwijs (staatsexamen).pdf',
	'Hoger algemeen voortgezet onderwijs.pdf',
];

/** Reads a UTF-8 source file relative to the repository root. */
const readSource = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('private education documents are not publicly served or linked', () => {
	const resumeSource = readSource('components/page-components/ResumePage.jsx');

	for (const file of diplomaFiles) {
		assert.equal(existsSync(new URL(`../public/assets/${file}`, import.meta.url)), false);
		assert.equal(resumeSource.includes(file), false);
	}
});

test('commit metadata cannot spawn a process from a public API request', () => {
	assert.equal(existsSync(new URL('../pages/api/commit-date.js', import.meta.url)), false);
	assert.match(readSource('components/Commit.jsx'), /fetch\('\/commit-date\.json'/);
	assert.doesNotMatch(readSource('components/Commit.jsx'), /\/api\/commit-date/);
});

test('SSR loaders do not log complete request contexts', () => {
	for (const path of ['pages/index.jsx', 'pages/contact.jsx']) {
		const source = readSource(path);
		assert.doesNotMatch(source, /console\.(?:log|debug)\([^\n]*context/i);
	}
});

test('translated service descriptions avoid raw HTML injection', () => {
	assert.doesNotMatch(readSource('components/page-components/ServicesPage.jsx'), /dangerouslySetInnerHTML/);
});

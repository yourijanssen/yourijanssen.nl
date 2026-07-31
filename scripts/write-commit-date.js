const fs = require('fs');
const path = require('path');
const {execFileSync} = require('child_process');

const outputPath = path.join(process.cwd(), 'public', 'commit-date.json');

/** Reads the last commit timestamp once during the trusted build process. */
const getLastCommitDate = () => {
	try {
		return execFileSync('git', ['log', '-1', '--format=%cI'], {
			encoding: 'utf-8',
			stdio: ['ignore', 'pipe', 'pipe'],
		}).trim();
	} catch (error) {
		console.error('Error fetching last commit date:', error.message);
		return null;
	}
};

const commitDate = getLastCommitDate();
const data = `${JSON.stringify({commitDate}, null, 2)}\n`;

fs.writeFileSync(outputPath, data, 'utf8');

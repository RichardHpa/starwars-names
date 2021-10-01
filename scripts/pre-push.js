const { exec } = require('./exec')
const currentBranch = exec('git rev-parse --abbrev-ref HEAD')
const forbiddenBranches = ['main', 'master']
if (forbiddenBranches.includes(currentBranch.stdout.trim())) {
	console.log(
		`You're trying to push to the main or master branch for the project rather than a remote branch. Please create a separate branch to push your work to and create a Pull Request from there`
	)
	process.exit(1)
}

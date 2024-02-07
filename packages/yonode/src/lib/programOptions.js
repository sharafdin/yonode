import { program } from 'commander'

import { readFile } from 'fs/promises';
const pkg = JSON.parse(await readFile(new URL('../../package.json', import.meta.url)));

program
    .option('-v, --version', 'output the version number')

program.parse(process.argv);

const options = program.opts();

if (options.version) {
    console.log(pkg.version);
    process.exit(1)
}

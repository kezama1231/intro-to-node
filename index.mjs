import {copyFileSync,constants} from 'node:fs';

copyFileSync('file1.text', 'file2.text');
console.log('file2.text has been created and copied from file1.text');

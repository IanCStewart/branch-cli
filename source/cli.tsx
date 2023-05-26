#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import { App } from './app.js';

const cli = meow(
	`
	Usage
	  $ branch-cli

	Options
		--type, -t  The type of the branch
		--issue, -i  The issue of the branch

	Examples
	  $ branch-cli --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			type: {
				type: 'string',
				shortFlag: 't',
				choices: ['feature', 'release', 'hotfix', 'support'],
			},
			issue: {
				type: 'string',
				shortFlag: 'i',
			},
		},
	},
);

render(<App type={cli.flags.type} issue={cli.flags.issue} />);

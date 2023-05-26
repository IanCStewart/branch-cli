import React from 'react';
import type { FC } from 'react';
import { Box, Text } from 'ink';
import { TypeSelector } from './typeSelector.js';
import { IssueInput } from './issueInput.js';

export const InteractiveMode: FC = () => {
	return (
		<Box flexDirection="column" gap={1}>
			<Text color="magenta" dimColor>
				Interactive branch name generator...
			</Text>
			<TypeSelector />
			<IssueInput />
		</Box>
	);
};

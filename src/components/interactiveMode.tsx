import React from 'react';
import type { FC } from 'react';
import { Box, Text } from 'ink';
import { TypeSelector } from './typeSelector.js';

export const InteractiveMode: FC = () => {
	return (
		<Box flexDirection="column">
			<Text color="magenta" dimColor>
				Interactive branch name generator...
			</Text>
			<TypeSelector />
		</Box>
	);
};

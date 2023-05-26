import React from 'react';
import type { FC } from 'react';
import { Box, Text } from 'ink';
import { FlagsInput } from './flagsInput.js';
import { InteractiveMode } from './interactiveMode.js';

type Props = {
	type?: string;
	issue?: string;
	name?: string;
};

export const App: FC<Props> = ({ type, issue, name }) => {
	return (
		<Box gap={1} flexDirection="column">
			<Text>Hello there!</Text>
			{type || issue || name ? (
				<FlagsInput type={type} issue={issue} name={name} />
			) : (
				<InteractiveMode />
			)}
		</Box>
	);
};

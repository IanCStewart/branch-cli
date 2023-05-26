import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, Text } from 'ink';
import { Select } from '@inkjs/ui';

type Props = {
	focus: string;
	changeFocus: (value: 'type' | 'issue' | 'name' | 'done') => void;
	setOutput: (value: string | undefined) => void;
};

const TYPES = [
	{
		label: 'Feature',
		value: 'feature',
	},
	{
		label: 'Release',
		value: 'release',
	},
	{
		label: 'Hotfix',
		value: 'hotfix',
	},
	{
		label: 'Support',
		value: 'support',
	},
];

export const TypeSelector: FC<Props> = ({ focus, changeFocus, setOutput }) => {
	const [selectedType, setSelectedType] = useState<string | undefined>();

	const isFocused = focus === 'type';

	return (
		<Box flexDirection="column">
			<Text bold>Branch type?</Text>
			{isFocused && (
				<Select
					options={TYPES}
					onChange={value => {
						setSelectedType(value);
						setOutput(value);
						changeFocus('issue');
					}}
					isDisabled={!isFocused}
				/>
			)}
			{selectedType && (
				<Text>
					Branch type: <Text color="green">{selectedType}</Text>
				</Text>
			)}
		</Box>
	);
};

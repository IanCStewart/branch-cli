import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, Text, useFocus, useFocusManager } from 'ink';
import { Select } from '@inkjs/ui';

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

export const TypeSelector: FC = () => {
	const { focus } = useFocusManager();
	const { isFocused } = useFocus({ id: 'type' });

	const [selectedType, setSelectedType] = useState<string | undefined>();

	return (
		<Box flexDirection="column">
			<Text bold>Branch type?</Text>
			{isFocused && (
				<Select
					options={TYPES}
					onChange={value => {
						setSelectedType(value);
						focus('issue');
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

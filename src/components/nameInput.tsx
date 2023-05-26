import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, Text, useFocusManager, useFocus } from 'ink';
import { TextInput } from '@inkjs/ui';

export const NameInput: FC = () => {
	const { disableFocus } = useFocusManager();
	const { isFocused } = useFocus({ id: 'name' });

	const [value, setValue] = useState<string | undefined>();
	const [submitted, setSubmitted] = useState<boolean>(false);

	return (
		<Box flexDirection="column">
			<Text bold>What are you working on?</Text>
			{isFocused && (
				<TextInput
					placeholder="my-awesome-feature"
					onChange={setValue}
					onSubmit={() => {
						setSubmitted(true);
						disableFocus();
					}}
					isDisabled={!isFocused}
				/>
			)}
			{submitted && (
				<Text>
					Branch name: <Text color="green">{value}</Text>
				</Text>
			)}
		</Box>
	);
};

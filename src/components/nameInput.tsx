import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, Text } from 'ink';
import { TextInput } from '@inkjs/ui';

type Props = {
	focus: string;
	changeFocus: (value: 'type' | 'issue' | 'name' | 'done') => void;
	setOutput: (value: string | undefined) => void;
};

export const NameInput: FC<Props> = ({ focus, changeFocus, setOutput }) => {
	const [value, setValue] = useState<string | undefined>();
	const [submitted, setSubmitted] = useState<boolean>(false);

	const isFocused = focus === 'name';

	return (
		<Box flexDirection="column">
			<Text bold>What are you working on?</Text>
			{isFocused && (
				<TextInput
					placeholder="my-awesome-feature"
					isDisabled={!isFocused}
					onChange={setValue}
					onSubmit={() => {
						setSubmitted(true);
						setOutput(value);
						changeFocus('done');
					}}
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

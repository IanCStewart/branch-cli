import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, Text } from 'ink';
import { TextInput } from '@inkjs/ui';

type Props = {
	focus: string;
	changeFocus: (value: 'type' | 'issue' | 'name' | 'done') => void;
	setOutput: (value: string | undefined) => void;
};

export const IssueInput: FC<Props> = ({ focus, changeFocus, setOutput }) => {
	const [value, setValue] = useState<string | undefined>();
	const [submitted, setSubmitted] = useState<boolean>(false);

	const isFocused = focus === 'issue';

	return (
		<Box flexDirection="column">
			<Text bold>Issue Number?</Text>
			{isFocused && (
				<TextInput
					placeholder="issue-#"
					onChange={setValue}
					onSubmit={() => {
						setSubmitted(true);
						setOutput(value);
						changeFocus('name');
					}}
					isDisabled={!isFocused}
				/>
			)}
			{submitted && (
				<Text>
					Issue number: <Text color="green">{value}</Text>
				</Text>
			)}
		</Box>
	);
};

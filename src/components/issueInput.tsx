import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, Text, useFocusManager, useFocus } from 'ink';
import { TextInput } from '@inkjs/ui';

export const IssueInput: FC = () => {
	const { focus } = useFocusManager();
	const { isFocused } = useFocus({ id: 'issue' });

	const [value, setValue] = useState<string | undefined>();
	const [submitted, setSubmitted] = useState<boolean>(false);

	return (
		<Box flexDirection="column">
			<Text bold>Issue Number?</Text>
			{isFocused && (
				<TextInput
					placeholder="issue-#"
					onChange={setValue}
					onSubmit={() => {
						setSubmitted(true);
						focus('name');
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

import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, Text } from 'ink';
import { TextInput } from '@inkjs/ui';

export const IssueInput: FC = () => {
	const [value, setValue] = useState<string | undefined>();
	const [submitted, setSubmitted] = useState<boolean>(false);

	return (
		<Box flexDirection="column">
			<Text bold>Issue Number?</Text>
			{!submitted && (
				<TextInput
					placeholder="issue-#"
					onChange={setValue}
					onSubmit={() => setSubmitted(true)}
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

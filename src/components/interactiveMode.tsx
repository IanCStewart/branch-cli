import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, Text } from 'ink';
import { StatusMessage, ConfirmInput } from '@inkjs/ui';
import { TypeSelector } from './typeSelector.js';
import { IssueInput } from './issueInput.js';
import { NameInput } from './nameInput.js';

export const InteractiveMode: FC = () => {
	const [focus, setFocus] = useState<'type' | 'issue' | 'name' | 'done'>(
		'type',
	);
	const [typeOutput, setTypeOutput] = useState<string | undefined>();
	const [issueOutput, setIssueOutput] = useState<string | undefined>();
	const [nameOutput, setNameOutput] = useState<string | undefined>();
	const [choice, setChoice] = useState<'y' | 'n' | undefined>();

	return (
		<Box flexDirection="column" gap={1}>
			<Text dimColor color="magenta">
				Interactive branch name generator...
			</Text>
			<TypeSelector
				focus={focus}
				changeFocus={setFocus}
				setOutput={setTypeOutput}
			/>
			<IssueInput
				focus={focus}
				changeFocus={setFocus}
				setOutput={setIssueOutput}
			/>
			<NameInput
				focus={focus}
				changeFocus={setFocus}
				setOutput={setNameOutput}
			/>
			{focus === 'done' && (
				<>
					<StatusMessage variant="info">
						<Text color="blue">
							A branch with the following name wil be made:{' '}
							{`${typeOutput ? `${typeOutput}/` : ''}${
								issueOutput ? `${issueOutput}/` : ''
							}${nameOutput ?? ''}`}
						</Text>
					</StatusMessage>
					{!choice && (
						<Box gap={1}>
							<Text bold>Do you agree with the input?</Text>
							<ConfirmInput
								onConfirm={() => {
									setChoice('y');
								}}
								onCancel={() => {
									setChoice('n');
								}}
							/>
						</Box>
					)}
					{choice === 'y' && <Text color="green">User confirmed input</Text>}
					{choice === 'n' && <Text color="red">User canceled input</Text>}
				</>
			)}
		</Box>
	);
};

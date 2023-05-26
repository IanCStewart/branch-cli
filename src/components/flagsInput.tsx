import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, Text, Newline } from 'ink';
import { StatusMessage, ConfirmInput } from '@inkjs/ui';

type Props = {
	type?: string;
	issue?: string;
	name?: string;
};

export const FlagsInput: FC<Props> = ({ type, issue, name }) => {
	const [choice, setChoice] = useState<'y' | 'n' | undefined>();

	return (
		<Box gap={1} flexDirection="column">
			<Text>
				{type && (
					<>
						<Text>
							Branch type: <Text color="green">{type}</Text>
						</Text>
					</>
				)}
				{issue && (
					<>
						{type && <Newline />}
						<Text>
							Issue number: <Text color="green">{issue}</Text>
						</Text>
					</>
				)}
				{name && (
					<>
						{(type || issue) && <Newline />}
						<Text>
							Branch name: <Text color="green">{name}</Text>
						</Text>
					</>
				)}
			</Text>
			<StatusMessage variant="info">
				<Text color="blue">
					A branch with the following name wil be made:{' '}
					{`${type ? `${type}/` : ''}${issue ? `${issue}/` : ''}${name}`}
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
		</Box>
	);
};

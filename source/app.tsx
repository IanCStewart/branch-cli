import React from 'react';
import type { FC } from 'react';
import { Newline, Text } from 'ink';

type Props = {
	type?: string;
	issue?: string;
	name?: string;
};

export const App: FC<Props> = ({ type, issue, name }) => (
	<Text>
		<Text>Hello there!</Text>
		{type && (
			<>
				<Newline />
				<Text>
					Branch type: <Text color="green">{type}</Text>
				</Text>
			</>
		)}
		{issue && (
			<>
				<Newline />
				<Text>
					Issue number: <Text color="green">{issue}</Text>
				</Text>
			</>
		)}
		{name && (
			<>
				<Newline />
				<Text>
					Branch name: <Text color="green">{name}</Text>
				</Text>
			</>
		)}
	</Text>
);

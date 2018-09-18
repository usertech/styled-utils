import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'components/GlobalStyle';
import ComponentExample from 'components/ComponentExample';
import theme from 'stylesheets/theme';
import OldButton from 'components/OldButton';
import NewButton from 'components/NewButton';

const ButtonExampleScreen = () => (
	<div>
		<ThemeProvider theme={theme}>
			<div>
				<GlobalStyle />
				<div>
					<ComponentExample>
						<OldButton foo={{ foo: 'bar' }}>Old Button</OldButton>
					</ComponentExample>
					<ComponentExample>
						<OldButton small>Old Button</OldButton>
					</ComponentExample>
					<ComponentExample>
						<OldButton medium>Old Button</OldButton>
					</ComponentExample>
					<ComponentExample>
						<OldButton large>Old Button</OldButton>
					</ComponentExample>
					<ComponentExample>
						<OldButton busy>Old Button</OldButton>
					</ComponentExample>
				</div>
				<div>
					<ComponentExample>
						<NewButton>New Button</NewButton>
					</ComponentExample>
					<ComponentExample>
						<NewButton small>New Button</NewButton>
					</ComponentExample>
					<ComponentExample>
						<NewButton medium>New Button</NewButton>
					</ComponentExample>
					<ComponentExample>
						<NewButton large>New Button</NewButton>
					</ComponentExample>
					<ComponentExample>
						<NewButton busy>New Button</NewButton>
					</ComponentExample>
				</div>
			</div>
		</ThemeProvider>
	</div>
);

export default ButtonExampleScreen;

import React from 'react';
import ComponentExample from 'components/ComponentExample';

import { sget, scomp } from '@usertech/styled-utils';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import smap from 'styled-map';
import sis from 'styled-is';
import { lighten, saturate } from 'polished';

const fontSize = smap`
	default: 1em;
	styleH1: 2.2em;
	styleH2: 1.6em;
	styleH3: 1.2em;
`;

const Text = styled.span`
	color: ${sget('theme.COLOR_PRIMARY', 'green', scomp(lighten(0.1), saturate(0.8)))};
	font-size: ${fontSize};
	color: ${sis('fuStyle')`lime`};
	i {
		font-weight: 800;
	}
`;

const FuText = styled(Text)`
	color: pink;
`;

const H1 = styled(Text);
H1.defaultProps = { as: 'h1' };

const DemoScreen = () => {
	return (
		<div>
			<ThemeProvider theme={{ COLOR_PRIMARY: 'salmon' }}>
				<div>
					<GS />
					<ComponentExample>
						<div>
							<div>I&apos;m a component</div>
							<Text styleH1>
								<i>foo</i>
							</Text>
							<Text styleH2>foo</Text>
							<Text styleH3>foo</Text>
							<Text styleSmall>foo</Text>
							<FuText>foo</FuText>
						</div>
					</ComponentExample>
				</div>
			</ThemeProvider>
		</div>
	);
};

export default DemoScreen;

/*















 */

const GS = createGlobalStyle`
	html {
		font-size: 70px;
	}
`;

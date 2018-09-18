import { withProps } from 'recompose';
import styled from 'styled-components';
import styledMap from 'styled-map';
import is from 'styled-is';

const fontSize = styledMap`
	default: 14px;
	styleH1: 24px;
	styleH2: 20px;
	styleH3: 18px;
	styleH4: 16px;
	styleSmaller: 13px;
`;

const lineHeight = styledMap`
	default: 18px;
	styleH1: 32px;
	styleH2: 28px;
	styleH3: 28px;
	styleH4: 24px;
`;

const fontWeight = styledMap`
	default: 400;
	styleH1: 500;
	styleH2: 500;
	styleH3: 500;
	styleH4: 500;
	styleSmaller: 400;
`;

const color = styledMap`
	default: #737979;
	styleH1: #374040;
	styleH2: #374040;
	styleH3: #374040;
	styleH3: #374040;
	styleH4: #374040;
	styleSmaller: #737979;
`;

const Text = styled.span`
	font-size: ${fontSize};
	line-height: ${lineHeight};
	font-weight: ${fontWeight};
	color: ${color};
	text-align: ${is('centered')`center`};
	text-transform: ${is('uppercased')`uppercase`};
	text-align: ${is('justified')`justify`};
`;

export default Text;

const Paragraph = withProps({ as: 'p' })(Text);
Paragraph.displayName = 'Paragraph';
const H1 = withProps({ as: 'h1', styleH1: true })(Text);
H1.displayName = 'H1';
const H2 = withProps({ as: 'h2', styleH2: true })(Text);
H2.displayName = 'H2';
const H3 = withProps({ as: 'h3', styleH3: true })(Text);
H3.displayName = 'H3';
const H4 = withProps({ as: 'h4', styleH4: true })(Text);
H4.displayName = 'H4';
const H5 = withProps({ as: 'h5', styleH5: true })(Text);
H5.displayName = 'H5';

const EffedUpText = styled(Text)`
	color: lightsalmon;
	letter-spacing: 24px;
	font-weight: 100;
`;

export { Paragraph, H1, H2, H3, H4, H5, EffedUpText };

import styled from 'styled-components';
import { lighten, desaturate } from 'polished';
import styledMap from 'styled-map';
import sis from 'styled-is';
import { sget } from '@usertech/styled-utils';

const fontSize = styledMap`
	default: ${sget('theme.DEFAULT_BUTTON_FONT_SIZE')}px;
	small: 10px;
	medium: 20px;
	large: 30px;
`;

const NewButton = styled.button`
	color: white;
	background-color: ${sget('theme.COLOR_PRIMARY', 'black')};
	background-color: ${sis('busy')`${sget('theme.COLOR_PRIMARY', 'black', desaturate(0.3))}`};
	font-size: ${fontSize};
	:hover {
		background-color: ${sget('theme.COLOR_PRIMARY', 'black', lighten(0.2))};
	}
`;

NewButton.displayName = 'NewButton';

export default NewButton;

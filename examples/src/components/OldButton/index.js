import styled from 'styled-components';
import { lighten, desaturate } from 'polished';

const OldButton = styled.button`
	color: white;
	background-color: ${({ theme: { COLOR_PRIMARY = 'black' } }) => COLOR_PRIMARY};
	background-color: ${({ busy, theme: { COLOR_PRIMARY = 'black' } }) =>
		busy && desaturate(0.3, COLOR_PRIMARY)};
	font-size: ${({ small, medium, large, theme: { DEFAULT_BUTTON_FONT_SIZE } }) =>
		(small && 10) || (medium && 20) || (large && 30) || DEFAULT_BUTTON_FONT_SIZE}px;
	:hover {
		background-color: ${({ theme: { COLOR_PRIMARY = 'gray' } }) => lighten(0.2, COLOR_PRIMARY)};
	}
`;

OldButton.displayName = 'OldButton';

export default OldButton;

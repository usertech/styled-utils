import styled from 'styled-components';
import styledMap from 'styled-map';

const avatarSize = styledMap`
	default: 40px;
	small: 32px;
`;

const Wrapper = styled.div`
	display: block;
	position: relative;
	width: ${avatarSize};
	height: ${avatarSize};
	:after {
		border-radius: 50%;
		border: 1px solid rgba(0, 0, 0, 0.1);
		bottom: 0;
		content: '';
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}
`;
const Image = styled.img`
	border-radius: 50%;
	overflow: hidden;
	width: ${avatarSize};
	height: ${avatarSize};
`;

const Avatar = ({ id = 'John Doe', small }) => (
	<Wrapper small={small}>
		<Image
			small={small}
			src={`http://tinygraphs.com/labs/isogrids/hexa16/${id}?numcolors=4&size=100&fmt=svg`}
			alt={id}
		/>
	</Wrapper>
);

export default Avatar;

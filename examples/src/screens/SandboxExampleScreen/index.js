import React from 'react';
import { withStateHandlers } from 'recompose';

import styled, { css, ThemeProvider } from 'styled-components';
import Flex, { FlexItem } from 'styled-flex-component';
import styledMap from 'styled-map';

import Text, { H1, Paragraph, EffedUpText } from 'components/Text';

import GlobalStyle from 'components/GlobalStyle';
import ComponentExample from 'components/ComponentExample';

const theme = {
	COLOR_PRIMARY: 'green',
};

const PostWrapper = styled.div`
	border: 1px solid #ccc;
	padding: 12px;
`;

const squareMixin = (size) => {
	return css`
		width: ${size}px;
		height: ${size}px;
	`;
};

const PostAvatar = styled.img.attrs({
	src: ({ size }) => `http://placehold.it/${size}x${size}`,
	width: ({ size }) => size,
	height: ({ size }) => size,
})`
	${({ size }) => squareMixin(size)};
	border-radius: 50%;
`;
PostAvatar.defaultProps = { size: 40 };
const PostAuthor = styled.div``;
const PostMeta = styled.div``;
const PostContent = styled.div``;

const reactions = {
	like: 'like',
	haha: 'haha',
	angry: 'angry',
	sad: 'sad',
	wow: 'wow',
};

const postReactionColor = styledMap`
	default: blue;
	haha: yellow;
	angry: red;
	sad: lightblue;
	wow: orange;
`;

const PostReaction = styled.div`
	${squareMixin(30)};
	background-color: ${postReactionColor};
`;

const PostReactionButton = styled.span`
	display: inline-block;
	${squareMixin(30)};
	background-color: ${postReactionColor};
`;

const SandboxExampleScreen = withStateHandlers(
	{ reaction: null },
	{ handleReaction: () => () => ({ reaction: reactions.like }) },
)((props) => {
	const { reaction, handleReaction } = props;
	return (
		<div>
			<ThemeProvider theme={theme}>
				<div>
					<GlobalStyle />
					<ComponentExample>
						<div>
							<H1 styleH2>Whoops!</H1>
							<Paragraph justified>
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
								sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
								natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer
								posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus
								ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
								risus. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare
								sem lacinia quam venenatis vestibulum.
							</Paragraph>
							<Paragraph centered styleSmaller>
								Lorem Ipsum
							</Paragraph>
						</div>
					</ComponentExample>
					<ComponentExample>
						<Text>sample text</Text>
					</ComponentExample>
					<ComponentExample>
						<div>
							<H1>sample text</H1>
							<H1 styleH1>sample text</H1>
							<EffedUpText>aesthetics</EffedUpText>
							<EffedUpText as="p" centered uppercased>
								aesthetics
							</EffedUpText>
						</div>
					</ComponentExample>
					<ComponentExample>
						<H1 styleH2>sample text</H1>
					</ComponentExample>
					<ComponentExample>
						<H1 styleH3>sample text</H1>
					</ComponentExample>
					<ComponentExample>
						<H1 styleH4>sample text</H1>
					</ComponentExample>
					<ComponentExample>
						<Paragraph>sample text</Paragraph>
					</ComponentExample>
					<ComponentExample>
						<Paragraph styleSmaller>sample text</Paragraph>
					</ComponentExample>
					<ComponentExample hidden>
						<PostWrapper>
							<Flex full>
								<FlexItem>
									<PostAvatar size={40} />
								</FlexItem>
								<FlexItem>
									<PostAuthor>John Doe</PostAuthor>
									<PostMeta>30mins</PostMeta>
								</FlexItem>
							</Flex>
							<PostContent>my post content</PostContent>
							{!!reaction && <PostReaction reaction={reaction} />}
							<div>
								<PostReactionButton onClick={handleReaction} like />
								<PostReactionButton onClick={handleReaction} haha />
								<PostReactionButton onClick={handleReaction} angry />
								<PostReactionButton onClick={handleReaction} sad />
								<PostReactionButton onClick={handleReaction} wow />
							</div>
						</PostWrapper>
					</ComponentExample>
				</div>
			</ThemeProvider>
		</div>
	);
});

export default SandboxExampleScreen;

import styled from 'styled-components';
import Flex, { FlexItem } from 'styled-flex-component';
import { saturate, lighten } from 'polished';
import styledMap from 'styled-map';
import sis from 'styled-is';
import { sget, scomp } from '@usertech/styled-utils';

import Comment from 'components/Comment';
import Avatar from 'components/Avatar';

const textLinkColor = styledMap`
	default: ${sget('theme.COLOR_PRIMARY', 'black')};
	muted: ${sget('theme.COLOR_MUTED', 'gray')};
`;

const TextLink = styled.a`
	cursor: pointer;
	color: ${textLinkColor};
	:hover {
		text-decoration: underline;
	}
`;

const Wrapper = styled.div`
	border: 1px solid ${sget('theme.COLOR_BORDER')};
	border: ${sis('isLiked')`1px dashed ${sget('theme.COLOR_BORDER')}`};
	//border: ${sget('theme.Post.Wrapper.border')};
	border-radius: 3px;
	background-color: #fff;
	background: ${sis('isLiked')`gray`};
`;

const Header = styled.div`
	padding: 12px 12px 0;
`;
const AvatarWrapper = styled.a`
	position: relative;
	display: block;
	padding-bottom: 3px;
	margin-right: 8px;
`;
const AuthorName = styled.div`
	font-weight: 600;
	font-size: 14px;
	margin-bottom: 2px;
`;
const Meta = styled.div`
	color: #616770;
	font-size: 12px;
`;
const MenuDots = styled.div`
	background-image: url(https://facebook.com/rsrc.php/v3/yo/r/rOTo62hIDUn.png);
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -123px;
	width: 20px;
	height: 20px;
	:hover {
		cursor: pointer;
		background-position: -21px -123px;
	}
`;
const Content = styled.div``;
const ContentText = styled.div`
	margin-top: 6px;
	padding: 0 12px 8px 12px;
	font-size: 14px;
	font-weight: normal;
	line-height: 1.38;
`;
const ContentImage = styled.img`
	max-width: 100%;
	height: ${sget('height')}px;
`;
const CommentsSwitch = styled.div`
	text-align: right;
	border-bottom: 1px solid #e5e5e5;
	padding-bottom: 10px;
	line-height: 20px;
	margin: 10px 12px 0 12px;
`;
const CommentsSection = styled.div`
	border-top: 1px solid #e1e2e3;
	padding-top: 4px;
`;
const ActionSection = styled.div`
	padding-bottom: 4px;
	padding-top: 4px;
	margin: 0 12px;
`;

const alternatePrimaryColorModifier = scomp(saturate(0.5), lighten(0.1));
const ActionButton = styled.button`
	border: none;
	text-align: center;
	display: block;
	width: 100%;
	height: 32px;
	background: none;
	cursor: pointer;
	color: #616770;
	//color: ${sis('isEnabled')`${alternatePrimaryColorModifier('#365899')}`};
	color: ${sis('isEnabled')`${sget(
		'theme.Post.ActionButton.color',
		'#000',
		alternatePrimaryColorModifier,
	)}`};
	font-size: 13px;
	font-weight: 600;
	:hover {
		background-color: rgba(29, 33, 41, 0.04);
	}
	:focus {
		outline: none;
	}
`;

const Post = (props) => {
	const {
		author,
		content,
		image: { height },
		comments,
		areCommentsOpen,
		onToggleComments,
		isLiked,
		onToggleLike,
	} = props;
	return (
		<Wrapper isLiked={isLiked}>
			<Header>
				<Flex full>
					<FlexItem>
						<AvatarWrapper>
							<Avatar id={author} />
						</AvatarWrapper>
					</FlexItem>
					<FlexItem grow={1}>
						<AuthorName>
							<TextLink>{author}</TextLink>
						</AuthorName>
						<Meta>1 hr</Meta>
					</FlexItem>
					<FlexItem>
						<MenuDots />
					</FlexItem>
				</Flex>
			</Header>
			<Content>
				<ContentText>{content}</ContentText>
				<ContentImage
					width="514"
					height={height}
					// src={`https://placehold.it/514x${height}?text=${content}`}
					src={`https://picsum.photos/514/${height}?image=1043`}
					alt="Shenako Village"
				/>
			</Content>
			<CommentsSwitch>
				<TextLink muted onClick={onToggleComments}>
					{comments.length} Comments
				</TextLink>
			</CommentsSwitch>
			<ActionSection>
				<Flex full>
					<FlexItem grow={1}>
						<ActionButton onClick={onToggleLike} isEnabled={isLiked}>
							Like
						</ActionButton>
					</FlexItem>
					<FlexItem grow={1}>
						<ActionButton>Share</ActionButton>
					</FlexItem>
				</Flex>
			</ActionSection>
			{areCommentsOpen && (
				<CommentsSection>
					{comments.map((comment) => (
						<Comment key={comment.id} {...comment} />
					))}
				</CommentsSection>
			)}
		</Wrapper>
	);
};

export default Post;

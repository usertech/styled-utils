import styled from 'styled-components';
import Flex, { FlexItem } from 'styled-flex-component';
import { sget } from '@usertech/styled-utils';

import Avatar from 'components/Avatar';

const Wrapper = styled.div`
	margin: 0 12px;
	padding: 4px 0;
`;
const RightSection = styled.div`
	padding-left: 6px;
`;
const Content = styled.div`
	background-color: #eff1f3;
	padding: 8px 10px;
	border-radius: 18px;
	display: block;
	line-height: 16px;
	font-size: 13px;
`;
const Meta = styled.div`
	padding-top: 3px;
	font-size: 12px;
	line-height: 12px;
	margin-bottom: 3px;
	margin-left: 10px;
`;
const MetaLink = styled.span``;
const AuthorLink = styled.a`
	font-weight: 600;
	cursor: pointer;
	color: ${sget('theme.Comment.AuthorLink.color')};
	:hover {
		text-decoration: underline;
	}
`;

const Comment = ({ author, content }) => (
	<Wrapper>
		<Flex full>
			<FlexItem>
				<Avatar id={author} small />
			</FlexItem>
			<FlexItem grow={1}>
				<RightSection>
					<Flex>
						<FlexItem>
							<Content>
								<AuthorLink>{author}</AuthorLink>
								&nbsp;
								<span>{content}</span>
							</Content>
						</FlexItem>
					</Flex>
					<Meta>
						<MetaLink>Like</MetaLink>
						&nbsp;·&nbsp;
						<MetaLink>Reply</MetaLink>
						&nbsp;·&nbsp; 19m
					</Meta>
				</RightSection>
			</FlexItem>
		</Flex>
	</Wrapper>
);

export default Comment;

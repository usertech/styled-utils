import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Prism from 'prismjs';
import prismStyle from '!!raw-loader!prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx';
import styled from 'styled-components';
import is from 'styled-is';
import Flex, { FlexItem } from 'styled-flex-component';

const Wrapper = styled.div`
	border: 1px solid #ccc;
	display: ${is('hidden')`none`};
`;

const Code = styled.pre`
	font-size: 1em;
	margin: 0;
	padding: 12px;
	word-break: break-word;
	white-space: pre-wrap;
	* {
		${prismStyle};
	}
`;

const Content = styled.div`
	padding: 12px;
`;

const ComponentExample = ({ label, children }) => {
	return (
		<Wrapper>
			{!!label && <div>label</div>}
			<Flex full>
				<FlexItem grow={1} basis="50%">
					<Code
						dangerouslySetInnerHTML={{
							__html: Prism.highlight(
								reactElementToJSXString(children, {
									sortProps: false,
									useFragmentShortSyntax: false,
									functionValue: () => 'fn',
								}),
								Prism.languages.jsx,
								'jsx',
							),
						}}
					/>
				</FlexItem>
				<FlexItem grow={1} basis="50%">
					<Content>{children}</Content>
				</FlexItem>
			</Flex>
		</Wrapper>
	);
};

export default ComponentExample;

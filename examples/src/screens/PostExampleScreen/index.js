import React from 'react';
import { ThemeProvider } from 'styled-components';

import withPostState from 'decorators/withPostState';
import Post from 'components/Post';
import theme from 'stylesheets/theme';
import GlobalStyle from 'components/GlobalStyle';

const StatefulPost = withPostState(Post);

const post = {
	author: 'Jiri Brabec',
	content: 'Shenako Village',
};

const PostExampleScreen = () => (
	<div>
		<ThemeProvider theme={theme}>
			<div style={{ maxWidth: '516px' }}>
				<GlobalStyle />
				<h1>Posts</h1>
				<StatefulPost {...post} />
			</div>
		</ThemeProvider>
	</div>
);

export default PostExampleScreen;

import { compose, pure, withStateHandlers } from 'recompose';

const withPostState = compose(
	pure,
	withStateHandlers(
		({ author, content, isLiked }) => {
			return {
				author: author || 'Author Name',
				content: content || 'Some content.',
				image: {
					height: 400,
				},
				isLiked: isLiked !== undefined ? isLiked : false,
				areCommentsOpen: true,
				comments: [
					{
						id: '1',
						author: 'John Doe',
						content:
							'Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
					},
					{
						id: '2',
						author: 'Jiri Brabec',
						content:
							'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper.',
					},
					{
						id: '3',
						author: 'Franta Toman',
						content:
							'Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
					},
					{
						id: '4',
						author: 'Franta Toman',
						content: 'Zatraceně',
					},
				],
			};
		},
		{
			onToggleComments: ({ areCommentsOpen }) => () => {
				return { areCommentsOpen: !areCommentsOpen };
			},
			onToggleLike: ({ isLiked }) => () => {
				return { isLiked: !isLiked };
			},
		},
	),
);

export default withPostState;

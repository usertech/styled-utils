const DEFAULT_BUTTON_FONT_SIZE = 14;
const COLOR_PRIMARY = '#365899';
// const COLOR_PRIMARY = '#019900';
const COLOR_MUTED = '#606770';
const COLOR_BORDER = '#dddfe2';

export default {
	DEFAULT_BUTTON_FONT_SIZE,
	COLOR_PRIMARY,
	COLOR_MUTED,
	COLOR_BORDER,

	Post: {
		Wrapper: {
			border: `1px solid ${COLOR_BORDER}`,
		},
		ActionButton: {
			color: COLOR_PRIMARY,
		},
	},
	Comment: {
		AuthorLink: {
			color: COLOR_PRIMARY,
		},
	},
};

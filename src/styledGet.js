import get from 'lodash.get';
import identity from 'lodash.identity';

const prop = (path, modifierOrDefaultValue, modifierParam = identity) => {
	let modifier = modifierParam;
	let defaultValue = modifierOrDefaultValue;
	if (typeof modifierOrDefaultValue === 'function') {
		modifier = modifierOrDefaultValue;
		defaultValue = undefined;
	}
	return (props) => {
		const value = get(props, path, defaultValue);
		if (!value) {
			return value;
		}
		return modifier(value);
	};
};

export default prop;

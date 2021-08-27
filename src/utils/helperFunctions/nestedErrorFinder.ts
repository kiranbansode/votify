import { FieldErrors } from 'react-hook-form';

const nestedErrorFinder = (fieldName: string, errorsObject: FieldErrors) => {
	const names: string[] = fieldName.split('.');
	let error;
	switch (names.length) {
		case 2:
			error = errorsObject[names[1]]?.message;
			break;

		case 3:
			error = errorsObject[names[2]]?.message;
			break;

		default:
			error = null;
			break;
	}

	return error;
};

export default nestedErrorFinder;

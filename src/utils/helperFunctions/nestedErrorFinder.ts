/*
	Author : Kiran Ashok Bansode
	ErrorObject = address.country.state.city
------------------------------------------------------------
*	array lenght:		1			2			3		4
					['address', 'country',   'state', 'city']
!	array index :		0			1			2		3
------------------------------------------------------------
*/

import { FieldErrors } from 'react-hook-form';

const nestedErrorFinder = (fieldName: string, errorsObject: FieldErrors) => {
	const names: string[] = fieldName.split('.');
	let error;
	switch (names.length) {
		// Error Level - country
		case 2:
			error = errorsObject[names[1]]?.message;
			break;
		// Error Level - state
		case 3:
			error = errorsObject[names[2]]?.message;
			break;
		// Error Level - city
		case 4:
			error = errorsObject[names[3]]?.message;
			break;

		default:
			error = 'Unknown Error';
			break;
	}

	return error;
};

export default nestedErrorFinder;

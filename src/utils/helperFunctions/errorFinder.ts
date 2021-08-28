/*
	Author : Kiran Ashok Bansode
	Ex:- ErrorObject = address.country.state.city
------------------------------------------------------------
*	array lenght:		1			2			3		4
					['address', 'country',   'state', 'city']
!	array index :		0			1			2		3
------------------------------------------------------------
*/

import { FieldErrors } from 'react-hook-form';

const errorFinder = (fieldName: string, errorsObject: FieldErrors) => {
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

		// Error Level - address
		default:
			error = errorsObject[names[0]]?.message;
			break;
	}

	return error;
};

export default errorFinder;

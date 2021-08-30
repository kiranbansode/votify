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

	if (names.length === 2) {
		error = errorsObject[names[0]]?.[names[1]]?.message;
	} else if (names.length === 3) {
		error = errorsObject[names[0]]?.[names[1]]?.[names[2]]?.message;
	} else if (names.length === 4) {
		error = errorsObject[names[0]]?.[names[1]]?.[names[2]]?.[names[3]]?.message;
	} else if (names.length === 5) {
		error = errorsObject[names[0]]?.[names[1]]?.[names[2]]?.[names[3]]?.[names[4]]?.message;
	} else {
		error = errorsObject[names[0]]?.message;
	}

	return error;
};

export default errorFinder;

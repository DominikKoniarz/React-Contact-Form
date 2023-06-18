const validate = (values) => {
	const errors = {};

	if (!values.firstname) errors.firstname = "Required";
	else if (values.firstname.length > 15)
		errors.firstname = "Firstname must be 15 characters or less";

	if (!values.lastname) errors.lastname = "Required";
	else if (values.lastname.length > 15)
		errors.lastname = "Lastname must be 15 characters or less";

	if (!values.email) errors.email = "Required";
	else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
		errors.email = "Invalid email address";

	if (!values.phonenumber) errors.phonenumber = "Required";
	else if (
		!/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
			values.phonenumber
		)
	)
		errors.phonenumber = "Invalid phone number";

	if (!values.message) errors.message = "Required";
	else if (values.message.length < 30)
		errors.message = "Message must be at least 30 characters";

	console.log(errors);
	// console.log(Object.values(errors).length);

	return errors;
};

export default validate;

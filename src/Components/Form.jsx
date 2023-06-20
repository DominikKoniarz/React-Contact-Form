import { useFormik } from "formik";
import validate from "./validate";

const Form = () => {
	const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
		useFormik({
			initialValues: {
				firstname: "",
				lastname: "",
				email: "",
				phonenumber: "",
				message: "",
			},
			onSubmit: (values) => console.log(values),
			validate,
		});

	return (
		<section className="m-4 min-w-[200px] bg-white p-10 font-['Roboto'] sm:max-w-xl sm:p-12">
			<h2 className=" mx-auto w-fit text-center text-3xl font-bold text-teal-500 sm:text-4xl">
				React Contact Form
			</h2>
			<form
				autoComplete="off"
				name="contact-form"
				onSubmit={handleSubmit}
				className="flex flex-col gap-5 text-xl text-black "
			>
				<div className="mt-8 flex flex-col gap-5 sm:flex-row sm:gap-6">
					<div className="flex flex-col">
						<label htmlFor="firstname" className="absolute -left-[99999px]">
							Firstname
						</label>
						<input
							id="firstname"
							name="firstname"
							type="text"
							placeholder="First Name"
							className={`w-full border-b-2 placeholder-[#555] outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150 sm:min-w-[200px]`}
							value={values.firstname}
							onChange={handleChange}
							onBlur={handleBlur}
							size="5"
						/>
						{touched.firstname && errors.firstname ? (
							<div className="text-xs text-red-500">{errors.firstname}</div>
						) : null}
					</div>
					<div className="flex flex-col">
						<label htmlFor="lastname" className="absolute -left-[99999px]">
							Lastname
						</label>
						<input
							id="lastname"
							name="lastname"
							type="text"
							placeholder="Last Name"
							className="w-full border-b-2 placeholder-[#555] outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150 sm:min-w-[200px]"
							value={values.lastname}
							onChange={handleChange}
							onBlur={handleBlur}
							size="5"
						/>
						{touched.lastname && errors.lastname ? (
							<div className="text-xs text-red-500">{errors.lastname}</div>
						) : null}
					</div>
				</div>
				<div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
					<div className="flex flex-col">
						<label htmlFor="email" className="absolute -left-[99999px]">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Email Address"
							className="w-full border-b-2 placeholder-[#555] outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150 sm:min-w-[200px]"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							size="5"
						/>
						{touched.email && errors.email ? (
							<div className="text-xs text-red-500">{errors.email}</div>
						) : null}
					</div>
					<div className="flex flex-col">
						<label htmlFor="phonenumber" className="absolute -left-[99999px]">
							Phone Number
						</label>
						<input
							id="phonenumber"
							name="phonenumber"
							type="text"
							placeholder="Phone Number"
							className="w-full border-b-2 placeholder-[#555] outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150 sm:min-w-[200px]"
							value={values.phonenumber}
							onChange={handleChange}
							onBlur={handleBlur}
							size="5"
						/>
						{touched.phonenumber && errors.phonenumber ? (
							<div className="text-xs text-red-500">{errors.phonenumber}</div>
						) : null}
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message" className="absolute -left-[99999px]">
						Your Message:
					</label>
					<textarea
						name="message"
						id="message"
						placeholder="Your Message"
						rows="1"
						className="border-b-2 placeholder-[#555] outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150 sm:min-w-[200px]"
						value={values.message}
						onChange={handleChange}
						onBlur={handleBlur}
						cols="1"
					></textarea>
					{touched.message && errors.message ? (
						<div className="text-xs text-red-500">{errors.message}</div>
					) : null}
				</div>
				<button
					type="submit"
					className={`text-bold ml-auto mt-4 bg-teal-500 px-6 py-3 text-white active:scale-[0.98] `}
				>
					SUBMIT
				</button>
			</form>
		</section>
	);
};

export default Form;

// WHAT TO DO:
//
//	- better input text colors
//
//
//

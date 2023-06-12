const Form = () => {
	const handleSubmit = (e) => e.preventDefault();

	return (
		<section className="bg-white p-12 font-['Roboto'] sm:max-w-xl">
			<h2 className="mx-auto w-fit text-4xl font-bold text-teal-500">
				React Contact Form
			</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-6 text-xl text-black"
			>
				<div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-6">
					<input
						name="firstname"
						type="text"
						placeholder="First Name"
						autoComplete="off"
						className="w-full border-b-2 placeholder-black outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150"
					/>
					<input
						name="lastname"
						type="text"
						placeholder="Last Name"
						autoComplete="off"
						className="w-full border-b-2 placeholder-black outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150"
					/>
				</div>
				<div className="flex flex-col gap-6 sm:flex-row sm:gap-6">
					<input
						name="email"
						type="text"
						placeholder="Email Address"
						autoComplete="off"
						className="w-full border-b-2 placeholder-black outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150"
					/>
					<input
						name="phonenumber"
						type="text"
						placeholder="Phone number"
						autoComplete="off"
						className="w-full border-b-2 placeholder-black outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message" className="">
						Your Message:
					</label>
					<textarea
						name="message"
						id="message"
						className="border-b-2 outline-none duration-150 focus:border-teal-500 focus:outline-none focus:duration-150"
					></textarea>
				</div>
				<button
					type="submit"
					className="text-bold ml-auto mt-4 bg-teal-500 px-6 py-3 text-white active:scale-[0.98] "
				>
					SUBMIT
				</button>
			</form>
		</section>
	);
};

export default Form;

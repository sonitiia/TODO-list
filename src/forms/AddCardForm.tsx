import { FormEvent, FunctionComponent, useState } from "react";

interface AddCardFormProps {
	onCardAdd: (card: { title: string }) => any;
}

const AddCardForm: FunctionComponent<AddCardFormProps> = ({ onCardAdd }) => {
	const [titleValue, setTitleValue] = useState("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		onCardAdd({
			title: titleValue,
		});

		setTitleValue("");
	};

	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			className="
				w-full
				flex flex-col items-end gap-4
				mt-4
				mb-8
			">
			<input
				type="text"
				value={titleValue}
				onChange={(e) => setTitleValue(e.target.value)}
				placeholder="New task"
				className="
					h-12
					w-full
					bg-white
					bg-opacity-5
					duration-300
					hover:bg-opacity-20
					text-white
					placeholder:text-white 
					placeholder:italic
					outline-none
					px-6
					rounded-xl
				"
			/>
			<button
				type="submit"
				className="w-28 duration-500 bg-black bg-opacity-50 text-purple-300 hover:bg-purple-800 hover:bg-opacity-50 hover:text-white py-1 rounded">
				{"Add".toUpperCase()}
			</button>
		</form>
	);
};

export default AddCardForm;

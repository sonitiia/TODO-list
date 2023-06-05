import { useState } from "react";

const EditCardForm = ({ editCard, card }) => {
	const [titleValue, setTitleValue] = useState(card.title);

	const handleSubmit = (e) => {
		e.preventDefault();

		editCard(
			{
				title: titleValue,
			},
			card.id
		);
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
				className="
					h-12
					w-full
					bg-white
					bg-opacity-5
					duration-300
					hover:bg-opacity-20
					text-white
					placeholder:text-white 
                    italic
					outline-none
					px-6
					rounded-xl
                "
			/>
			<button
				type="submit"
				className="w-28 duration-500 bg-black bg-opacity-50 text-purple-300 hover:bg-purple-800 hover:bg-opacity-50 hover:text-white py-1 rounded">
				Update
			</button>
		</form>
	);
};

export default EditCardForm;

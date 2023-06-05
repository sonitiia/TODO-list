import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrash,
	faCheck,
	faHourglass,
} from "@fortawesome/free-solid-svg-icons";

export type CardType = {
	id: number;
	title: string;
	date: any;
	completed: boolean;
	isEditing: boolean;
};

interface MainCardProps {
	card: CardType;
	onCardDelete: Function;
	onCardEdit: Function;
	toggleCardComplete: Function;
}

const Card: FunctionComponent<MainCardProps> = ({
	card,
	onCardDelete,
	onCardEdit,
	toggleCardComplete,
}) => {
	return (
		<div
			onDoubleClick={() => onCardEdit(card.id)}
			className="
				flex flex-row items-center gap-4
				w-full
				p-6
				my-4
				rounded-xl
				bg-black
				bg-opacity-100
				text-white
				ease-linear
				duration-300

				hover:bg-white
				hover:bg-opacity-20
				hover:scale-101
				hover:text-black
			">
			<FontAwesomeIcon
				icon={card.completed ? faCheck : faHourglass}
				onClick={() => toggleCardComplete(card.id)}
				className="cursor-pointer"
				size="lg"
			/>
			<div className="flex flex-row justify-between gap-2 relative w-full">
				<div className="flex flex-col break-all gap-2">
					<h3>{card.title}</h3>
					<p className="text-xs text-purple-300">{card.date}</p>
				</div>
				<FontAwesomeIcon
					icon={faTrash}
					onClick={() => onCardDelete(card.id)}
					className="cursor-pointer"
					size="xs"
				/>
			</div>
		</div>
	);
};

export default Card;

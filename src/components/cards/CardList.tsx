import { FunctionComponent, useEffect, useState } from "react";
import Card, { CardType } from "./Card";
import AddCardForm from "../../forms/AddCardForm";
import EditCardForm from "../../forms/EditCardForm";
import dayjs from "dayjs";

const CardList: FunctionComponent = () => {
	const [cards, setCards] = useState<CardType[]>([]);

	useEffect(() => {
		const storedCards = localStorage.getItem("cards");
		if (storedCards) {
			setCards(JSON.parse(storedCards));
		}
	}, []);

	const onCardAdd = (card: { title: string }) => {
		setCards((prevCards) => {
			const newCard: CardType = {
				...card,
				id: Date.now(),
				date: dayjs().format("D MMM HH:mm"),
				completed: false,
				isEditing: false,
			};
			const newCards = [...prevCards, newCard];
			localStorage.setItem("cards", JSON.stringify(newCards));
			return newCards;
		});
	};

	const onCardDelete = (id: number) => {
		setCards((prevCards) => {
			const newCards = prevCards.filter((card) => card.id !== id);
			localStorage.setItem("cards", JSON.stringify(newCards));
			return newCards;
		});
	};

	const onCardEdit = (id: number) => {
		setCards((prevCards) => {
			const newCards = prevCards.map((card) =>
				card.id === id ? { ...card, isEditing: !card.isEditing } : card
			);
			localStorage.setItem("cards", JSON.stringify(newCards));
			return newCards;
		});
	};

	const editCard = (updatedCard: any, id: number) => {
		setCards((prevCards) => {
			const newCards = prevCards.map((card) =>
				card.id === id
					? { ...card, ...updatedCard, isEditing: false }
					: card
			);
			localStorage.setItem("cards", JSON.stringify(newCards));
			return newCards;
		});
	};

	const toggleCardComplete = (id: number) => {
		setCards((prevCards) => {
			const newCards = prevCards.map((card) =>
				card.id === id ? { ...card, completed: !card.completed } : card
			);
			localStorage.setItem("cards", JSON.stringify(newCards));
			return newCards;
		});
	};

	const completedCards = cards ? cards.filter((card) => card.completed) : [];

	const notCompletedCards = cards
		? cards.filter((card) => !card.completed)
		: [];

	return (
		<>
			<AddCardForm onCardAdd={onCardAdd} />
			{cards.length === 0 && (
				<p className="font-light text-center text-white italic text-md">
					Start adding your tasks..
				</p>
			)}

			{notCompletedCards.length > 0 && (
				<h3 className="font-light text-center text-white italic text-xl animate-pulse">
					To do
				</h3>
			)}
			{notCompletedCards.map((card) =>
				card.isEditing ? (
					<EditCardForm
						key={card.id}
						card={card}
						editCard={editCard}
					/>
				) : (
					<Card
						key={card.id}
						card={card}
						onCardDelete={onCardDelete}
						onCardEdit={onCardEdit}
						toggleCardComplete={toggleCardComplete}
					/>
				)
			)}

			{completedCards.length > 0 && (
				<h3 className="font-light text-center text-white italic text-xl animate-pulse">
					Done
				</h3>
			)}
			{completedCards.map((card) =>
				card.isEditing ? (
					<EditCardForm
						key={card.id}
						card={card}
						editCard={editCard}
					/>
				) : (
					<Card
						key={card.id}
						card={card}
						onCardDelete={onCardDelete}
						onCardEdit={onCardEdit}
						toggleCardComplete={toggleCardComplete}
					/>
				)
			)}
		</>
	);
};

export default CardList;

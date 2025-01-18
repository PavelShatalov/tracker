import { useState } from "react";
import List from "./components/List";
import CatigoriesList from "./components/CatigoriesList";
import AddItemForm from "./components/AddItemForm";
import AddCatigoriesForm from "./components/AddCatigoriesForm";
import { v4 as uuidv4 } from "uuid";

function App() {
	// const [newItem, setNewItem] = useState({});
	const [list, setList] = useState([
		{ id: 1, catigories: "cat1", price: 100, count: 2 },
		{ id: 2, catigories: "cat2 ", price: 200, count: 3 },
	]);
	const [catigories, setCatigories] = useState([
		{ id: 1, catigorie: "cat1", price: 200 },
		{ id: 2, catigorie: "cat2", price: 600 },
	]);

	function addItem(event) {
		event.preventDefault();
		const form = event.target;
		const price = Number(form.price.value);
		const count = Number(form.count.value);
		const catigorie = form.catigories.value;

		const newItem = {
			id: uuidv4(),
			catigories: catigorie,
			price,
			count,
		};

		console.log(newItem);
		setList((prev) => [...prev, newItem]);
		setCatigories((prev) =>
			prev.map((item) =>
				item.catigorie === catigorie
					? { ...item, price: item.price + price * count }
					: item
			)
		);
		form.reset();
	}

	function deleteItem(id) {
		setList((prev) => prev.filter((item) => item.id !== id));
	}

	function addCatigories(event) {
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const newCatigorie = {
			id: uuidv4(),
			catigorie: name,
			price: 0,
		};
		setCatigories((prevCatigories) => [...prevCatigories, newCatigorie]);
		form.reset();
	}

	function deleteCatigorie(id) {
		setCatigories((prevCatigories) =>
			prevCatigories.filter((catigorie) => catigorie.id !== id)
		);
	}

	return (
		<>
			<AddItemForm catigories={catigories} onSubmit={addItem} />
			<List list={list} onDelete={deleteItem} />
			<AddCatigoriesForm onSubmit={addCatigories} />
			<CatigoriesList catigories={catigories} onDelete={deleteCatigorie} />
			<p>
				Summ:{list.reduce((acc, item) => (acc += item.price * item.count), 0)}
			</p>
		</>
	);
}

export default App;

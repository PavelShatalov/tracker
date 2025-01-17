import { useState } from "react";
import List from "./components/List";
import CatigoriesList from "./components/CatigoriesList";
import AddItemForm from "./components/AddItemForm";
import AddCatigoriesForm from "./components/AddCatigoriesForm";

function App() {
	const [newItem, setNewItem] = useState({});
	const [list, setList] = useState([
		{ id: 1, catigories: "cat1", price: 100, count: 2 },
		{ id: 2, catigories: "cat2 ", price: 200, count: 3 },
	]);
	const [catigories, setCatigories] = useState([
		{ id: 1, catigorie: "cat1", price: 200 },
		{ id: 2, catigorie: "cat2", price: 600 },
	]);

	function addItem() {}

	function deleteItem() {}

	function addCatigories() {}

	return (
		<>
			<AddItemForm catigories={catigories} onSubmit={addItem} />
			<List list={list} onDelete={deleteItem} />
			<AddCatigoriesForm onSubmit={addCatigories} />
			<CatigoriesList />
			<p>
				Summ:{list.reduce((acc, item) => (acc += item.price * item.count), 0)}
			</p>
		</>
	);
}

export default App;

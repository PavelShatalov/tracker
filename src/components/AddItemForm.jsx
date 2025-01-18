/* eslint-disable react/prop-types */
function AddItemForm({ catigories, onSubmit }) {
	return (
		<>
			<form
				onSubmit={onSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					width: "300px",
				}}>
				<label htmlFor="price">price</label>
				<input type="number" name="price" />
				<label htmlFor="count">count</label>
				<input type="number" name="count" />
				<select name="catigories">
					{catigories.map((item) => (
						<option value={item.catigorie} key={item.id}>
							{item.catigorie}
						</option>
					))}
				</select>
				<button type="submit">addItem</button>
			</form>
		</>
	);
}

export default AddItemForm;

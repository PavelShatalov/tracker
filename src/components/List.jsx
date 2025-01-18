/* eslint-disable react/prop-types */
function List({ list, onDelete }) {
	return (
		<div>
			<h2>Item List</h2>
			<ul>
				{list.map((item) => (
					<li key={item.id}>
						<strong>Category:</strong> {item.catigories},
						<strong> Price:</strong> {item.price},<strong> Count:</strong>{" "}
						{item.count}
						<button type="button" onClick={() => onDelete(item.id)}>
							delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default List;

/* eslint-disable react/prop-types */
function CatigoriesList({ catigories, onDelete }) {
	return (
		<>
			<h3>Catigories</h3>
			<ul>
				{catigories.map((item) => (
					<li key={item.id}>
						{item.catigorie} - {item.price}
						<button type="button" onClick={() => onDelete(item.id)}>
							delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default CatigoriesList;

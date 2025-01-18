/* eslint-disable react/prop-types */
function AddCatigoriesForm({ onSubmit }) {
	return (
		<>
			<h3>addCatigorieForm</h3>
			<form onSubmit={onSubmit}>
				<label htmlFor="name">name</label>
				<input type="text" name="name" />
				<button>add</button>
			</form>
		</>
	);
}

export default AddCatigoriesForm;

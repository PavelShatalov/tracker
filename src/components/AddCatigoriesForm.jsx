/* eslint-disable react/prop-types */
function AddCatigoriesForm({ onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="name">name</label>
			<input type="text" name="name" />
			<button>add</button>
		</form>
	);
}

export default AddCatigoriesForm;

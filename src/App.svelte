<script>
	let people = [
		{name: 'linh', age: 20, id:1},
		{name: 'tom', age: 21, id:2},
	]

	const deletePerson = (id) => {
		people = people.filter((person) => person.id != id)
	}
</script>

<main>
	{#each people as person}
		<div>
			<h4>{person.name}</h4>
			<p>{person.age} years old</p>
			<button on:click={() => {deletePerson(person.id)}}>Delete</button>
		</div>
	{:else}
		<p>No person here</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
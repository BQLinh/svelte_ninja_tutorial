<script>
	let color = 'blue';
	let firstName = 'quang';
	let lastName = 'linh';

	$: fullName = `${firstName} ${lastName}` 
</script>

<main>
	<!-- <h1>Hello {name}!</h1> -->
	<p>{fullName}-{color}</p>
	<!-- <button on:click={hanldeClick}>update coat</button> -->
	<!-- <input type="text" on:input={handleChange} value={color}> -->
	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>
	<input type="text" bind:value={color}>
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
<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";
	// tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';
	let polls = [
		{
			id: 1,
			question: 'Python or JavaScript',
			answerA: 'Python',
			answerB: 'JavaScript',
			votesA: 15,
			votesB: 9,
		}
	];
	const tabChange = (e) => {
		activeItem = e.detail;
	};

	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		activeItem = 'Current Polls';
	}
	const handleVote = (e) => {
		const { option, id} = e.detail;
		console.log(option, id)
		let copiedPolls = [...polls];
		let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
		if (option === 'a'){
			upvotedPoll.votesA ++
		}
		if (option === 'b'){
			upvotedPoll.votesB ++
		}
		polls = copiedPolls;
	}
</script>


<Header/>
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>

	{#if activeItem === 'Current Polls'}
		<PollList polls={polls} on:vote={handleVote}/>
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:add={handleAdd}/>
	{/if}
</main>
<Footer/>


<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>
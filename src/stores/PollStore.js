import {writable} from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: 'Python or JavaScript',
    answerA: 'Python',
    answerB: 'JavaScript',
    votesA: 15,
    votesB: 9,
  },
])

export default PollStore;
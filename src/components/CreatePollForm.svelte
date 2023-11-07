<script>
  import PollStore from "../stores/PollStore";
  import Button from "../shared/Button.svelte";
  import { createEventDispatcher } from "svelte";
  let fields = {question: '', answerA: '', answerB: ''};
  let error = {question: '', answerA: '', answerB: ''};
  let valid = false;
  
  const dispatch = createEventDispatcher();
  const submitHandler = () => {
    valid = true;

    if (fields.question.trim().length < 5){
      valid = false;
      error.question = 'Question must has length greater than 5';
    }else{
      error.question = '';
    }

    if (fields.answerA.trim().length < 1){
      valid = false;
      error.answerA = 'Answer A must not be empty';
    }else{
      error.answerA = '';
    }

    if (fields.answerB.trim().length < 1){
      valid = false;
      error.answerB = 'Answer B must not be empty';
    }else{
      error.answerB = '';
    }

    if (valid){
      let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()};
      PollStore.update(Ps => {
        return [poll, ...Ps];
      })
      dispatch('add');
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question}>
    <div class="error">{error.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA}>
    <div class="error">{error.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB}>
    <div class="error">{error.answerB}</div>
  </div>
  <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
  form{
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field{
    margin: 18px auto;
  }
  input{
    width: 100%;
    border-radius: 6px;
  }
  label{
    margin: 10px auto;
    text-align: left;
  }
  .error{
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }

</style>
<script>
  import css from '../public/global.css'
  import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';

  let feedback = [
    {
      'id':1,
      'rating' :10,
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta leo odio, vitae rhoncus augue gravida nec. Curabitur aliquet aliquet tortor sit amet consectetur.',
    },
    {
      'id':2,
      'rating' :8,
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta leo odio, vitae rhoncus augue gravida nec. Curabitur aliquet aliquet tortor sit amet consectetur.',
    },
    {
      'id':3,
      'rating' :9,
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta leo odio, vitae rhoncus augue gravida nec. Curabitur aliquet aliquet tortor sit amet consectetur.',
    }
  ]

  $: count = feedback.length;
  $: average = count !== 0 ? feedback.reduce((a,{rating}) => a + rating , 0) / count : 0;
  
  const deleteFeedback = (e) => {
    const itemId = e.detail
    feedback = feedback.filter((item) => item.id !== itemId)
  }
  const addFeedback = (e) => {
    const newFeedback = e.detail
    feedback = [newFeedback, ...feedback]
  } 
</script>

<main>
  <main class="container">
    <FeedbackForm on:add-feedback={addFeedback} />
    <FeedbackStats {count} {average} />
    <FeedbackList feedbacks ={feedback} on:delete-feedback={deleteFeedback}/>
  </main>
  
</main>

<style>
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  } */
</style>

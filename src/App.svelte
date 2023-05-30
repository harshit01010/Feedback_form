<script>
  import css from '../public/global.css'
  import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';
  // import Header from './components/Header.svelte';
</script>

<main>
  <!-- <Header /> -->
  <main class="container">
    <!-- <FeedbackForm on:add-feedback={addFeedback} /> -->
    <FeedbackForm />
    <FeedbackStats />
    <!-- <FeedbackList on:delete-feedback={deleteFeedback}/> -->
    <FeedbackList />
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

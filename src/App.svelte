<script>
  import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';
  import Header from './components/Header.svelte';
</script>

<main>
  <Header />
  <main class="container">
    <!-- <FeedbackForm on:add-feedback={addFeedback} /> -->
    <FeedbackForm />
    <FeedbackStats />
    <!-- <FeedbackList on:delete-feedback={deleteFeedback}/> -->
    <FeedbackList />
  </main>
  
</main>



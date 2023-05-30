<script>
import { FeedbackStore } from "../stores/store";

$: count = $FeedbackStore.length;
$: average = count !== 0 ? $FeedbackStore.reduce((a,{rating}) => a + rating , 0) / count : 0;
</script>


<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings average : {average}</h4>
</div>

<style>
    .feedback-stats{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
</style>
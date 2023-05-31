<script>
    import {v4 as uuidv4} from 'uuid'
    import { FeedbackStore } from '../stores/store';
    import { createEventDispatcher } from 'svelte';
    import Button   from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    const isloggedin = sessionStorage.getItem('user') !== null ? true : false

    let text = ''
    let btnDisabled = true
    let min = 10
    let message
    let rating = 10
    
    const dispatch = createEventDispatcher()
    const handleSelect = e => rating = e.detail
    const user = sessionStorage.getItem('user')
    const handleInput = () => {
        if(user===null)
        {
            message = `Log in first!`
        }
        else{
            if(text.trim().length <= min){
                message = `Text must be atleast ${min} characters`
                btnDisabled = true
            }
            else{
                message = null
                btnDisabled = false
            }
        }
    }

    const handleSubmit = () => {
        if(text.trim().length > min)
        {
            const newFeedback = {
                id: uuidv4(),
                text:text,
                rating: +rating
            }
            console.log([newFeedback, ...$FeedbackStore])

            // dispatch('add-feedback',newFeedback)
            FeedbackStore.update((currentFeedback) => {
                return [newFeedback, ...currentFeedback]
            })
            
            text = ''
        }
    }
    
</script>

<Card>
    <header>
        <h2>
            Give us your valuable feedback
        </h2>
    </header>

    <form on:submit|preventDefault = {handleSubmit}>
      <RatingSelect on:rating-select={handleSelect} />
      <div class="input-group">
          <input type="text" placeholder="Enter feedback here..." on:input={handleInput} bind:value={text}>
          <Button  disabled={btnDisabled} type="submit" on:btn-send={handleSubmit}>Send</Button>
      </div>
      {#if message}
          <div class="message">
              {message}
          </div>
      {/if}
  </form>

</Card>

<style>
    header{
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align:center
    }
    .input-group{
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 0px;
        border-radius: 8px;
        margin-top: 15px; 
    }
    input{
        flex-grow: 2;
        border: none;
        font-size: 16px;
        padding: 10px;
        border-radius: 10px;
    }
    input:focus {
    outline: none;
  }

  .message{
    padding-top: 10px;
    text-align: center;
    font-weight: bold;
    color: rebeccapurple;
  }
</style>
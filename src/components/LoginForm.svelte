<script>
  
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  let username = "";
  let message = "";
  let isLoginFormVisible = true;
  const isloggedin = sessionStorage.getItem('user') !== null ? true : false
  const dispatch = createEventDispatcher()

  function handleLogin() {

    if(username.length === 0)
    {
      message = "Enter something first!!"
    }
    else
    {
      message =''
      sessionStorage.setItem('user',username)
      isLoginFormVisible = false
      dispatch('user-loggedin',username)
      window.location.reload()
      }
  }

</script>
  
{#if isLoginFormVisible && !isloggedin}
  <div transition:fade class="login-container">
    <form class="login-form" on:submit|preventDefault={handleLogin}>
      <div class="input-field">
        <label for="username">Username:</label>
        <input type="text" id="username" bind:value={username} placeholder="Enter your name here..." />
      </div>
      <button class="login-button">Login</button>
      {message}
    </form>
  </div>
{/if}


<style>
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 400px; */

}
.login-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    margin: 15px 15px;
    padding: 2rem;
    background-color: #7cd7f8;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease;
    width: 500px;
}


.input-field {
    margin-bottom: 1rem;
    width: 100%;
}


.input-field > label{
  position:relative;
  top:1px;
  left:20px;
  font-size: 20px;
}

.input-field input {
    padding: 0.5rem 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    font-size: 18px;
}

.login-button {
    padding: 0.5rem 1rem;
    background-color: #2196f3;
    color: white;
    border: none;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 10px;
}
</style>



<script>
  import LoginForm from "./LoginForm.svelte";
    let username = sessionStorage.getItem('user') !== null ? sessionStorage.getItem('user') : ''
    let loginbtnclicked = false
    let btntext = username !== '' ? 'LOGOUT' : 'LOGIN'

    const handleButton = () => {
        if(!username)
            loginbtnclicked = !loginbtnclicked
        else
        {
            sessionStorage.removeItem('user')
            window.location.reload(); 
        }
    }
    const handleUser = (e) => {
        btntext = 'LOGOUT'
        username = e.detail 
    }
</script>

<nav>
    <li>
        <button on:click={handleButton}>
            {btntext}
        </button>
    </li>
    <li>
        <div class="usergreet">
            {#if username}
                {`WELCOME ${username.toUpperCase()}!`}
            {/if}
        </div>
    </li>
</nav>

{#if loginbtnclicked}
    <LoginForm on:user-loggedin={handleUser} />
{/if}

<style>
    nav{
        min-height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #497096;
        list-style-type: none;
    }
    nav li{
        margin: 15px;
    }

    button{
        padding: 15px 15px;
        margin: 0px 20px;
        background-color: rgb(123, 17, 244);
        border-radius: 5px;
        border: none;
        color: white;
        cursor: pointer;
        font-size: large;
    }


    button:hover{
        filter: drop-shadow(0 0 1em #9409eaaa);
    }

    .usergreet{
        color: rgb(3, 9, 23);
        font-size: large;
        font-weight: bold;
        word-break: break-word;
    }
</style>

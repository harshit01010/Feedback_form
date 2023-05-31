<script>
    import { createEventDispatcher } from "svelte"
    export let style = 'primary'
    export const type = 'button'
    export let disabled = false
    const dispatch = createEventDispatcher();
    const handleBtnClick = () => {
        dispatch('btn-send',true)
    }

  </script>
  
  <button {type} {disabled} class={style} on:click={handleBtnClick} >
    <slot>
        
    </slot>
  </button>

<style>
    button{
        color: white;
        border: 0;
        border-radius: 8px;
        color: white;
        width: 250px;
        height: 40px;
        cursor: pointer;
        margin-left: 10px;
        padding: 0px 15px;
    }
    .primary{
        background: #202142;
        
    }
    .secondary{
        background: #ff6a95;
    }
    button:hover{
        transform: scale(0.98);
        opacity: 0.9;
        filter: drop-shadow(0 0 2em #330ddfaa);
    }
    button:disabled{
        background-color: #979494;
        color: black;
        padding: 5px 5px;
        cursor: auto;
        padding: 0px 15px;
    }

    

</style>
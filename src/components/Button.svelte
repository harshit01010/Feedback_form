<script>
    export let style = 'primary'
    export const type = 'button'
    export let disabled = false
  </script>
  
  <button {type} {disabled} class={style} >
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
    }
    button:disabled{
        background-color: #979494;
        color: black;
        padding: 5px 5px;
        cursor: auto;
        padding: 0px 15px;
    }
    button:disabled:hover{
        transform: scale(1);
        opacity: 1;
    }

</style>
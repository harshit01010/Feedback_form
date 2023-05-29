<script>
    export let style = 'primary'
    export const type = 'button'
    export let disabled = false
  </script>
  
  <button {type} {disabled} class={style}>
    <slot>
        
    </slot>
  </button>

<style>
    button{
        color: white;
        border: 0;
        border-radius: 8px;
        color: white;
        width: 100px;
        height: 40px;
        cursor: pointer;
    }
    .primary{
        /* background: #202142; */
        background: black;
    }
    .secondary{
        /* background: #ff6a95; */
        background: rgb(80, 77, 77);
    }
    button:hover{
        transform: scale(0.98);
        opacity: 0.9;
    }
    button:disabled{
        /* background-color: white; */
        background-color: #cccccc;
        /* color: black; */
        color: #333;
        cursor: auto;
    }
    button:disabled:hover{
        transform: scale(1);
        opacity: 1;
    }

</style>
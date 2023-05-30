<script>
    import { createEventDispatcher } from "svelte";

    let num = 0;
    let selected = 10;
    const numbers = Array(10).fill().map((_, i) => i + 1);
    const dispatch = createEventDispatcher()
    
    const onChange = (e) => {
        selected = e.currentTarget.value
        dispatch('rating-select',selected)
    }
</script>

<ul class="rating">
    {#each numbers as num}
        <li>
            <input type="radio" id={`num${num}`} name="rating" value={`${num}`} on:change={onChange} checked={selected === num} />
            <label for={`num${num}`}>{num}</label>
        </li>
    {/each}
</ul>

<style>
    .rating{
        display: flex;
        align-items: center;
        /* justify-content: space-around; */
        margin: 30px 0;
        flex-wrap: wrap;
    }
    .rating li{
        position: relative;
        background: #f4f4f4;
        width: 50px;
        height: 50px;
        padding: 10px;
        border-radius: 50%;
        text-align: center;
        font-size: 19px;
        border: 1px #eee solid;
        transition: 0.3s;
        margin: 10px 5px;
    }
    .rating li label{
     
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        padding: 10px;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        cursor: pointer;
    }
    @media only screen and (max-width: 768px) {
        .rating{
            justify-content: center;
        }
    }
    .rating li:hover{
        background: #ff6a95;
        color: #fff;
    }
    [type='radio']{
        opacity: 0;
    }
    [type='radio']:checked ~ label{
        background: #ff6a95;
        color: #fff;
    }
</style>
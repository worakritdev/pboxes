<script>
  export let boxes = [];
  console.log(boxes);
</script>

<!-- markup (zero or more items) goes here -->
<ul class="flex-container">
  {#each boxes as box}
    <!-- content here -->
    <li class="flex-item">
      {box}
      <slot><!-- optional fallback --></slot>
    </li>
  {/each}
</ul>

<style>
  .flex-container {
    /* We first create a flex layout context */
    display: flex;

    /* Then we define the flow direction 
     and if we allow the items to wrap 
   * Remember this is the same as:
   * flex-direction: row;
   * flex-wrap: wrap;
   */
    flex-flow: row wrap;

    /* Then we define how is distributed the remaining space */
    justify-content: space-around;

    padding: 0;
    margin: 0;
    list-style: none;
  }

  .flex-item {
    background: lavender;
    padding: 5px;
    width: 200px;
    height: 150px;
    margin-top: 10px;
    line-height: 150px;
    color: white;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
  }
</style>

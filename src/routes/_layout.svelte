<script>
  import Nav from "../components/Nav.svelte";

 // export let segment;
</script>

<div
  class="w-full h-screen bg-blackback z-0 font-rubik flex-col flex items-center"
>
<Nav />
 <!--<Nav {segment} />--> 


    <slot />

</div>

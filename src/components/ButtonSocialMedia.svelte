<script lang="ts">
  export let media: string;
  export let icon = media.toLowerCase();
</script>

<button class="group outline-none" aria-label="Share on {media}">
  <i
    class="bx bxl-{icon} block m-auto transform transition duration-250 group-hover:scale-125 group-focus:scale-125" />
</button>

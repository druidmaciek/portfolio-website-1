<script>
	import Blog from '../blog/Preview.svelte';
	export let featured = true;
	export let stories = [];
</script>

<div class="space-y-6 divide-y">
	{#each stories as story, i}
		{#if featured}
			{#if i == 0}
				<Blog {story} />
			{/if}
		{:else}
			<Blog {story} />
		{/if}
	{/each}
</div>

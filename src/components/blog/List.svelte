<script>
	import Blog from '../blog/Preview.svelte';
    export let featured = true;
</script>

<div class="space-y-6 divide-y">


    

	<Blog
		title={'How to grow your accounting business'}
		description={'Learn about 5 best way to grow your accounting practice, and get new clients'}
	/>

    {#if !featured}

	<Blog
		title={'How to grow your accounting business'}
		description={'Learn about 5 best way to grow your accounting practice, and get new clients'}
	/>

	<Blog
		title={'How to grow your accounting business'}
		description={'Learn about 5 best way to grow your accounting practice, and get new clients'}
	/>

	<Blog
		title={'How to grow your accounting business'}
		description={'Learn about 5 best way to grow your accounting practice, and get new clients'}
	/>
    {/if}
</div>

<script>
	export let story;	
</script>

<div class="pt-6">
	
	<div class="sm:flex sm:justify-start sm:items-start text-gray-900">
		<img class="hidden sm:block h-44 w-64 rounded shadow-lg" src={story.content.image} alt={story.content.title} />
		<img class="block sm:hidden h-64 w-full object-cover rounded shadow-lg" src={story.content.image} alt={story.content.title} />

		<div class="mt-4 sm:mt-4 sm:px-12">
			<a href="{story.full_slug}" class="text-2xl hover:underline">{story.content.title}</a>
			<p class="mt-0.5">{story.content.intro}</p>
		
		</div>
	</div>

</div>

<script>
	export let story;	
</script>

<div class="pt-6">
	
	<div class="sm:flex sm:justify-start sm:items-center text-gray-900">
		<img class="hidden sm:block h-44 w-64 rounded shadow-lg" src={story.content.image} alt={story.content.title} />
		<img class="block sm:hidden h-64 w-full object-cover rounded shadow-lg" src={story.content.image} alt={story.content.title} />

		<div class="mt-4 sm:mt-0 sm:px-12">
			<h3 class="text-xl ">{story.content.title}</h3>
			<p class="mt-0.5 text-sm">{story.content.intro}</p>
			<div class="mt-1 pr-24">
				<a href="{story.full_slug}" class="underline">Read More</a>
			</div>
		</div>
	</div>

</div>

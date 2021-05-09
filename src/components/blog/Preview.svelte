<script>
	export let title = 'Blog Title';
	export let description = 'Blog Description';
	export let image =
		'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80';
</script>

<div class="pt-6">
	
	<div class="sm:flex sm:justify-between sm:items-center text-gray-900">
		<img class="hidden sm:block h-44 w-64 rounded shadow-lg" src={image} alt={title} />
		<img class="block sm:hidden h-64 w-full object-cover rounded shadow-lg" src={image} alt={title} />

		<div class="mt-4 sm:mt-0 sm:px-12">
			<h3 class="text-xl ">{title}</h3>
			<p class="mt-0.5 text-sm">{description}</p>
			<div class="mt-1 pr-24">
				<a href="#" class="underline">Read More</a>
			</div>
		</div>
	</div>

</div>

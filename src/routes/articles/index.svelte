<script>
	import Layout from '../../components/Layout.svelte';
	import Blogs from '../../components/blog/List.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import H2 from '../../components/Heading.svelte';

	import StoryblokClient from 'storyblok-js-client';
	const client = new StoryblokClient({
		accessToken: 'L5O0kfyjrvqD5B1nPyOVMgtt'
	});

	export let stories = [];
	client
		.get('cdn/stories/?starts_with=articles/')
		.then((response) => {
			stories = response.data.stories;
		})
		.catch((error) => {
			console.log(error);
		});
</script>

<Navbar />
<Layout>
	<H2>Growth Tips for Accountants</H2>
	<Blogs {stories} featured={false} />
</Layout>

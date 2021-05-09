<script>
	import Header from '../components/Header.svelte';
	import Layout from '../components/Layout.svelte';
	import Featured from '../components/blog/List.svelte';
	import H2 from '../components/Heading.svelte';
	import Services from '../components/service/List.svelte';
	import Projects from '../components/projects/List.svelte';
	import Contact from '../components/Contact.svelte';

	import StoryblokClient from 'storyblok-js-client';
	const client = new StoryblokClient({
		accessToken: 'L5O0kfyjrvqD5B1nPyOVMgtt'
	});

    export let stories = [];
	client.get('cdn/stories/?starts_with=articles/')
		.then((response) => {
			stories = response.data.stories;
            console.log(stories)
		})
		.catch((error) => {
			console.log(error);
		});
</script>


<Header />

<Layout bg={'bg-gray-100'}>
	<Featured {stories} />
</Layout>

<Layout>
	<H2>This is how I can help you get more customers</H2>
	<Services />
</Layout>

<Layout bg={'bg-gray-100'}>
	<H2>Some of my work</H2>
	<Projects />
</Layout>

<Layout>
	<H2>Request a Quote</H2>
	<p class="-mt-8 text-gray-700 text-center">
		Fill the form below for a quote
		<!-- or send us a message on <span class="underline font-semibold">support@securegrowthdigital.com</span>  -->
	</p>
	<Contact />
</Layout>

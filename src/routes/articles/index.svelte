<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
    import client, { defaultRequestConfig as reqConfig } from '../../storyblokClient'
 
	export async function load({ page, fetch, session, context }) {
		//const url = 'http://api.plos.org/search?q=ht';//`/articles/${page.params.slug}.json`;
		//const res = await fetch(url);
        
        const url = 'cdn/stories/?starts_with=articles/';
        const res = await client.get(url)
        //console.log(res.data.story);

		if (res.data.stories) {
            console.log(res.data.stories);
			return {
				props: {
					stories: await res.data.stories
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import Layout from '../../components/Layout.svelte';
	import Blogs from '../../components/blog/List.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import H2 from '../../components/Heading.svelte';

	export let stories;
</script>

<svelte:head>
	<title>Growth Tips and helpful articles for Accountants by SecureGrowthDigital</title>
	<meta name="description" content="Read our Growth Tips to learn how to improve your accounting business and get more clients">
</svelte:head>

<Navbar />
<Layout>
	<h1 class=" text-gray-900 text-center text-4xl font-semibold">Growth Tips for Accountants</h1>
	<p class="mb-12 text-gray-700 text-sm text-center">Read our Growth Tips to learn how to improve your accounting business and get more clients</p>
	<Blogs {stories} featured={false} />
</Layout>

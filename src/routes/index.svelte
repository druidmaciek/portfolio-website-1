<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
    import client, { defaultRequestConfig as reqConfig } from '../storyblokClient'
 
	export async function load({ page, fetch, session, context }) {
		//const url = 'http://api.plos.org/search?q=ht';//`/articles/${page.params.slug}.json`;
		//const res = await fetch(url);
        
        const url = 'cdn/stories/?starts_with=articles/&sort_by=first_published_at:asc';
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
	import Header from '../components/Header.svelte';
	import Layout from '../components/Layout.svelte';
	import Featured from '../components/blog/List.svelte';
	import H2 from '../components/Heading.svelte';
	import Services from '../components/service/List.svelte';
	import Projects from '../components/projects/List.svelte';
	import Contact from '../components/Contact.svelte';
	
	export let stories;
</script>

<svelte:head>
	<title>SecureGrowthDigital web design and marketing for Accounting practices</title>
	<meta name="description" content="SecrueGrowthDigital is Web Design and Online Marketing Agency, helping accountants get more clients">
</svelte:head>

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

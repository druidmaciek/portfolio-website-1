<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
    import client, { defaultRequestConfig as reqConfig } from '../../storyblokClient'
 
	export async function load({ page, fetch, session, context }) {
		//const url = 'http://api.plos.org/search?q=ht';//`/articles/${page.params.slug}.json`;
		//const res = await fetch(url);
        
        const { slug } = page.params
        const url = 'cdn/stories/articles/' + slug;
        const res = await client.get(url)
        //console.log(res.data.story);

		if (res.data.story) {
            console.log(res.data.story);
			return {
				props: {
					article: await res.data.story
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
    import { Remarkable } from 'remarkable';
    let md = new Remarkable();

    import Navbar from "../../components/Navbar.svelte";
    import Layout from "../../components/Layout.svelte";
    import H2 from "../../components/Heading.svelte";
    export let article;
</script>


<svelte:head>
	<title>{article.content.title}</title>
	<meta name="description" content="{article.content.meta_description}">
</svelte:head>

<Navbar />
<Layout>
    <img class="h-64 border border-gray-200 w-full object-cover object-center rounded shadow-lg" src="{article.content.image}" alt="{article.content.title}">
	<h1 class="mt-12 text-gray-900 text-center text-4xl font-semibold">{article.content.title}</h1>
    <p class="text-gray-700 text-sm text-center mb-12">Last Updated: {article.published_at.split("T")[0]}</p>
    <div class="prose prose-indigo prose-lg text-gray-500 mx-auto">
        {@html md.render(article.content.long_text)}
    </div>
</Layout>
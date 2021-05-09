<script>
        import Layout from "../components/Layout.svelte";
        import Blogs from "../components/blog/List.svelte";
        import Navbar from "../components/Navbar.svelte";
        import H2 from "../components/Heading.svelte";
</script>

<Navbar/>
<Layout>
    <H2>Growth Tips for Accountants</H2>
    <Blogs featured={false} />
</Layout>


<script>
	//export let segment;
</script>

<header class="w-full flex flex-row justify-between p-2  pt-5 px-32 items-center z-10 relative ">
    <div class="flex felx-row items-center">
        <img src="/logo.png" alt="Wolfchain Logo" class="h-12 w-12">
        <span class="font-rubik text-wolfblue text-lg font-medium ml-2">Wolfchain</span>
    </div>
    <nav>
        <ul class="flex flex-row justify-around items-center mr-10 font-noto text-gray-300">
            <li class="ml-12">
                About
            </li>
            <li class="ml-12">
                Roadmap
            </li>
            <li class="ml-12">
                Team
            </li>
            <li class="ml-12">
                Whitepaper
            </li>
            <li class="ml-12">
                Blog
            </li>
            <li class="ml-12">
                <button class=" w-32 h-10 bg-wolfblue text-gray-300 rounded-3xl font-noto font-bold">Login</button>
            </li>
        </ul>
    </nav>
</header>
<!--
<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

		for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen 
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>
</nav>-->

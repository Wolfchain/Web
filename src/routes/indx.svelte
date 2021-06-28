<svelte:head>
	<title>Wolfchain | Non-Custody payment gateway</title>
</svelte:head>

<div class="w-full h-screen flex flex-row justify-center items-center">

	<div class="h-16 w-16 bg-gray-100 rounded-full p-3 absolute z-5 top-96 left-64">
		<img src="/crypto/128/color/eth.png" alt="Ethereum Icon">
	</div>
	<div class="h-12 w-12 bg-gray-100 rounded-full p-2 absolute z-5 top-64 right-96">
		<img src="/crypto/128/color/btc.png" alt="Bitcoin Icon">
	</div>
	<div class="h-12 w-12 bg-gray-100 rounded-full p-2 absolute z-5 mr-64 top-16">
		<img src="/crypto/128/color/xmr.png" alt="Monero Icon">
	</div>
	<div class="h-16 w-16 bg-gray-100 rounded-full p-3 absolute z-5 left-96 bottom-32">
		<img src="/crypto/128/color/doge.png" alt="Doge Icon">
	</div>
	<div class="h-16 w-48 bg-gray-100 rounded-full p-3 flex flex-row items-center justify-start absolute z-5 left-32 top-52">
		<img  class="h-full" src="/crypto/128/color/ada.png" alt="Ada Icon">
		<div class="flex flex-col justify-center ml-1">
			<p class="text-sm font-bold text-gray-700">Cardano</p>
			<p class="text-sm font-light text-gray-800">Payment</p>
		</div>
		<div class="justify-self-end text-green-500 ml-2">
			+0.04
		</div>
	</div>
	<div class="h-16 w-48 bg-gray-100 rounded-full p-3 flex flex-row items-center justify-start absolute z-5 right-64 bottom-64">
		<img  class="h-full" src="/crypto/128/color/xlm.png" alt="XLM Icon">
		<div class="flex flex-col justify-center ml-1">
			<p class="text-sm font-bold text-gray-700">Stellar</p>
			<p class="text-sm font-light text-gray-800">Payment</p>
		</div>
		<div class="justify-self-end text-green-500 ml-2">
			+123.45
		</div>
	</div>
	<div class="w-80 h-80 bg-wolfblue rounded-full absolute z-0 opacity-50" style="filter: blur(8em)" >
	
	</div>
	<div class="flex flex-col items-center justify-center w-4/6 h-100 relative z-10">
		<h1 class="text-gray-100 text-7xl text-center leading-snug px-64">Non-Custody crypto payment gateway</h1>
		<h2 class="text-gray-200 text-2xl font-extralight mt-8 text-center">Accept crypto in your store in a trustless way, <span class="text-color">easier than ever</span> </h2>
		<button class="w-48 h-12 bg-wolfblue text-gray-200 font-bold rounded-3xl mt-8 focus:outline-none">Let's get started</button>
		<h4 class="text-gray-200 font-light underline mt-7">See pricing</h4>
	</div>
</div>


<!--
<div class="w-80 h-80 bg-palegreen rounded-full absolute right-32 -top-8 z-0" style="filter: blur(8em)" >
	
</div>-->
<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import Form from './form.svelte';
	import Socials from './socials.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>SuperKauf pre-register</title>

	<meta name="description" content="Pre register the SuperKauf app for iOS!" />
</svelte:head>

<div
	class="background-color background-image flex h-screen w-screen flex-col items-center justify-start"
>
	<div class="flex h-[200px] w-full flex-row items-center justify-center">
		<div
			class="h-[170px] w-[170px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-gray-900 blur-lg"
		></div>
		<div class="absolute inset-0 z-10 flex h-[200px] items-start justify-center">
			<img
				class="logo-image"
				src="https://storage.googleapis.com/superkauf/Group-10-%5Bcopy%5D.gif"
				alt="logo"
				height="200"
				width="200"
			/>
		</div>
	</div>

	<Form data={data.form} />

	<Socials />
</div>

<style>
	.logo-image {
		clip-path: polygon(88% 87%, 65% 100%, 0 100%, 0 0, 100% 0, 100% 76%);
	}
</style>

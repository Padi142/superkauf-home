<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-row p-2 space-x-6 pt-14">
	<Card.Root class="w-32 shadow-xl hover:shadow-2xl hover:bg-slate-100">
		<Card.Header>
			<Card.Title class="text-center">iOS</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="text-center">{data.presaveCount}</p>
		</Card.Content>
	</Card.Root>

	<Card.Root class="w-32 shadow-xl hover:shadow-2xl hover:bg-slate-100">
		<Card.Header>
			<Card.Title class="text-center"
				><a href="https://play.google.com/store/apps/details?id=com.padisoft.superkauf&hl=en&gl=US"
					>Android</a
				></Card.Title
			>
		</Card.Header>
		<Card.Content>
			<p class="text-center">618</p>
		</Card.Content>
	</Card.Root>
</div>

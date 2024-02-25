<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="username">
		<Form.Control let:attrs>
			<Form.Label><p class="">ig handle</p></Form.Label>
			<Input {...attrs} bind:value={$formData.username} />
			<p class="w-full text-center text-xs text-gray-500">or</p>
			<!-- <Separator /> -->
			<Form.Label>email</Form.Label>
			<Input {...attrs} bind:value={$formData.username} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<p class="pb-6 pt-2 text-center text-xs text-gray-500 dark:text-gray-400 md:text-sm">
		All data will be
		<strong>deleted</strong>
		after the app release
	</p>
	<Form.Button>Submit</Form.Button>
</form>

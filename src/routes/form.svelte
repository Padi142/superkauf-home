<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { toast } from 'svelte-sonner';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	let data: SuperValidated<Infer<FormSchema>>;
	export { data as form };

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdated: ({ form: f }) => {
			if (f.errors?.email?.[0] == null) {
				console.log(f);
				if (f.errors?.instagram?.[0] == null) {
					toast.success("You're in! 🎉");
				}
			} else {
				toast.error(f.errors?.email?.[0] ?? 'Form is invalid');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="instagram">
		<Form.Control let:attrs>
			<Form.Label><p class="text-slate-800">instagram username</p></Form.Label>
			<Input {...attrs} bind:value={$formData.instagram} />
		</Form.Control>
		<Form.FieldErrors class="text-xs" />
	</Form.Field>
	<p class="w-full text-xs text-center text-gray-500">or</p>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label><p class="text-slate-800">email</p></Form.Label>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors class="text-xs" />
	</Form.Field>
	<div class="flex flex-col pt-2 pb-6 text-xs text-center text-slate-600 md:text-sm">
		<p>You will get notified when the app is released</p>
		<h1 class="py-2">
			All data will be
			<strong>deleted</strong>
			after the app release
		</h1>
	</div>
	<Form.Button>Submit</Form.Button>
</form>

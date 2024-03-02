import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { createPresave, getPresaveCount } from '@/api/presave';
import type { CreatePresave } from '@/models/presave';

export const load: PageServerLoad = async () => {
	return {
		presaveCount: await getPresaveCount(),
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		if (form.data.instagram == null && form.data.email == null) {
			form.errors = {
				...form.errors,
				email: ['At least one field is required']
			};
			return fail(400, { form });
		}

		const params: CreatePresave = {
			instagram: form.data.instagram ?? null,
			email: form.data.email ?? null,
			ip: event.getClientAddress()
		};

		const response = await createPresave(params);

		if (!response.success) {
			form.errors = {
				...form.errors,
				email: [response.error ?? 'An error occurred']
			};
			return fail(400, { form });
		}

		return {
			form,
			data: {
				
			}
		};
	}
};

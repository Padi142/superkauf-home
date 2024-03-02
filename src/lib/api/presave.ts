import type { CreatePresave } from '@/models/presave';
import request from './api';
import { API_URL } from '$env/static/private';

export const createPresave = async (
	presave: CreatePresave
): Promise<{ success: boolean; error: string | undefined }> => {
	console.log('Creating presave');
	const body = JSON.stringify({
		instagram: presave.instagram,
		email: presave.email,
		ip: presave.ip
	});

	try {
		const resp = await request<{
			error: string | undefined;
			reference: string | undefined;
			success: boolean | undefined;
		}>(API_URL + 'presaves', {
			method: 'POST',
			body: body,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});

		return {
			success: resp.success ?? false,
			error: resp.error
		};
	} catch (e) {
		console.error(e);
		return {
			success: false,
			error: 'An error occurred'
		};
	}
};

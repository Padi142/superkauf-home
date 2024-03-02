import { z } from 'zod';

export const formSchema = z.object({
	instagram: z.string().min(3).max(30).optional(),
	email: z
		.string()
		.email()
		.min(5)
		.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
		.optional()
});

export type FormSchema = typeof formSchema;

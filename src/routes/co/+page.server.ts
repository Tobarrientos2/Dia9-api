
import { env } from '$env/dynamic/private';

import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		// Extrae los datos del formulario (ajusta los nombres de los campos según tu formulario)
		const formData = await event.request.formData();
		const email = formData.get('email');
		const first_name = formData.get('first_name');
		const last_name = formData.get('last_name');
        const country = formData.get('country');
        const rubroMarca = formData.get('rubro_marca');
        const company = formData.get('company')

		const apiUrl = `https://oficinapymecheck.app.n8n.cloud/webhook/form-data`;
		const payload = {
			api_key: env.SECRET_API_KEY_OCTOPUS,
			email_address: email,
			fields: { FirstName: first_name, LastName: last_name, Country: country, RubroMarca: rubroMarca, Company: company },
			tags: ['vip'],
			status: 'SUBSCRIBED'
		};

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			});

			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);

			// Maneja la respuesta aquí. Por ejemplo, puedes redirigir al usuario o mostrar un mensaje de éxito

			}

		} catch (error) {
			// Maneja cualquier error que ocurra durante la solicitud
			console.error('Error al enviar el formulario:', error);
		}
	}
};
export default function () {
	const config = useRuntimeConfig()

	const fetcher = $fetch.create({
		baseURL: config.public.API_URL as string,
		onResponseError: ({request, response, options}) => {
			// something
			// NEED TO HANDLE 429
		}
	})

	return { fetcher }
}
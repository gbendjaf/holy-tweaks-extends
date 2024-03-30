export default function () {
  const config = useRuntimeConfig()
  const localePath = useLocalePath()
  const { accessToken, memoizedRenewTokens } = useTokens()

  const fetcher = $fetch.create({
    baseURL: config.public.API_URL,
		retry: 1,
		retryStatusCodes: [401],
    async onRequest({options}) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken.value}`
      }
    },
    async onResponseError({ request, options, response}) {
      if (response.status === 401) {
        await memoizedRenewTokens()
        .then((res: any) => {
					return res
        })
        .catch((err: any) => {
          navigateTo(localePath('authentication'))
					return err
        })
      } else if (response.status === 429) {
        // Trigger too many request modal
      }
    }
  })

  return { fetcher }
}
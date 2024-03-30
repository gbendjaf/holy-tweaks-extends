// @ts-ignore
import memoize from 'memoize'

export default function () {
  const accessToken = useCookie('access-token')
  const refreshToken = useCookie('refresh-token')
  
  const { fetcher: publicFetcher } = useApiPublic()
  
  function renewTokens (): Promise<any> {
    return new Promise ((resolve, reject) => {
      if (!refreshToken.value) return reject()
      publicFetcher<any, any>('/web/refresh-token', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${refreshToken.value}`
        }
      })
      .then(res => {
        accessToken.value = res.data.accessToken
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

	function deleteTokens () {
		accessToken.value = null
		refreshToken.value = null
	}
	
  const memoizedRenewTokens = memoize(renewTokens, { maxAge: 10000 })
  
	return {
    accessToken,
    refreshToken,
    renewTokens,
    memoizedRenewTokens,
		deleteTokens
  }
}
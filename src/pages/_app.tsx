import type { AppProps } from 'next/app'
import { GlobalStyleWrapper } from '@/globalStyle'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<GlobalStyleWrapper>
			<Component {...pageProps}/>
		</GlobalStyleWrapper>
	)
}
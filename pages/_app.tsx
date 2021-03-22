import {AppProps} from 'next/dist/next-server/lib/router/router'
import '../components/styles/global.css'
import '../components/styles/utils.css'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

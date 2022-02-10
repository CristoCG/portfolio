import dynamic from "next/dynamic"
import NavBar from "../NavBar"
import useInView from "react-cool-inview"
import { useEffect } from "react"
import { useRouter } from "next/router"
import nProgress from "nprogress"


export default function Layout({ children }) {

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve()
    },
  })

  const router = useRouter()
  useEffect(() => {
    const handleRoutechange = url => {
      nProgress.start()
    }
    router.events.on('routeChangeStart', handleRoutechange)
    router.events.on('routeChangeComplete', () => nProgress.done())
    
    return () => {
      router.events.off('routeChangeStart',handleRoutechange)
    }
  
  }, [])
  

  return (
    <>
      <NavBar />
      <main className="container py-4">{children}</main>
    </>
  )
}

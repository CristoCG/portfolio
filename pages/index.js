import Header from "../components/Header"
import ProfileHeader from "../components/ProfileHeader"
import Information from "../components/Information"
import dynamic from "next/dynamic"
import useInView from "react-cool-inview"

const Portfolio = dynamic(() => import("/components/Portfolio"))
const Footer = dynamic(() => import("components/Footer"))

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve()
    },
  })

  return (
    <>
      <Header>Portafolio | Cristobal</Header>

      {/** Header **/}
      <ProfileHeader />
      {/** Informacion de Habilidades, idiomas , estudios y cursos*/}
      <Information />
      {/** Portafolio */}
      <div ref={observe}>{inView && <Portfolio />}</div>
      <div className="py-2" ref={observe}>{inView && <Footer />}</div>
    </>
  )
}

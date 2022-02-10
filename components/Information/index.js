import Education from "../Education"
import Skills from "../Skills"
import dynamic from "next/dynamic"
import useInView from "react-cool-inview"

const Courses = dynamic(() => import("/components/Courses"))
const Idioms = dynamic(()=> import("/components/Idioms"))

export default function Information() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve()
    },
  })

  return (
    <section className="row py-2">
      <section className="col-md-4">
        <div className="row py-2">
          <div className="card bg-light py-2">
            <div className="card body py-2">
              {inView && <Skills />}
            </div>
          </div>

          <div className="card bg-light py-2" ref={observe}>
            <div className="card body py-2">
              <Idioms />
            </div>
          </div>
        </div>
      </section>

      <section className="col-md-8">
        <section className="row py-2 " style={{ height: "100%" }}>
          <div className="card bg-light py-3">
            <div className="card body" style={{ height: "100%" }}>
               <Education />
            </div>
          </div>

          <div className="card bg-light py-3 " ref={observe}>
            <div className="card body" style={{ height: "100%" }}>
              {inView && <Courses />}
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

import Education from "../Education"
import Skills from "../Skills"
import dynamic from "next/dynamic"
import useInView from "react-cool-inview"

const Courses = dynamic(() => import("/components/Courses"))
const Language = dynamic(() => import("/components/Language"))

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
          <div className="card bg-light py-2" style={{ borderRadius: "10px" }}>
            <div className="card body  " style={{ borderRadius: "10px" }}>
              {inView && <Skills />}
            </div>
          </div>

          <div
            className="card bg-light py-2"
            style={{ borderRadius: "10px" }}
            ref={observe}
          >
            <div className="card body py-2" style={{ borderRadius: "10px" }}>
              <Language />
            </div>
          </div>
        </div>
      </section>

      <section className="col-md-8">
        <section
          className="row py-2 "
          style={{ height: "100%", borderRadius: "10px" }}
        >
          <div className="card bg-light py-3" style={{ borderRadius: "10px" }}>
            <div
              className="card body"
              style={{ height: "100%", borderRadius: "10px" }}
            >
              <Education />
            </div>
          </div>
          <div
            className="card bg-light py-1 "
            style={{ borderRadius: "10px" }}
            ref={observe}
          >
            <div className="card body" style={{
              height: "100%",
              borderRadius: "10px"
            }}>
              {inView && <Courses />}
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

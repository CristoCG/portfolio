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
    <section className="py-2" style={{ display: "grid" }}>
      <section className="row " style={{ height: "100%" }}>
        <section
          className="col-md-4 "
          style={{ height: "100%", borderRadius: "10px" }}
        >
          <div
            className="row "
            style={{ height: "100%", borderRadius: "10px" }}
          >
            <div className="bg-light " style={{ borderRadius: "10px" }}>
              <div
                className="card body "
                style={{ height: "100%", borderRadius: "10px" }}
              >
                <Skills />
              </div>
            </div>

            <div
              className="bg-light py-2 "
              style={{ borderRadius: "10px" }}
              ref={observe}
            >
              <div
                className="card body "
                style={{ height: "100%", borderRadius: "10px" }}
              >
                {inView && <Language />}
              </div>
            </div>
          </div>
        </section>

        <section className="col-md-8 " style={{ height: "100%" }}>
          <section className="row" style={{ borderRadius: "10px" }}>
            <div
              className=" bg-light "
              style={{ height: "100%", borderRadius: "10px" }}
            >
              <div
                className="card body"
                style={{ height: "100%", borderRadius: "10px" }}
              >
                <Education />
              </div>
            </div>

            <div
              className="bg-light py-2 "
              style={{ borderRadius: "10px", height: "100%" }}
              ref={observe}
            >
              <div
                className="card body"
                style={{ height: "100%", borderRadius: "10px" }}
              >
                {inView && <Courses />}
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  )
}

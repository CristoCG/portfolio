import ReactProjects from "/components/ReactProjects"
import NextProjects from "/components/NextProjects"
import UniversityProjects from "components/UniversityProjects"
import TestProjects from "components/TestProjects"
export default function Portfolio() {
  return (
    <section className="row">
      <section className="col-md-12">
        <div
          className="card card-body bg-dark"
          style={{ borderRadius: "10px" }}
        >
          <header className="row">
            <div className="col-md-12 ">
              <h4 className="text-center text-light">Portfolio</h4>
            </div>

            <h4 className="text-light">NextJS</h4>
            <NextProjects />

            <h4 className="text-light">ReactJS</h4>
            <ReactProjects />

            <h4 className="text-light">Proyectos universitarios</h4>
            <UniversityProjects />

            <h4 className="text-light">Pruebas técnicas</h4>
            <TestProjects />
          </header>
        </div>
      </section>
    </section>
  )
}

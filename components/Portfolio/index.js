import ReactProjects from "/components/ReactProjects"
import NextProjects from "/components/NextProjects"
export default function Portfolio() {
  return (
    <section className="row">
      <section className="col-md-12">
        <div className="card card-body bg-dark">
          <header className="row">
            <div className="col-md-12">
              <h4 className="text-center text-light">Portfolio</h4>
            </div>

            <h4 className="text-light">NextJS</h4>
            <NextProjects />

            <h4 className="text-light">ReactJS</h4>
            <ReactProjects />
          </header>
        </div>
      </section>
    </section>
  )
}

import ReactProjects from "/components/ReactProjects"
import NextProjects from "/components/NextProjects"
export default function Portfolio() {
  return (
    <section className="row">
      <section className="col-md-12">
        <div className="card card-body bg-dark">
          <header className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>

            <h1 className="text-light">NextJS</h1>
            <NextProjects />

            <h1 className="text-light">ReactJS</h1>
            <ReactProjects />
          </header>
        </div>
      </section>
    </section>
  )
}

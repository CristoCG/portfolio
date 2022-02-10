import Link from "next/link"
import { nextProjects } from "settings/profile"

export default function NextProjects() {
  return (
    <>
      {nextProjects.map(({ title, img, description, url }, index) => (
        <section className="col-md-6 py-2" key={index}>
          <div
            className="card h-100"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            }}
          >
            <div
              className="overflow"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              }}
            >
              <img src={img} alt={description} className="card-img-top" />
            </div>
            <div className="card-body ">
              <strong>{title}</strong>
              <p>{description}</p>
              <Link href={url}>
                <a
                  target="_blank"
                  className="btn btn-outline-secondary"
                  style={{ borderRadius: "999px" }}
                >
                  Ir a ver
                </a>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

import Link from "next/link"
import { universityProjects } from "settings/profile"

export default function UniversityProjects() {
  return (
    <>
      {universityProjects.map(
        ({ title, img, description, url, urlRepository }, index) => (
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
              <div className="card-body">
                <strong>{title}</strong>
                <p>{description}</p>

                <div className="d-flex col md-6">
                  <div className="px-2">
                    {url ? (
                      <Link href={url}>
                        <a
                          target="_blank"
                          className="btn btn-outline-secondary"
                          style={{ borderRadius: "999px" }}
                        >
                          Ver
                        </a>
                      </Link>
                    ) : (
                      <a
                        target="_blank"
                        className="btn btn-outline-secondary"
                        style={{
                          borderRadius: "999px",
                          backgroundColor: "gray",
                        }}
                        aria-disabled={true}
                        cl
                      >
                        No disponible
                      </a>
                    )}
                  </div>
                  <div className="px-2">
                    {urlRepository && (
                      <Link href={urlRepository}>
                        <a
                          target="_blank"
                          className="btn btn-outline-secondary"
                          style={{ borderRadius: "999px" }}
                        >
                          Repositorio
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      )}

      <style jsx>{`
        h6 {
          weight: 800;
        }
      `}</style>
    </>
  )
}

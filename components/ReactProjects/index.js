import Link from "next/link"
import { reactProjects } from "settings/profile"

export default function ReactProjects() {
  return (
    <>
      {reactProjects.map(({ title, img, description, url }, index) => (
        <section className="col-md-6 py-2" key={index}>
          <div className="card h-100">
            <div className="overflow">
              <img src={img} alt={description} className="card-img-top" />
            </div>
            <div className="card-body">
              <h6>{title}</h6>
              <p>{description}</p>
              <Link href={url}>
                <a target="_blank">Go visit</a>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

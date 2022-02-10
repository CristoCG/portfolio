import Link from "next/link"
import { nextProjects } from "settings/profile"

export default function NextProjects() {
  return (
    <>
      {nextProjects.map(({ title, img, description, url }, index) => (
        <section className="col-md-6 py-2" key={index}>
          <div className="card h-100">
            <div className="overflow">
              <img src={img} alt={description} className="card-img-top" />
            </div>
            <div className="card-body ">
              <h3>{title}</h3>
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

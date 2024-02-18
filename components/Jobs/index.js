import { jobs } from "settings/profile"

export default function Jobs() {
  return (
    <>
      <h3 className="text-center">Experiencia laboral</h3>
      <ul>
        {jobs.map(({ title, description, date, company }, index) => (
          <li key={index}>
            <bold>
              <h5>{title}</h5>
            </bold>
            <em className="text-secondary">
              <h6>{date}</h6>
            </em>
            <p>{company}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

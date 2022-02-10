import { education } from "settings/profile";

export default function Education() {
  return (
    <>
      <h1 className="text-center">Education</h1>
      <ul>
        {education.map(({ name, fecha, institucion }, index) => (
          <li key={index}>
            <h3>{name}</h3>
            <em className="text-secondary">
              <h5>{fecha}</h5>
            </em>
            <p>{institucion}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

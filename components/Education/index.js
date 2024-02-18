import { education } from "settings/profile";

export default function Education() {
  return (
    <>
      <h3 className="text-center">Educación</h3>
      <ul>
        {education.map(({ name, fecha, institucion }, index) => (
          <li key={index}>
            <h5>{name}</h5>
            <em className="text-secondary">
              <h6>{fecha}</h6>
            </em>
            <p>{institucion}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

import { courses } from "settings/profile";


export default function Courses() {
  return (
    <>
      <h1 className="text-center">Courses</h1>
      <ul>
        {courses.map(({ name, fecha, informacion }, index) => (
          <li key={index}>
            <h3>{name}</h3>
            <em className="text-secondary">
              <h5>{fecha}</h5>
            </em>
            <p>{informacion}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

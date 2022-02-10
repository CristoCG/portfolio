import { courses } from "settings/profile";


export default function Courses() {
  return (
    <>
      <h3 className="text-center">Courses</h3>
      <ul>
        {courses.map(({ name, fecha, informacion }, index) => (
          <li key={index}>
            <h5>{name}</h5>
            <em className="text-secondary">
              <h6>{fecha}</h6>
            </em>
            <p>{informacion}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

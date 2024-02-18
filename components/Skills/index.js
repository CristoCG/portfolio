import { skills } from "settings/profile"

export default function Skills() {
  return (
    <>
      <h3 className="text-dark text-center">Habilidades</h3>
      {skills.map(({ skill, percentage }, index) => (
        <div className="py-1 m-1" key={index}>
          <h5> → {skill}</h5>
        </div>
      ))}
    </>
  )
}

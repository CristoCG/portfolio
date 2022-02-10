import { skills } from "settings/profile";

export default function Skills() {
  return (
    <>
      <h3 className="text-dark text-center">Skills</h3>
      {skills.map(({ skill, percentage }, index) => (
        <div className="py-1 m-1" key={index}>
          <h5>{skill}</h5>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </>
  )
}

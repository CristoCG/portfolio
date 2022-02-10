import { idioms } from "settings/profile";

export default function Idioms() {
  return (
    <>
      <h3 className="text-center">Idioms</h3>
      <ul>
        {idioms.map(({ language, level }, index) => (
          <li key={index}>
            <h5>{language}</h5>
            <em className="text-secondary">
              <h6>✓ {level}</h6>
            </em>
          </li>
        ))}
      </ul>
    </>
  )
}

import { idioms } from "settings/profile";

export default function Idioms() {
  return (
    <>
      <h1 className="text-center">Idioms</h1>
      <ul>
        {idioms.map(({ language, level }, index) => (
          <li key={index}>
            <h3>{language}</h3>
            <em className="text-secondary">
              <h5>✓ {level}</h5>
            </em>
          </li>
        ))}
      </ul>
    </>
  )
}

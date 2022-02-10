import { language } from "settings/profile"

export default function Language() {
  return (
    <>
      <h3 className="text-center">Languages</h3>
      <ul>
        {language.map(({ language, level }, index) => (
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

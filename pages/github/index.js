import Header from "components/Header"
import Link from "next/link"
import _error from "pages/_error"

export default function GitHub({ user, statusCode }) {
  if (statusCode) {
    return <_error statusCode={statusCode} />
  }
  return (
    <>
      <Header>GitHub | Cristobal</Header>
      <section className="row">
        <div className="col-md-4 offset-md-4">
          <div
            className="card card-body text-center"
            style={{ borderRadius: "10px" }}
          >
            <h5>{user.name}</h5>
            <img
              src={user.avatar_url}
              alt="Foto de perfil de github"
              style={{ borderRadius: "999px" }}
            />
            <p>{user.bio}</p>
            <Link href={user.html_url}>
              <a
                target="_blank"
                className="btn btn-outline-secondary "
                style={{ borderRadius: "999px" }}
              >
                Ir al perfil
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/CristoCG")
  const data = await res.json()

  const statusCode = res.status > 200 ? res.status : false

  return {
    props: {
      user: data,
      statusCode: statusCode,
    },
  }
}

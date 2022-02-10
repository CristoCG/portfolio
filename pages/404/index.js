import Link from "next/link"
import Header from "../../components/Header"

export default function custom404() {
  return (
    <div className="text-center">
      <Header>404 ERROR</Header>
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <p>
        Please return to{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  )
}

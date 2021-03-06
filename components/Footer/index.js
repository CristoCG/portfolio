export default function Footer() {
  return (
    <footer
      className="bg-dark text-light text-center py-1"
      style={{ borderRadius: "10px" }}
    >
      <h5>&copy;Cristobal Portfolio</h5>
      <small className="text-muted">
        <p>2019 - {new Date().getFullYear()}</p>
        <p>All rights reserved.</p>
      </small>
    </footer>
  )
}

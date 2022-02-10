export default function _error({ statusCode }, index) {
    return (
      
    <section className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card card-body text-center">
          <h1>Status: {statusCode}</h1>
          <p>Couldn't load the page</p>
        </div>
      </div>
    </section>
  )
}

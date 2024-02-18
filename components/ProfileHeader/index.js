import Image from "next/image"

export default function ProfileHeader() {
  return (
    <header className="row">
      <section className="col-md-12">
        <div
          className="card card-body bg-secondary text-light"
          style={{ borderRadius: "10px" }}
        >
          <div className="row">
            <div className="col-md-12">
              <h3>Cristobal Cabrera García</h3>
              <h5>Ingeniero Informático</h5>
              <small className="text-muted">En formación</small>
              <p>
                Estudiante de Ingeniería Informática, con una formación
                fundamentada en valores y principios éticos. Responsable, amable
                con buenas relaciones interpersonales lo cual favorece el
                trabajo en equipo. Con capacidad para resolver problemas.
                Apasionado por el aprendizaje y la innovación, entusiasta ante
                los retos que se me presenten. <br />
                Gracias a mi enfoque y disciplina considero que puedo contribuir
                a los logros y objetivos de un proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

import Head from "next/head"

export default function Header({ children }) {
  return (
    <Head>
      <title>{children}</title>
      <meta
        name="description"
        content="Cristobal Cabrera Garcia portafolio website"
      />
      <link rel="icon" href="/head.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
      />
    </Head>
  )
}

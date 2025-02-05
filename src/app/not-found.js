import Link from "next/link"

export default function NotFound() {
  return (
    <div className="center404">
      <h1>404</h1>
      <p>Den här sidan finns inte</p>
      <Link href="/">Tillbaka till startsidan</Link>
    </div>
  )
}
'use client'
import Link from 'next/link'

function MyLink({href}:{href:string}) {
  return (
    <>
        <Link className="btn btn-primary" href={`${href}?v=${Math.floor(Math.random()*100)}`}>
            Detail
        </Link>
    </>
  )
}

export default MyLink
import React from 'react'

export default function Pagination({goToNextPage, goToPreviousPage}) {
  return (
    <div>
        <button onClick={goToPreviousPage}>Next</button>
        <button onClick={goToNextPage}>Previous</button>
    </div>
  )
}

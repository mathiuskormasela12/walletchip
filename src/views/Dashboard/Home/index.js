import React from 'react'

function Home() {

  React.useEffect(() => {
    document.title = `Rizki's Dashboard - Walletchip`
  }, [])

  return (
    <div className="card">
      <div className="card-body">
        Home
      </div>
    </div>
  )
}

export default Home

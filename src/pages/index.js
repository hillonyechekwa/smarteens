import React, {useEffect, useState} from "react"


const IndexPage = () => {
  const [hello, setHello] = useState(null)

  useEffect(() => {
    fetch('/.ntlify/api/sheets')
  })
  
  return (
    <main>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Smarteens | Home Page</title>

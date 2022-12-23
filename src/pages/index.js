import React, {useEffect, useState} from "react"
import axios from 'axios'


const IndexPage = () => {
  const [hello, setHello] = useState()

  useEffect(() => {
    // async function fetchData() {
    //   try{

    //     const response = await axios.get('/api/sheets')

    //       if(!response.ok) {
    //         throw new Error(`Error Status ${response.status}`)
    //       }
    //       const result = await response.json()
    //       console.log(result)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // fetchData()
  }, [])
  
  return (
    <main>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Smarteens | Home Page</title>

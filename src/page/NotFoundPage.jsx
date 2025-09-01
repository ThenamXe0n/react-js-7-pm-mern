import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section className="h-screen bg-black flex flex-col items-center justify-center text-white">
           
            <h4 className="text-green-700 uppercase text-4xl font-bold mb-20">
              404 page Not Found
            </h4>
         
            <Link to="/">
             
              <button className="bg-white text-black p-2 rounded-md">
             Go to home 
              </button>
              
            </Link>
          </section>
  )
}

export default NotFoundPage
import { booksData } from "../data/books";
import Navbar from "../components/Navbar";

const BooksPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {
        booksData.map((item)=>{
            return(
                <div>
                    <div>
                        <img src={item.image} alt="" />
                    </div>             
                    <div>
                    {item.title} by {item.author}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default BooksPage

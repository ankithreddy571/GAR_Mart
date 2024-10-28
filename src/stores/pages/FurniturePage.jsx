import Navbar from "../components/Navbar"
import { furnitureData } from "../data/furniture"
const FurniturePage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {
            furnitureData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="proModel">
                            {item.model} {item.price}
                        </div>
                    </div>
                )
              
            })
        }
      
    </div>
    </>
  )
}

export default FurniturePage

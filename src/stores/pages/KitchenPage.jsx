import Navbar from "../components/Navbar"
import { kitchenData } from "../data/kitchen"
const KitchenPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {
            kitchenData.map((item)=>{
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

export default KitchenPage

import React from "react";
const Electronics = () => {
  return (
    <div>
    <div className="land_container">
      

      <div className="land_textarea">
        <div>
        <h4>Description</h4>
        </div>
        <div>
        <textarea  width={400}/>
        </div>
      </div>
      <div>
       
        <h4>Cartegory</h4>
        <select>
            <option>Select</option>
            <option>Store Equipments</option>
            <option>Kitchen Appliance</option>
            <option>Vehicle parts</option>
            <option>Phone</option>
            <option>Computer</option>  
                    <option>Television</option> 
            <option>Robotic vacuum cleaner</option>
            <option>Computer network</option>
            <option>Sensor</option>
            
        </select>
      </div>      
     
      </div>
    </div>
  );
};
export default Electronics;

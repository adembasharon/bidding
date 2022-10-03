import React from "react";
const Land = () => {
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
        <input type="size" placeholder="Size" />
      </div>
      <div>
        <input type="text" placeholder="Location" />
      </div>
      <div>
            <input type="text" placeholder="Upload image"/>
      </div>
      </div>
    </div>
  );
};
export default Land;

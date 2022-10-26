import React from "react";
const Land = () => {
  return (
    <div>
    <div className="land_container">    
      <div>
        <input type="size" placeholder="Size" />
      </div>
      <div>
        <input type="text" placeholder="Location" />
      </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
<div>
  <h6>Topography (rivers,mountains,lakes others...)</h6>
</div>
<div>
  <textarea/>
</div>
    </div>
      </div>
    </div>
  );
};
export default Land;

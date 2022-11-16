import axios from "axios";
import React, { useEffect, useState } from "react";

const Vehicle = () => {
  const [cars, setCars] = useState(null);
  
    useEffect(() => {
    try{
    const url = "https://myfakeapi.com/api/cars/";
    const options = {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    }; 

    axios.get(url, options).then((res) => {
      // console.log(res.data)
      setCars(res.data);
    });
  }catch(err){
    console.log(err)
  }
  }, []);

  const carBrands = [];

  cars &&
    cars["cars"].map((item) => {
      if (carBrands.includes(item.car)) {
        return;
      } else {
        carBrands.push(item.car);
      }
    });

  console.log(carBrands);
  return (
    <div style={{width:"80%",margin:"0 auto",}}>
      <div style={{display:"flex",flaexDirection:"row",backgroundColor:"#4990E2", gap:".5em",width:"100%",padding:"2em"}}>
      <div>
        <select>
            <option>Vehicle type</option>
          {carBrands.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>

      <div>
        <select>
          <option>Body type</option>
          <option>Sedan</option>
          <option>Coupe</option>
          <option>Sports Car</option>
          <option>Station Wagon</option>
          <option>Hatchback</option>
          <option>Convertible</option>
          <option>SUV</option>
          <option>Minivan</option>
          <option>Pickup Truck</option>
        </select>
      </div>
      <div>
      <input type="text" placeholder="Color"/>
      </div>
      <div>
      <input type="number" placeholder="Year"/>
      </div>
    </div>
    </div>
  );
};
export default Vehicle;

import axios from "axios"
import React, { useEffect, useState } from "react"

const Vehicle=()=>{
 

    const [cars,setCars]=useState({})
const [carName,setCarName]=useState([])
console.log(cars)
useEffect(()=>{
// cars.map(item=>{
//     item.data == data && setCarName()

// })

// console.log(item)
},[])
useEffect(()=>{
    const url="https://myfakeapi.com/api/cars/"
    const options={
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        }}

        axios.get(url,options)
        .then((res)=>{
            console.log(res.data)
setCars(res.data)
        })
    },[])

    return(

        <div> 
            {
                Object.keys(cars).map((item,id)=>{

                    <div key={id}>
                        {cars[item].map((Vehicle,indx)=>
                        <div key={indx}>
                            <select>
                                <option>{Vehicle.car}</option>
                            </select>

                            <select>
                                <option>{Vehicle.car_color}</option>
                            </select>
                             <select>
                                <option>{Vehicle.car_model}</option>
                             </select>
                             <select>
                                <option>{Vehicle.car_model_year}</option>
                             </select>

                            {/* {console.log(Vehicle.car_model_year)} */}
                            </div>
                        )}
                    </div>
                  
                })
            }  
                 



        </div>
    )
}
export default Vehicle
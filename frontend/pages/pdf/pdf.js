// import React ,{useState}from "react"
// import { initializeApp } from "@firebase/app";
// import { getStorage, ref,uploadBytes} from "firebase/storage";
// import { firebaseConfig } from "../../../firebase";

// const app = initializeApp(firebaseConfig);

// const storage = getStorage(app)

// const UploadPdf=()=>{

// const upload=(e)=>{
//   const file=e.target.files[0]
//   const pdfRef = ref(storage, `documents/${file.name}`);  
//   uploadBytes(pdfRef, file).then((snapshot) => {
//       console.log('Uploaded a blob or file!');
//     });
  
 
//     }
//     return(  
        
//                     <div>
// <input type="file" onChange={(e)=>upload(e)}/>
//   </div>
// )
// }
// export default UploadPdf
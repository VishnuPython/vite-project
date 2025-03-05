import Excel from "./Excel.jsx";
import Send from "./Send.jsx";
import Data from "./Data.JSX";
import Spreadsheet from "react-spreadsheet";
import { useEffect, useState } from "react";


function App() {
  const [file,setFile]=useState([]);
  const [phone,setPhone]=useState([]);
  const [data,setData]=useState([]);
  const [json,setJSON]=useState(false);

  const handleFile=(newFile)=>{setFile(newFile)}
  const handlePhone=(newPhone)=>{setPhone(newPhone)}
  const handleData=(newData)=>{setData(newData)}
  const handleJSON=(newJSON)=>{setJSON(newJSON)}

  /*useEffect(()=>{
    handleFile(<Data data={file}/>)
    console.log("useEffect: "+Object.keys(file[0]));
  },[json]);*/
  
  return(
    <div className="flex flex-row min-h-screen justify-center items-center ">
      <Excel setFile={handleFile} setPhone={handlePhone} setData={handleData} setJSON={handleJSON} />
      <Send data={data} phone={phone}/>
      </div>
  );
}

export default App;
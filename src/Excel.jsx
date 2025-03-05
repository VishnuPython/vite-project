import {useState } from "react";
import Data from "./Data.JSX";
import * as XLSX from 'xlsx';
import { htmlPrefilter } from "jquery";
//import jsonToTable, * as JSON from "json-to-table";

const Excel=({setFile,setPhone,setData,setJSON})=>{
    //const [data,setData]=useState();

    const [excelFile,setExcelFile]=useState([]);
    let phone=[];
    let data=[];

    const addPhone=(i)=>{
        phone.push(i.phone);
        delete i.phone;
    }

    const addData=(i)=>{data.push(JSON.stringify(i));}

    let sheetData;

    const handleExcelFile=(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();  
        reader.onload=(event)=>{
            const excel=XLSX.read(event.target.result,{type:'binary'});
            const sheetName=excel.SheetNames[0];
            const sheet=excel.Sheets[sheetName];
            sheetData=XLSX.utils.sheet_to_json(sheet);
            setExcelFile(sheetData);

            setFile(htmlFile);
            sheetData.forEach(addPhone);
            sheetData.forEach(addData);
            setPhone(phone);
            setData(data);
            setJSON(true);
            console.log(sheetData);
            console.log(phone);
            console.log("Array:"+data);
            //console.log(JSON.stringify(sheetData));
        }

        reader.readAsArrayBuffer(file);

    }
    return(<>
           <div>
           <input type="file" onChange={handleExcelFile} className="text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50  hover:file:text-amber-700"/>
           </div>
           <div className="absolute top-100 bottom-20 ">
           {excelFile.length>0 && (
            <table className="table-auto w-full bg-white border border-gray-300">
                <thead className="bg-pink-500 text-white">
                    <tr>
                        {Object.keys(excelFile[0]).map(key=>(
                            <th key={key} className="border border-gray-300 px-4 py-2">{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {excelFile.map((row,index)=>(
                        <tr key={index}>
                            {Object.values(row).map((value,index)=>(
                                <td key={index} className="border border-gray-300 px-4 py-2">{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
           )}
           </div>
           </>);
    
}

export default Excel;

/*const Excel=({setFile})=>{
    const [data,setData]=useState();

    const phone=(i)=>{
        console.log(i.phone);
    }

    const handleExcelFile=(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();


        reader.onload=(event)=>{
            const excel=XLSX.read(event.target.result,{type:'binary'});
            const sheetName=excel.SheetNames[0];
            const sheet=excel.Sheets[sheetName];
            const sheetData=XLSX.utils.sheet_to_json(sheet);
            setData(sheetData);
            setFile(sheetData);
            //sheetData.forEach(phone)
        };

        reader.readAsBinaryString(file);

        
    }
    return(<div>
           <input type="file" onChange={handleExcelFile}/>
            <p>{JSON.stringify(data,null,2)}</p>
            </div>);
    
}*/
const Data=({data})=>{

    const headers=Object.keys(data[0]);
    let newData=[];
    const rows=data.map(i=>Object.values(i));

    return(
    <table>
      <thead>
        <tr>
          {headers.map(header=><th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((rows,index)=>(
            <tr>
                {rows.map((cell,index)=><td key={index}>{cell}</td>)}
            </tr>
        ))}
      </tbody>
    </table>
    );
  }

  export default Data;
  
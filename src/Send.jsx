import axios from "axios";

/*function Send({data}){
    //console.log("Data: "+JSON.stringify(data.data[0]));
    const url="https://api.textbee.dev/api/v1";
    const key="43722b75-ea63-4693-b80d-abd46ffd001c";
    const id="67b1e4737add5ffeac34589c";

    async function send(i){
        JSON.stringify(i);
        console.log("Phone: "+i);
        //const obj=JSON.parse(i);
        try{
            const res=await axios.post(`${url}/gateway/devices/${id}/send-sms`,{
                recipients:["+91"+i.phone],
                message:JSON.stringify(i)},
                {
                    headers:{'x-api-key':key}
                },
            );
            console.log("App-->"+i);
            console.log(res.status);
        }
        catch(e){
            console.log(e);
        }
    }

    function api(){
        console.log("API-->"+data)
        for(let i in data){
            console.log("i-->"+data[i]);
            send(data[i]);
        }
    }

    return( 
        <button onClick={api}>Send</button>
    );
}*/

function Send({data,phone}){
    
    //console.log("Data: "+JSON.stringify(data.data[0]));
    const url="https://api.textbee.dev/api/v1";
    const key="43722b75-ea63-4693-b80d-abd46ffd001c";
    const id="67b1e4737add5ffeac34589c";
    const len=data.length;

    function send(){
        for(let i=0;i<len;i++){
            api(data[i],phone[i]);
        }
    }

    async function api(sendData,sendPhone){
        console.log("Phone: "+sendPhone);
        //const obj=JSON.parse(i);
        try{
            const res=await axios.post(`${url}/gateway/devices/${id}/send-sms`,{
                recipients:["+91"+sendPhone],
                message:sendData},
                {
                    headers:{'x-api-key':key}
                },
            );
            console.log("App-->"+sendData);
            console.log(res.status);
        }
        catch(e){
            console.log(e);
        }
    }

    return( 
        <div>
            <button onClick={send} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
        </div>
    );
}

export default Send;
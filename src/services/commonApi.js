import axios  from "axios";

export const commonApi =async (httpRequest, url, requestBody) =>{
    const reqConfig = {
        method: httpRequest,
        url,  //key-value same - key only
        data: requestBody,
        headers:{"Content-Type":"application/json"}
    }
   return  await axios(reqConfig).then((result=>{
        return   result
    })).catch((error=>{
        return error
    }))
}
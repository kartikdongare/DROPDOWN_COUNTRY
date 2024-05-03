import axios from "axios"

export const getCountryData=async()=>{
    const res=await axios.get(`https://countriesnow.space/api/v0.1/countries`);
    return res
}

export async function getData(country:any) {
    console.log( country, "coutry");
    const data = await axios.get("https://countriesnow.space/api/v0.1/countries");
    const x = data?.data?.data;
    const citys = x.filter((ele: any) => ele?.country === country);
    return citys[0]?.cities;
  }
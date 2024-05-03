import axios from "axios";
import {getData} from '../../Api'
const page = async({params}:{params:{city:string}}) => {
// console.log(params.city,'city')
const country=await getData(params.city)
// console.log(country,'country')
  return (
    <div>
     <div>
      Select City:-
      <select name="" id="" >
        <option defaultValue={"country"}>Select Country</option>
        {country &&
          country.map((ele: any) => (
            <option value={ele} key={ele}>
              {ele}
            </option>
          ))}
      </select>
     
    </div>
    </div>
  )
}

// export async function getData(country:any) {
//   console.log( country, "coutry");
//   const data = await axios.get("https://countriesnow.space/api/v0.1/countries");
//   const x = data?.data?.data;
//   const citys = x.filter((ele: any) => ele?.country === country);
//   return citys[0]?.cities;
// }
export default page


"use client";
import React, { useEffect, useState } from "react";
import { getCountryData } from "../Api";
import { useRouter } from "next/navigation";
const page = () => {
  const [countryData, setCountryData] = useState("");
  const [country, setCountry] = useState("");
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const res = await getCountryData();
      setCountryData(res?.data?.data);
    })();
  }, []);

  const handleChange = (e: any) => {
    setCountry(e.target.value);
  };
  useEffect(() => {
    router.push(`/country/${encodeURIComponent(country)}`);
  }, [country]);
  return (
    <div>
        Select Country:-
      <select name="" id="" onChange={handleChange}>
        <option defaultValue={"country"}>Select Country</option>
        {countryData &&
          countryData.map((ele: any) => (
            <option value={ele.country} key={ele.country}>
              {ele.country}
            </option>
          ))}
      </select>
     
    </div>
  );
};



export default page;

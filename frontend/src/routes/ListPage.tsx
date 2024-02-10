import {List} from "../components/List";
import {useState} from "react";
import {FormType} from "common/src/FormType";
import axios from "axios";

export function ListPage(){
    const [data, setData] = useState<FormType[]>([]);

    async function get(){
        try{
            const response = await axios.get('api/med', {headers: {"Content-Type": "application/json"}})
            if (response.status != 200){
                throw new Error("Failed to fetch data")
            }

            const d = await response.data;
            setData(d);
            console.log(d);
        }catch (e){
            console.log(e);
        }
        console.log(data)
    }

    return (
        <div>
            <button className={"bg-gray-100 w-20 h-20"} onClick={get}>Get Data</button>
            {data?.length > 0 && <List data={data}/>}
        </div>

    )
}
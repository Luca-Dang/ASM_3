import React, {ChangeEvent, FormEvent, useState} from "react";
import {FormType} from "common/src/FormType";
import axios from "axios";

export function MedicalForm(){
    const [name, setName] =useState<string>('');
    const [location, setLocation] =useState<string>('');
    const [medName, setMedName] =useState<string>('');
    const [quantity, setQuantity] =useState<string>('');
    const [des, setDescription] =useState<string>('');
    const [priority, setPriority] = useState<string>('Emergency');
    const [assign, setAssign] = useState<string>('Unassigned');
    function handleInputName(e: ChangeEvent<HTMLInputElement>){
        setName(e.target.value);

    }
    function handleInputLocation(e: ChangeEvent<HTMLInputElement>){
        setLocation(e.target.value);
    }
    function handleInputMedName(e: ChangeEvent<HTMLInputElement>){
        setMedName(e.target.value);
    }
    function handleInputQuantity(e: ChangeEvent<HTMLInputElement>){
        setQuantity(e.target.value);
    }
    function handleInputDes(e: ChangeEvent<HTMLTextAreaElement>){
        setDescription(e.target.value);
    }
    function handlePriority(e: ChangeEvent<HTMLSelectElement>){
        setPriority(e.target.value);

    }

    function handleAssign(e: ChangeEvent<HTMLSelectElement>){
        setAssign(e.target.value);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const a: FormType = {
            name: name,
            location: location,
            medName: medName,
            quantity: quantity,
            priority: priority,
            asm: assign,
            des: des,
        }
        try{
            const response = await axios.post('api/med', a, {headers: {'Content-type': 'application/json'}})
            if (response.status != 200){
                throw new Error("Failed to fetch data")
            }
            const data = await response.data
            console.log(data);
        }catch (e){
            console.log(e)
        }
        window.location.href = '/list';
    }
    return (
        <div className="bg-[url('./bwh-building-promo.png')] bg-cover bg-center h-screen flex items-center justify-center">
            <div className={"flex bg-white flex-col w-3/4 h-4/5 rounded-[20px]"}>
                <div className={"text-center text-2xl p-5 text-gray-500 pb-10"}>Medical Delivery Service</div>
                <form className={"h-full flex flex-col "} onSubmit={handleSubmit}>
                    <div className={"flex flex-row gap-10 justify-center h-2/3"}>
                        <div className={"flex flex-col gap-x-10 w-1/2 pl-10"}>
                            <label className={"pb-2"}>Employee</label>
                            <input placeholder={"Name of Employee making request"}
                                   className={"p-5 bg-gray-100 rounded-[10px]"} onInput={handleInputName}/>
                            <label className={"py-2"}>Location</label>
                            <input placeholder={"Delivery Location"} className={"p-5 bg-gray-100 rounded-[10px]"}
                                   onInput={handleInputLocation}/>
                            <div className={"flex flex-row gap-1 w-full"}>
                                <div className={"flex flex-col w-2/3"}>
                                    <label className={"py-2"}>Medicine Name</label>
                                    <input placeholder={"Enter Medicine name"}
                                           className={"p-5 bg-gray-100 rounded-[10px] w-full"}
                                           onInput={handleInputMedName}/>
                                </div>
                                <div className={"flex flex-col w-1/3"}>
                                    <label className={"py-2"}>Quantity</label>
                                    <input placeholder={"Enter Quantity"}
                                           className={"p-5 bg-gray-100 rounded-[10px] w-full"}
                                           onInput={handleInputQuantity}/>
                                </div>
                            </div>
                            <div className={"flex flex-row gap-3 w-full pt-2"}>
                                <div className={"w-1/2 flex flex-col"}>
                                    <label className={"py-2"}>Priority</label>
                                    <select className={"bg-gray-100 rounded-[8px] w-full p-2 text-gray-500"} onChange={handlePriority}>
                                        <option>Emergency</option>
                                        <option >High</option>
                                        <option >Medium</option>
                                        <option >Low</option>
                                    </select>
                                </div>
                                <div className={"w-1/2 flex flex-col"}>
                                    <label className={"py-2"}>Assigment</label>
                                    <select className={"bg-gray-100 rounded-[8px] w-full p-2 text-gray-500"} onChange={handleAssign}>
                                        <option>Unassigned</option>
                                        <option>In Progress</option>
                                        <option>Completed</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-x-10 w-1/2 pr-10"}>
                            <label>Description</label>
                            <textarea placeholder={"Enter necessary description"}
                                      className={"h-full p-5 bg-gray-100 rounded-[10px]"} onInput={handleInputDes}/>
                        </div>
                    </div>
                    <div className={"justify-center items-center flex p-10"}>
                        <button className={"p-5 bg-blue-600 w-1/4 rounded-[20px] text-white"}>Submit</button>
                    </div>
                </form>

            </div>
        </div>

    )
}
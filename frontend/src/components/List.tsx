import {FormType} from "common/src/FormType";

export function List(props: {data: FormType[]}){
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>MedName</th>
                    <th>Quantity</th>
                    <th>Priority</th>
                    <th>Assigment</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {props.data.map((item) => (
                <tr key={item.name}>
                    <td>{item.location}</td>
                    <td>{item.medName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.priority}</td>
                    <td>{item.asm}</td>
                    <td>{item.des}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );

}
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetData = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/Exampleopp')
            .then(res => {
                setdata(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <table className='border table-bordered table'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Password</th>
                                <th>Edit & Delete</th>
                            </tr>
                        </thead>
                        <tbody>{
                            data.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.Name}</td>
                                        <td>{data.Password}</td>
                                        <td className='text-danger'>edit & delete</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GetData;

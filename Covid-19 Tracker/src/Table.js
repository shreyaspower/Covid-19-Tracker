import React, { useState, useEffect } from 'react';
import './Table.css'

function Table() {

    
const [states, setStates] = useState([]);
const getStateData = async () => {
    const res = await fetch('https://api.covid19india.org/data.json');
    const actualData =await res.json();
    console.log(actualData.statewise);
    setStates(actualData.statewise);}
  useEffect(() => {
  // async send request to server, wait for it, do something with the info
      getStateData();
  }, [states]);

    return (
        <div className="app_table">
            <table className="table_hover">
                <thead className="thead_dark">
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody className="table_body">
                    {
                        states.map((state) =>
                         
                              <tr>
                                  <td>{state.state}</td>
                                  <td>{state.confirmed}</td>
                                  <td>{state.active}</td>
                                  <td>{state.recovered}</td>
                                  <td>{state.deaths}</td>
                              </tr>
                          
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default Table;

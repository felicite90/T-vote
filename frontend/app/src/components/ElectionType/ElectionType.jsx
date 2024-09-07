import { React, useState, useEffect } from 'react';
import axios from 'axios';
import ElectionTypeTable from './ElectionTypeTable';

function ElectionType() {
    const [electionTypes, setElectionTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Ici on met toutes les fonctions qui seront appelee lorsque la page sera prete
        fetchData();
    }, []);

    const fetchData = async () => {
        // Recuperer les types d'elections
        try {
            // Ici on va faire un appel GET a notre api
            const response = await axios.get("http://127.0.0.1:8000/api/electiontype/");
            setElectionTypes(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container mt-2'>
            <div className="row justify-content-center d-flex">
                <div className="card">
                    <div className="card-header">
                        <h4>Liste des types d'élection</h4>
                    </div>
                    <div className="card-body">
                        <ElectionTypeTable
                            electionTypes={electionTypes}
                            setElectionTypes={setElectionTypes}
                            isLoading={isLoading}
                            fetchData={fetchData}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElectionType

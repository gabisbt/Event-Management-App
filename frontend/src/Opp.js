import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

//the Opp component is a form that allows the user to insert, update, and delete data from the database.
const Opp = () => {
    const navigate = useNavigate();

    const [ID_Departament, setIdDepartament] = useState('');
    const [NumeDepartament, setNumeDepartament] = useState('');
    const [Atributii, setAtributii] = useState('');
    const [Cost, setCost] = useState('');

    const [ID_Locatii, setID_Locatii] = useState('');
    const [NumeLocatie, setNumeLocatie] = useState('');
    const [Judet, setJudet] = useState('');
    const [Oras, setOras] = useState('');
    const [Strada, setStrada] = useState('');
    const [Capacitate, setCapacitate] = useState('');

    const handleBack = () => {
        navigate("/");
    };

    const onQueryClick = () => {
        navigate("/Query");
    };

    //the handleSubmit function sends a POST request to the server to insert a new department into the database.
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3080/departamente', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                departament: ID_Departament,
                numeDepartament: NumeDepartament,
                atributii: Atributii,
                cost: Cost
            })
        });
    };

    //the handleSubmit1 function sends a POST request to the server to insert a new location into the database.
    const handleSubmit1 = (event) => {
        event.preventDefault();

        const locatie = {
            ID_Locatii,
            NumeLocatie,
            Judet,
            Oras,
            Strada,
            Capacitate,
        };

        event.preventDefault();
        fetch('http://localhost:3080/locatii', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                locatie
            )
        });
    };

    //the handleUpdate function sends a PUT request to the server to update a department in the database.
    const handleUpdate = (event) => {
        event.preventDefault();

        // Collect the data from input fields
        const departament = {
            ID_Departament,
            NumeDepartament,
            Atributii,
            Cost,
        };

        fetch('http://localhost:3080/departamente', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                departament
            )
        });
    };

    //the handleUpdate1 function sends a PUT request to the server to update a location in the database.
    const handleUpdate1 = (event) => {
        event.preventDefault();

        // Collect the data from input fields
        const locatie = {
            ID_Locatii,
            NumeLocatie,
            Judet,
            Oras,
            Strada,
            Capacitate,
        };

        fetch('http://localhost:3080/locatii', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                locatie
            )
        });
    };

    //the handleDelete function sends a DELETE request to the server to delete a department from the database.
    const handleDelete = (event) => {
        event.preventDefault();

        // Collect the data from input fields
        const departament = {
            ID_Departament,
            NumeDepartament,
        };

        fetch('http://localhost:3080/departamente', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                departament
            )
        });
    }

    //the handleDelete1 function sends a DELETE request to the server to delete a location from the database.
    const handleDelete1 = (event) => {
        event.preventDefault();

        // Collect the data from input fields
        const locatie = {
            ID_Locatii,
        };

        fetch('http://localhost:3080/locatii', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                locatie
            )
        });
    }

    return (
        <div>
            <input
                className="inputButton"
                type="button"
                onClick={handleBack}
                value="Home"
            />
            <input
                className={"inputButton"}
                type="button"
                onClick={onQueryClick}
                value={"Query-uri"}
            />
            <div className="lol">
                <th>
                    <div className="departamentInputContainer">
                        <label>ID Departament:</label>
                        <input
                            type="number"
                            className="inputField"
                            placeholder="ID Departament"
                            value={ID_Departament}
                            onChange={(event) => setIdDepartament(event.target.value)}
                        ></input>
                    </div>

                    <div className="departamentInputContainer">
                        <label>Nume Departament:</label>
                        <textarea
                            type="text"
                            className="inputField"
                            placeholder="Nume Departament"
                            value={NumeDepartament}
                            onChange={(event) => setNumeDepartament(event.target.value)}
                        ></textarea>
                    </div>

                    <div className="departamentInputContainer">
                        <label>Atributii:</label>
                        <textarea
                            type="text"
                            className="inputField"
                            placeholder="Atributii"
                            value={Atributii}
                            onChange={(event) => setAtributii(event.target.value)}
                        ></textarea>
                    </div>

                    <div className="departamentInputContainer">
                        <label>Cost:</label>
                        <input
                            type="number"
                            className="inputField"
                            placeholder="Cost"
                            value={Cost}
                            onChange={(event) => setCost(event.target.value)}
                        ></input>
                    </div>

                    <input
                        className="inputButton"
                        type="button"
                        onClick={handleSubmit}
                        value="Insert Departament"
                    />

                    <input
                        className="inputButton"
                        type="button"
                        onClick={handleUpdate}
                        value="Update Departament"
                    />

                    <input
                        className="inputButton"
                        type="button"
                        onClick={handleDelete}
                        value="Delete Departament"
                    />
                </th>

                <th>
                    <div className="locatieInputContainer">
                        <label>ID Locatie:</label>
                        <input
                            type="number"
                            className="inputField"
                            placeholder="ID Locatie"
                            value={ID_Locatii}
                            onChange={(event) => setID_Locatii(event.target.value)}
                        />
                    </div>

                    <div className="locatieInputContainer">
                        <label>Nume Locatie:</label>
                        <textarea
                            type="text"
                            className="inputField"
                            placeholder="Nume Locatie"
                            value={NumeLocatie}
                            onChange={(event) => setNumeLocatie(event.target.value)}
                        ></textarea>
                    </div>

                    <div className="locatieInputContainer">
                        <label>Judet:</label>
                        <textarea
                            type="text"
                            className="inputField"
                            placeholder="Judet"
                            value={Judet}
                            onChange={(event) => setJudet(event.target.value)}
                        ></textarea>
                    </div>

                    <div className="locatieInputContainer">
                        <label>Oras:</label>
                        <textarea
                            type="text"
                            className="inputField"
                            placeholder="Oras"
                            value={Oras}
                            onChange={(event) => setOras(event.target.value)}
                        ></textarea>
                    </div>

                    <div className="locatieInputContainer">
                        <label>Strada:</label>
                        <textarea
                            type="text"
                            className="inputField"
                            placeholder="Strada"
                            value={Strada}
                            onChange={(event) => setStrada(event.target.value)}>
                        </textarea>
                    </div>

                    <div className="locatieInputContainer">
                        <label>Capacitate:</label>
                        <input
                            type="number"
                            className="inputField"
                            placeholder="Capacitate"
                            value={Capacitate}
                            onChange={(event) => setCapacitate(event.target.value)}
                        ></input>
                    </div>

                    <input
                        className="inputButton"
                        type="button"
                        onClick={handleSubmit1}
                        value="Insert Locatie"
                    />

                    <input
                        className="inputButton"
                        type="button"
                        onClick={handleUpdate1}
                        value="Update Locatie"
                    />

                    <input
                        className="inputButton"
                        type="button"
                        onClick={handleDelete1}
                        value="Delete Locatie"
                    />
                </th>
            </div>

        </div>

    );
};

//export the Opp component to be used in App.js
export default Opp;






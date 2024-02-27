import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//the component also uses the useEffect hook to make a request to the server to fetch data from the database when the component is first rendered.

//the Query component is a React component that displays a list of buttons.
const Query = () => {
    const [query1, setquery1] = useState([]);
    const navigate = useNavigate();
    //the useNavigate hook is used to navigate to the home page when the "Home" button is clicked. 
    const [showQuery1Header, setQuery1Header] = useState(false);
    const [showQuery1Table, setQuery1Table] = useState(false);
    //the component uses the useState hook to manage the state of the data and the showQueryHeader and showQueryTable variables. 

    const [query2, setquery2] = useState([]);
    const [showQuery2Header, setQuery2Header] = useState(false);
    const [showQuery2Table, setQuery2Table] = useState(false);


    const [query3, setquery3] = useState([]);
    const [showQuery3Header, setQuery3Header] = useState(false);
    const [showQuery3Table, setQuery3Table] = useState(false);

    const [query4, setquery4] = useState([]);
    const [showQuery4Header, setQuery4Header] = useState(false);
    const [showQuery4Table, setQuery4Table] = useState(false);

    const [query5, setquery5] = useState([]);
    const [showQuery5Header, setQuery5Header] = useState(false);
    const [showQuery5Table, setQuery5Table] = useState(false);

    const [query6, setquery6] = useState([]);
    const [showQuery6Header, setQuery6Header] = useState(false);
    const [showQuery6Table, setQuery6Table] = useState(false);

    const [query7, setquery7] = useState([]);
    const [showQuery7Header, setQuery7Header] = useState(false);
    const [showQuery7Table, setQuery7Table] = useState(false);

    const [query8, setquery8] = useState([]);
    const [showQuery8Header, setQuery8Header] = useState(false);
    const [showQuery8Table, setQuery8Table] = useState(false);

    const [query9, setquery9] = useState([]);
    const [showQuery9Header, setQuery9Header] = useState(false);
    const [showQuery9Table, setQuery9Table] = useState(false);

    const [query10, setquery10] = useState([]);
    const [showQuery10Header, setQuery10Header] = useState(false);
    const [showQuery10Table, setQuery10Table] = useState(false);

    const [capacity, setCapacity] = useState('');
    const [capacity1, setCapacity1] = useState('');


    const handleBack = () => {
        navigate("/");
    };

    //when a button is clicked, the component makes a request to the server to fetch data from the database.
    const handleButtonClick1 = () => {
        fetch('http://localhost:3080/query1')
            .then(response => response.json())
            .then(data => {
                setquery1(data);
                setQuery1Header(true);
                setQuery1Table(true);
                setQuery2Header(false);
                setQuery2Table(false);
                setQuery3Header(false);
                setQuery3Table(false);
                setQuery4Header(false);
                setQuery4Table(false);
                setQuery5Header(false);
                setQuery5Table(false);
                setQuery6Header(false);
                setQuery6Table(false);
                setQuery7Header(false);
                setQuery7Table(false);
                setQuery8Header(false);
                setQuery8Table(false);
                setQuery9Header(false);
                setQuery9Table(false);
                setQuery10Header(false);
                setQuery10Table(false);
            })
            .catch(error => {
                console.error('Error fetching departamentev:', error);
            });
    };

    //
    const handleButtonClick2 = async () => {
        let capacity = '';

        const inputCapacity = document.querySelector('#capacity');
        console.log(inputCapacity);
        if (inputCapacity) {
            capacity = inputCapacity.value;
        }
        console.log(capacity);
        const data = {
            capacity: capacity
        }
        setCapacity(capacity);
        if (capacity) {
            await fetch(`http://localhost:3080/query2`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
            )
                .then(response => response.json())
                .then(data => {
                    setquery2(data);
                    setQuery2Header(true);
                    setQuery2Table(true);
                    setQuery1Header(false);
                    setQuery1Table(false);
                    setQuery3Header(false);
                    setQuery3Table(false);
                    setQuery4Header(false);
                    setQuery4Table(false);
                    setQuery5Header(false);
                    setQuery5Table(false);
                    setQuery6Header(false);
                    setQuery6Table(false);
                    setQuery7Header(false);
                    setQuery7Table(false);
                    setQuery8Header(false);
                    setQuery8Table(false);
                    setQuery9Header(false);
                    setQuery9Table(false);
                    setQuery10Header(false);
                    setQuery10Table(false);
                    inputCapacity.value = '';
                })
                .catch(error => {
                    console.error('Error fetching departamentev:', error);
                });
        } else {
            console.error('Please enter a capacity value');
        }
    };

    const handleButtonClick3 = () => {
        fetch('http://localhost:3080/query3')
            .then(response => response.json())
            .then(data => {
                setquery3(data);
                setQuery3Header(true);
                setQuery3Table(true);
                setQuery1Header(false);
                setQuery1Table(false);
                setQuery2Header(false);
                setQuery2Table(false);
                setQuery4Header(false);
                setQuery4Table(false);
                setQuery5Header(false);
                setQuery5Table(false);
                setQuery6Header(false);
                setQuery6Table(false);
                setQuery7Header(false);
                setQuery7Table(false);
                setQuery8Header(false);
                setQuery8Table(false);
                setQuery9Header(false);
                setQuery9Table(false);
                setQuery10Header(false);
                setQuery10Table(false);
            })
            .catch(error => {
                console.error('Error fetching departamentev:', error);
            });
    };

    const handleButtonClick4 = () => {
        fetch('http://localhost:3080/query4')
            .then(response => response.json())
            .then(data => {
                setquery4(data);
                setQuery4Header(true);
                setQuery4Table(true);
                setQuery1Header(false);
                setQuery1Table(false);
                setQuery2Header(false);
                setQuery2Table(false);
                setQuery3Header(false);
                setQuery3Table(false);
                setQuery5Header(false);
                setQuery5Table(false);
                setQuery6Header(false);
                setQuery6Table(false);
                setQuery7Header(false);
                setQuery7Table(false);
                setQuery8Header(false);
                setQuery8Table(false);
                setQuery9Header(false);
                setQuery9Table(false);
                setQuery10Header(false);
                setQuery10Table(false);
            })
            .catch(error => {
                console.error('Error fetching departamentev:', error);
            });
    }

    const handleButtonClick5 = () => {
        fetch('http://localhost:3080/query5')
            .then(response => response.json())
            .then(data => {
                setquery5(data);
                setQuery5Header(true);
                setQuery5Table(true);
                setQuery1Header(false);
                setQuery1Table(false);
                setQuery2Header(false);
                setQuery2Table(false);
                setQuery3Header(false);
                setQuery3Table(false);
                setQuery4Header(false);
                setQuery4Table(false);
                setQuery6Header(false);
                setQuery6Table(false);
                setQuery7Header(false);
                setQuery7Table(false);
                setQuery8Header(false);
                setQuery8Table(false);
                setQuery9Header(false);
                setQuery9Table(false);
                setQuery10Header(false);
                setQuery10Table(false);
            })
            .catch(error => {
                console.error('Error fetching departamentev:', error);
            });
    }

    const handleButtonClick6 = () => {
        fetch('http://localhost:3080/query6')
            .then(response => response.json())
            .then(data => {
                setquery6(data);
                setQuery6Header(true);
                setQuery6Table(true);
                setQuery1Header(false);
                setQuery1Table(false);
                setQuery2Header(false);
                setQuery2Table(false);
                setQuery3Header(false);
                setQuery3Table(false);
                setQuery4Header(false);
                setQuery4Table(false);
                setQuery5Header(false);
                setQuery5Table(false);
                setQuery7Header(false);
                setQuery7Table(false);
                setQuery8Header(false);
                setQuery8Table(false);
                setQuery9Header(false);
                setQuery9Table(false);
                setQuery10Header(false);
                setQuery10Table(false);
            })
            .catch(error => {
                console.error('Error fetching departamentev:', error);
            });
    }

    const handleButtonClick7 = () => {
        fetch('http://localhost:3080/query7')
            .then(response => response.json())
            .then(data => {
                setquery7(data);
                setQuery7Header(true);
                setQuery7Table(true);
                setQuery1Header(false);
                setQuery1Table(false);
                setQuery2Header(false);
                setQuery2Table(false);
                setQuery3Header(false);
                setQuery3Table(false);
                setQuery4Header(false);
                setQuery4Table(false);
                setQuery5Header(false);
                setQuery5Table(false);
                setQuery6Header(false);
                setQuery6Table(false);
                setQuery8Header(false);
                setQuery8Table(false);
                setQuery9Header(false);
                setQuery9Table(false);
                setQuery10Header(false);
                setQuery10Table(false);
            })
            .catch(error => {
                console.error('Error fetching departamentev:', error);
            });
    }

    const handleButtonClick8 = () => {
        fetch('http://localhost:3080/query8')
            .then(response => response.json())
            .then(data => {
                setquery8(data);
                setQuery8Header(true);
                setQuery8Table(true);
                setQuery1Header(false);
                setQuery1Table(false);
                setQuery2Header(false);
                setQuery2Table(false);
                setQuery3Header(false);
                setQuery3Table(false);
                setQuery4Header(false);
                setQuery4Table(false);
                setQuery5Header(false);
                setQuery5Table(false);
                setQuery6Header(false);
                setQuery6Table(false);
                setQuery7Header(false);
                setQuery7Table(false);
                setQuery9Header(false);
                setQuery9Table(false);
                setQuery10Header(false);
                setQuery10Table(false);
            })
            .catch(error => {
                console.error('Error fetching departamentev:', error);
            });
    }

    const handleButtonClick9 = () => {
        fetch('http://localhost:3080/query9')
            .then(response => response.json())
            .then(data => {
                setquery9(data);
                setQuery9Header(true);
                setQuery9Table(true);
                setQuery1Header(false);
                setQuery1Table(false);
                setQuery2Header(false);
                setQuery2Table(false);
                setQuery3Header(false);
                setQuery3Table(false);
                setQuery4Header(false);
                setQuery4Table(false);
                setQuery5Header(false);
                setQuery5Table(false);
                setQuery6Header(false);
                setQuery6Table(false);
                setQuery7Header(false);
                setQuery7Table(false);
                setQuery8Header(false);
                setQuery8Table(false);
                setQuery10Header(false);
                setQuery10Table(false);
            })
            .catch(error => {
                console.error('Error fetching departamentev:', error);
            });
    }

    const handleButtonClick10 = async () => {
        let capacity1 = '';

        const inputCapacity1 = document.querySelector('#capacity1');
        console.log(inputCapacity1);
        if (inputCapacity1) {
            capacity1 = inputCapacity1.value;
        }
        console.log(capacity1);
        const data = {
            capacity1: capacity1
        }
        setCapacity1(capacity1);
        if (capacity1) {
            await fetch(`http://localhost:3080/query10`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
            )
                .then(response => response.json())
                .then(data => {
                    setquery10(data);
                    setQuery10Header(true);
                    setQuery10Table(true);
                    setQuery2Header(false);
                    setQuery2Table(false);
                    setQuery1Header(false);
                    setQuery1Table(false);
                    setQuery3Header(false);
                    setQuery3Table(false);
                    setQuery4Header(false);
                    setQuery4Table(false);
                    setQuery5Header(false);
                    setQuery5Table(false);
                    setQuery6Header(false);
                    setQuery6Table(false);
                    setQuery7Header(false);
                    setQuery7Table(false);
                    setQuery8Header(false);
                    setQuery8Table(false);
                    setQuery9Header(false);
                    setQuery9Table(false);
                    inputCapacity1.value = '';
                })
                .catch(error => {
                    console.error('Error fetching departamentev:', error);
                });
        } else {
            console.error('Please enter a capacity value');
        }
    };


    const onOppClick = () => {
        navigate("/Opp");
    };

    //The data is then displayed in a table below the buttons. 
    return (
        <div className="mainContainerQuery">

            <div className={'ups'}>
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={handleBack}
                    value="Home"
                />
                <input
                    className={"inputButton"}
                    type="button"
                    onClick={onOppClick}
                    value={"Opp"}
                />
            </div>

            <div className={'lol'}>
                <th>
                    <input
                        className={'inputButton'}
                        type="button"
                        onClick={handleButtonClick1}
                        value="Query1"
                    />
                    <div className="casutaValidare">
                        <input
                            className={'inputButton'}
                            type="button"
                            onClick={handleButtonClick2}
                            value="Query2"
                        />
                        <input
                            type="text"
                            id="capacity"
                        />
                    </div>
                    <input
                        className={'inputButton'}
                        type="button"
                        onClick={handleButtonClick3}
                        value="Query3"
                    />
                    <input
                        className={'inputButton'}
                        type="button"
                        onClick={handleButtonClick4}
                        value="Query4"
                    />
                    <input
                        className={'inputButton'}
                        type="button"
                        onClick={handleButtonClick5}
                        value="Query5"
                    />
                    <input
                        className={'inputButton'}
                        type="button"
                        onClick={handleButtonClick6}
                        value="Query6"
                    />
                </th>

                <th>
                    <input
                        className={'inputButton'}
                        type="button"
                        onClick={handleButtonClick7}
                        value="Query7"
                    />
                    <input
                        className={'inputButton'}
                        type="button"
                        onClick={handleButtonClick8}
                        value="Query8"
                    />
                    <input
                        className={'inputButton'}
                        type="button"
                        onClick={handleButtonClick9}
                        value="Query9"
                    />
                    <input
                        className={'inputButton'}
                        type="button"
                        onClick={handleButtonClick10}
                        value="Query10"
                    />
                    <input
                        type="text"
                        id="capacity1"
                    />
                </th>
            </div>


            {showQuery1Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza toate datele despre Evenimentele ce au avut loc in orasul Brasov</span>
                    <table className="tableStyle">
                        <thead>

                            {showQuery1Header && (
                                <tr className="lost1">
                                    <th className="th1">ID_Eveniment</th>
                                    <th className="th1">NumeEveniment</th>
                                    <th className="th1">Data</th>
                                    <th className="th1">ID_Client</th>
                                    <th className="th1">Oras</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query1.map((query, index) => (
                                <tr key={index}>
                                    <td >{query.ID_Eveniment}</td>
                                    <td >{query.NumeEveniment}</td>
                                    <td>{query.Data.slice(0, 10)}</td>
                                    <td >{query.ID_Client}</td>
                                    <td >{query.Oras}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showQuery2Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza toate datele despre Evenimentele ce au avut loc in Locatii cu o capacitate de minim {capacity} de locuri</span>
                    <table className="tableStyle">
                        <thead>
                            {showQuery2Header && (
                                <tr className="lost1">
                                    <th className="th1">ID_Eveniment</th>
                                    <th className="th1">NumeEveniment</th>
                                    <th className="th1">Data</th>
                                    <th className="th1">Email Client</th>
                                    <th className="th1">ID_Locatie</th>
                                    <th className="th1">NumeLocatie</th>
                                    <th className="th1">Capacitate</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query2.map((quer2y, index) => (
                                <tr key={index}>
                                    <td >{quer2y.ID_Eveniment}</td>
                                    <td >{quer2y.NumeEveniment}</td>
                                    <td >{quer2y.Data.slice(0, 10)}</td>
                                    <td>{quer2y.ID_Client}</td>
                                    <td >{quer2y.ID_Locatie}</td>
                                    <td >{quer2y.NumeLocatie}</td>
                                    <td >{quer2y.Capacitate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showQuery3Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza toate datele despre departamentele care au contribuit la minim 2 evenimente</span>
                    <table className="tableStyle">
                        <thead>
                            {showQuery3Header && (
                                <tr className="lost1">
                                    <th className="th1"> ID_Departament</th>
                                    <th className="th1">NumeDepartament</th>
                                    <th className="th1">Atributii</th>
                                    <th className="th1">Cost</th>
                                    <th className="th1">NumarEvenimente</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query3.map((quer3y, index) => (
                                <tr key={index}>
                                    <td >{quer3y.ID_Departament}</td>
                                    <td >{quer3y.NumeDepartament}</td>
                                    <td >{quer3y.Atributii}</td>
                                    <td>{quer3y.Cost}</td>
                                    <td >{quer3y.NumerEvenimente}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showQuery4Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza toate datele despre locatiile in care s-au petrecut evenimente in luna noiembrie in anul 2023</span>
                    <table className="tableStyle">
                        <thead>
                            {showQuery4Header && (
                                <tr className="lost1">
                                    <th className="th1">ID_Locatie</th>
                                    <th className="th1">NumeLocatie</th>
                                    <th className="th1">Judet</th>
                                    <th className="th1">Oras</th>
                                    <th className="th1">Strada</th>
                                    <th className="th1">Capacitate</th>
                                    <th className="th1">NumeEveniment</th>
                                    <th className="th1">Data</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query4.map((quer4y, index) => (
                                <tr key={index}>
                                    <td >{quer4y.ID_Locatie}</td>
                                    <td >{quer4y.NumeLocatie}</td>
                                    <td >{quer4y.Judet}</td>
                                    <td>{quer4y.Oras}</td>
                                    <td >{quer4y.Strada}</td>
                                    <td >{quer4y.Capacitate}</td>
                                    <td >{quer4y.NumeEveniment}</td>
                                    <td >{quer4y.Data.slice(0, 10)}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showQuery5Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza toate datele despre furnizorii ce au oferit servicii evenimentului 'Revelion'</span>
                    <table className="tableStyle">
                        <thead>
                            {showQuery5Header && (
                                <tr className="lost1">
                                    <th className="th1">ID_Furnizor</th>
                                    <th className="th1">NumeFurnizor</th>
                                    <th className="th1">EmailFurnizor</th>
                                    <th className="th1">TelefonFurnizor</th>
                                    <th className="th1">ServiciiOferite</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query5.map((quer5y, index) => (
                                <tr key={index}>
                                    <td >{quer5y.ID_Furnizor}</td>
                                    <td >{quer5y.NumeFurnizor}</td>
                                    <td >{quer5y.EmailFurnizor}</td>
                                    <td>{quer5y.TelefonFurnizor}</td>
                                    <td >{quer5y.ServiciiOferite}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showQuery6Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza toate datele despre departamentele cu angajatii al caror nume incepe cu 'Pop'</span>
                    <table className="tableStyle">
                        <thead>
                            {showQuery6Header && (
                                <tr className="lost1">
                                    <th className="th1">ID_Departament</th>
                                    <th className="th1">NumeDepartament</th>
                                    <th className="th1">Atributii</th>
                                    <th className="th1">Cost</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query6.map((quer6y, index) => (
                                <tr key={index}>
                                    <td >{quer6y.ID_Departament}</td>
                                    <td >{quer6y.NumeDepartament}</td>
                                    <td >{quer6y.Atributii}</td>
                                    <td>{quer6y.Cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showQuery7Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza datele despre angajatii al caror departament are costul mai mic decat media costurilor tuturor departamentelor</span>
                    <table className="tableStyle">
                        <thead>
                            {showQuery7Header && (
                                <tr className="lost1">
                                    <th className="th1">ID_Angajat</th>
                                    <th className="th1">Nume</th>
                                    <th className="th1">Prenume</th>
                                    <th className="th1">Email</th>
                                    <th className="th1">NrTelefon</th>
                                    <th className="th1">Functie</th>
                                    <th className="th1">Nume.Departament</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query7.map((quer7y, index) => (
                                <tr key={index}>
                                    <td >{quer7y.ID_Angajat}</td>
                                    <td >{quer7y.Nume}</td>
                                    <td >{quer7y.Prenume}</td>
                                    <td>{quer7y.Email}</td>
                                    <td >{quer7y.NrTelefon}</td>
                                    <td >{quer7y.Functie}</td>
                                    <td >{quer7y.NumeDepartament}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showQuery8Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza toate datele despre angajatii ce lucreaza la departamentul cu costul cel mai mare</span>
                    <table className="tableStyle">
                        <thead>
                            {showQuery8Header && (
                                <tr className="lost1">
                                    <th className="th1">Nume</th>
                                    <th className="th1">Prenume</th>
                                    <th className="th1">Email</th>
                                    <th className="th1">NrTelefon</th>
                                    <th className="th1">Functie</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query8.map((quer8y, index) => (
                                <tr key={index}>
                                    <td >{quer8y.Nume}</td>
                                    <td >{quer8y.Prenume}</td>
                                    <td >{quer8y.Email}</td>
                                    <td>{quer8y.NrTelefon}</td>
                                    <td >{quer8y.Functie}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showQuery9Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza datele despre angajatii care lucreaza in departamentele ce au un cost mai mare decat costul mediu pentru un departament</span>
                    <table className="tableStyle">
                        <thead>
                            {showQuery9Header && (
                                <tr className="lost1">
                                    <th className="th1">ID_Angajat</th>
                                    <th className="th1">Nume</th>
                                    <th className="th1">Prenume</th>
                                    <th className="th1">Email</th>
                                    <th className="th1">NrTelefon</th>
                                    <th className="th1">Functie</th>
                                    <th className="th1">NumeDepartament</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query9.map((quer9y, index) => (
                                <tr key={index}>
                                    <td >{quer9y.ID_Angajat}</td>
                                    <td >{quer9y.Nume}</td>
                                    <td >{quer9y.Prenume}</td>
                                    <td>{quer9y.Email}</td>
                                    <td >{quer9y.NrTelefon}</td>
                                    <td >{quer9y.Functie}</td>
                                    <td >{quer9y.NumeDepartament}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showQuery10Table && (
                <div className="tableWrapper">
                    <span className="tableHeader">Afiseaza datele despre clientii care au platit pentru evenimentele ce au avut loc in locatiile cu capacitatea {capacity1}</span>
                    <table className="tableStyle">
                        <thead>
                            {showQuery10Header && (
                                <tr className="lost1">
                                    <th className="th1">ID_Client</th>
                                    <th className="th1">NumeClient</th>
                                    <th className="th1">PrenumeClient</th>
                                    <th className="th1">Email</th>
                                    <th className="th1">NrTelefon</th>
                                    <th className="th1">Judet</th>
                                    <th className="th1">Oras</th>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {query10.map((quer10y, index) => (
                                <tr key={index}>
                                    <td >{quer10y.ID_Client}</td>
                                    <td >{quer10y.NumeClient}</td>
                                    <td >{quer10y.PrenumeClient}</td>
                                    <td >{quer10y.Email}</td>
                                    <td >{quer10y.NrTelefon}</td>
                                    <td >{quer10y.Judet}</td>
                                    <td >{quer10y.Oras}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}



        </div>

    );
}
export default Query;
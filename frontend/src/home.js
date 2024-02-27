import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();
    //using hooks to store the data from the fetch
    const [evenimente, setEvenimente] = useState([]);
    const [clienti, setClienti] = useState([]);
    const [departamente, setDepartamente] = useState([]);
    const [locatii, setLocatii] = useState([]);
    const [angajati, setAngajati] = useState([]);
    const [furnizori, setFurnizori] = useState([]);
    const [departamentev, setDepartamentEvenimente] = useState([]);
    const [fe, setFurnizoriEveniment] = useState([]);

    const [showTable, setShowTable] = useState(false);
    const [showEvenimenteHeader, setShowEvenimenteHeader] = useState(false);
    const [showClientiHeader, setShowClientiHeader] = useState(false);
    const [showLocatiiHeader, setShowLocatiiHeader] = useState(false);
    const [showDepartamenteHeader, setShowDepartamenteHeader] = useState(false);
    const [showAngajatiHeader, setShowAngajatiHeader] = useState(false);
    const [showFurnizoriHeader, setShowFurnizoriHeader] = useState(false);
    const [showDepartamentEvHeader, setShowDepartamentEvHeader] = useState(false);
    const [showFurnizoriEvHeader, setShowFurnizoriEvHeader] = useState(false);

    const [showEvenimenteTable, setShowEvenimenteTable] = useState(false);
    const [showClientiTable, setShowClientiTable] = useState(false);
    const [showLocatiiTable, setShowLocatiiTable] = useState(false);
    const [showDepartamenteTable, setShowDepartamenteTable] = useState(false);
    const [showAngajatiTable, setShowAngajatiTable] = useState(false);
    const [showFurnizoriTable, setShowFurnizoriTable] = useState(false);
    const [showDepartamentEvTable, setShowDepartamentEvTable] = useState(false);
    const [showFurnizoriEvTable, setShowFurnizoriEvTable] = useState(false);

    //when the button is clicked, the user is logged out
    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user");
            props.setLoggedIn(false);
        } else {
            navigate("/login");
        }
    };

    //when the user clicks on the button, the data is fetched from the server
    const onEvenimenteClick = () => {
        fetch('http://localhost:3080/evenimente')
            .then(response => response.json())
            .then(data => {
                setEvenimente(data);
                setShowTable(true);
                setShowEvenimenteTable(true);
                setShowEvenimenteHeader(true);
                setShowClientiTable(false);
                setShowLocatiiTable(false);
                setShowDepartamenteTable(false);
                setShowAngajatiTable(false);
                setShowFurnizoriTable(false);
                setShowDepartamentEvTable(false);
                setShowFurnizoriEvTable(false);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching evenimente:', error);
            });
    };

    const onClientiClick = () => {
        fetch('http://localhost:3080/clienti')
            .then(response => response.json())
            .then(data => {
                setClienti(data);
                setShowTable(true);
                setShowClientiTable(true);
                setShowClientiHeader(true);
                setShowEvenimenteTable(false);
                setShowLocatiiTable(false);
                setShowDepartamenteTable(false);
                setShowAngajatiTable(false);
                setShowFurnizoriTable(false);
                setShowDepartamentEvTable(false);
                setShowFurnizoriEvTable(false);
            })
            .catch(error => {
                console.error('Error fetching clienti:', error);
            });
    };

    const onLocatiiClick = () => {
        fetch('http://localhost:3080/locatii')
            .then(response => response.json())
            .then(data => {
                setLocatii(data);
                setShowTable(true);
                setShowLocatiiTable(true);
                setShowLocatiiHeader(true);
                setShowEvenimenteTable(false);
                setShowClientiTable(false);
                setShowDepartamenteTable(false);
                setShowAngajatiTable(false);
                setShowFurnizoriTable(false);
                setShowDepartamentEvTable(false);
                setShowFurnizoriEvTable(false);
            })
            .catch(error => {
                console.error('Error fetching locatii:', error);
            });
    };

    const onDepartamenteClick = () => {
        fetch('http://localhost:3080/departamente')
            .then(response => response.json())
            .then(data => {
                setDepartamente(data);
                setShowTable(true);
                setShowDepartamenteTable(true);
                setShowDepartamenteHeader(true);
                setShowEvenimenteTable(false);
                setShowClientiTable(false);
                setShowLocatiiTable(false);
                setShowAngajatiTable(false);
                setShowFurnizoriTable(false);
                setShowDepartamentEvTable(false);
                setShowFurnizoriEvTable(false);
            })
            .catch(error => {
                console.error('Error fetching departamente:', error);
            });
    };

    const onAngajatiClick = () => {
        fetch('http://localhost:3080/angajati')
            .then(response => response.json())
            .then(data => {
                setAngajati(data);
                setShowTable(true);
                setShowAngajatiTable(true);
                setShowAngajatiHeader(true);
                setShowEvenimenteTable(false);
                setShowClientiTable(false);
                setShowLocatiiTable(false);
                setShowDepartamenteTable(false);
                setShowFurnizoriTable(false);
                setShowDepartamentEvTable(false);
                setShowFurnizoriEvTable(false);
            })
            .catch(error => {
                console.error('Error fetching angajati:', error);
            });
    };

    const onFurnizoriClick = () => {
        fetch('http://localhost:3080/furnizori')
            .then(response => response.json())
            .then(data => {
                setFurnizori(data);
                setShowTable(true);
                setShowFurnizoriTable(true);
                setShowFurnizoriHeader(true);
                setShowEvenimenteTable(false);
                setShowClientiTable(false);
                setShowLocatiiTable(false);
                setShowDepartamenteTable(false);
                setShowAngajatiTable(false);
                setShowDepartamentEvTable(false);
                setShowFurnizoriEvTable(false);
            })
            .catch(error => {
                console.error('Error fetching furnizori:', error);
            });
    };

    const onDepartamentEvClick = () => {
        fetch('http://localhost:3080/departamentev')
            .then(response => response.json())
            .then(data => {
                setDepartamentEvenimente(data);
                setShowTable(true);
                setShowDepartamentEvTable(true);
                setShowDepartamentEvHeader(true);
                setShowEvenimenteTable(false);
                setShowClientiTable(false);
                setShowLocatiiTable(false);
                setShowDepartamenteTable(false);
                setShowAngajatiTable(false);
                setShowFurnizoriTable(false);
                setShowFurnizoriEvTable(false);
            })
            .catch(error => {
                console.error('Error fetching departamentev:', error);
            });
    };

    const onFurnizoriEvClick = () => {
        fetch('http://localhost:3080/fe')
            .then(response => response.json())
            .then(data => {
                setFurnizoriEveniment(data);
                setShowTable(true);
                setShowFurnizoriEvTable(true);
                setShowFurnizoriEvHeader(true);
                setShowEvenimenteTable(false);
                setShowClientiTable(false);
                setShowLocatiiTable(false);
                setShowDepartamenteTable(false);
                setShowAngajatiTable(false);
                setShowFurnizoriTable(false);
                setShowDepartamentEvTable(false);
            })
            .catch(error => {
                console.error('Error fetching furnizoriev:', error);
            });
    };

    //where the user can insert, update or delete data
    const onOppClick = () => {
        navigate("/Opp");
    };

    //where the user can see the queries
    const onQueryClick = () => {
        navigate("/Query");
    };

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        margin: '80px',
        marginLeft: 'auto'
    };

    const thStyle = {
        border: '1px solid #dddddd',
        padding: '8px',
        backgroundColor: '#f2f2f2',
        textAlign: 'center'
    };

    const tdStyle = {
        border: '1px solid #dddddd',
        padding: '8px',
        color: 'white',
        opacity: '4',
        textAlign: 'center'
    };

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <div>Welcome!</div>
            </div>
            <div className="titleContainer2">
                This is the home page.
            </div>
            <div className="buttonContainer">
                {loggedIn && (
                    <div className="cevaaa">
                        <input
                            className="inputButton1"
                            type="button"
                            onClick={onEvenimenteClick}
                            value={"Evenimente"}
                        />
                        <input
                            className="inputButton1"
                            type="button"
                            onClick={onClientiClick}
                            value={"Clienti"}
                        />
                        <input
                            className={"inputButton1"}
                            type="button"
                            onClick={onLocatiiClick}
                            value={"Locatii"} />
                        <input
                            className={"inputButton1"}
                            type="button"
                            onClick={onDepartamenteClick}
                            value={"Departamente"} />
                        <input
                            className={"inputButton1"}
                            type="button"
                            onClick={onAngajatiClick}
                            value={"Angajati"} />
                        <input
                            className={"inputButton1"}
                            type="button"
                            onClick={onFurnizoriClick}
                            value={"Furnizori"} />
                        <input
                            className={"inputButton1"}
                            type="button"
                            onClick={onDepartamentEvClick}
                            value={"DepartamentEvenimente"} />
                        <input
                            className={"inputButton1"}
                            type="button"
                            onClick={onFurnizoriEvClick}
                            value={"FurnizoriEveniment"} />


                        {showEvenimenteTable && (
                            <table style={tableStyle}>
                                <thead>
                                    {showEvenimenteHeader && (
                                        <tr className="lost1">
                                            <th style={thStyle}>ID_Eveniment</th>
                                            <th style={thStyle}>NumeEveniment</th>
                                            <th style={thStyle}>Data</th>
                                            <th style={thStyle}>ID_Client</th>
                                            <th style={thStyle}>ID_Locatie</th>
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {evenimente.map((eveniment, index) => (
                                        <tr key={index}>
                                            <td style={tdStyle}>{eveniment.ID_Eveniment}</td>
                                            <td style={tdStyle}>{eveniment.NumeEveniment}</td>

                                            <td style={tdStyle}>{eveniment.Data.slice(0, 10)}</td>
                                            <td style={tdStyle}>{eveniment.ID_Client}</td>
                                            <td style={tdStyle}>{eveniment.ID_Locatie}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {showClientiTable && (
                            <table style={tableStyle}>
                                <thead>
                                    {showClientiHeader && (
                                        <tr>
                                            <th style={thStyle}>ID_Client</th>
                                            <th style={thStyle}>NumeClient</th>
                                            <th style={thStyle}>PrenumeClient</th>
                                            <th style={thStyle}>Email</th>
                                            <th style={thStyle}>NrTelefon</th>
                                            <th style={thStyle}>Judet</th>
                                            <th style={thStyle}>Oras</th>
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {clienti.map((client, index) => (
                                        <tr key={index}>
                                            <td style={tdStyle}>{client.ID_Client}</td>
                                            <td style={tdStyle}>{client.NumeClient}</td>
                                            <td style={tdStyle}>{client.PrenumeClient}</td>
                                            <td style={tdStyle}>{client.Email}</td>
                                            <td style={tdStyle}>{client.NrTelefon}</td>
                                            <td style={tdStyle}>{client.Judet}</td>
                                            <td style={tdStyle}>{client.Oras}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {showLocatiiTable && (
                            <table style={tableStyle}>
                                <thead>
                                    {showLocatiiHeader && (
                                        <tr>
                                            <th style={thStyle}>ID_Locatii</th>
                                            <th style={thStyle}>NumeLocatie</th>
                                            <th style={thStyle}>Judet</th>
                                            <th style={thStyle}>Oras</th>
                                            <th style={thStyle}>Strada</th>
                                            <th style={thStyle}>Capacitate</th>
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {locatii.map((locatie, index) => (
                                        <tr key={index}>
                                            <td style={tdStyle}>{locatie.ID_Locatie}</td>
                                            <td style={tdStyle}>{locatie.NumeLocatie}</td>
                                            <td style={tdStyle}>{locatie.Judet}</td>
                                            <td style={tdStyle}>{locatie.Oras}</td>
                                            <td style={tdStyle}>{locatie.Strada}</td>
                                            <td style={tdStyle}>{locatie.Capacitate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {showDepartamenteTable && (
                            <table style={tableStyle}>
                                <thead>
                                    {showDepartamenteHeader && (
                                        <tr>
                                            <th style={thStyle}>ID_Departament</th>
                                            <th style={thStyle}>NumeDepartament</th>
                                            <th style={thStyle}>Atributii</th>
                                            <th style={thStyle}>Cost</th>
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {departamente.map((departament, index) => (
                                        <tr key={index}>
                                            <td style={tdStyle}>{departament.ID_Departament}</td>
                                            <td style={tdStyle}>{departament.NumeDepartament}</td>
                                            <td style={tdStyle}>{departament.Atributii}</td>
                                            <td style={tdStyle}>{departament.Cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {showAngajatiTable && (
                            <table style={tableStyle}>
                                <thead>
                                    {showAngajatiHeader && (
                                        <tr>
                                            <th style={thStyle}>ID_Angajat</th>
                                            <th style={thStyle}>Nume</th>
                                            <th style={thStyle}>Prenume</th>
                                            <th style={thStyle}>Email</th>
                                            <th style={thStyle}>NrTelefon</th>
                                            <th style={thStyle}>Functie</th>
                                            <th style={thStyle}>ID_Departament</th>
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {angajati.map((angajat, index) => (
                                        <tr key={index}>
                                            <td style={tdStyle}>{angajat.ID_Angajat}</td>
                                            <td style={tdStyle}>{angajat.Nume}</td>
                                            <td style={tdStyle}>{angajat.Prenume}</td>
                                            <td style={tdStyle}>{angajat.Email}</td>
                                            <td style={tdStyle}>{angajat.NrTelefon}</td>
                                            <td style={tdStyle}>{angajat.Functie}</td>
                                            <td style={tdStyle}>{angajat.ID_Departament}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {showFurnizoriTable && (
                            <table style={tableStyle}>
                                <thead>
                                    {showFurnizoriHeader && (
                                        <tr>
                                            <th style={thStyle}>ID_Furnizor</th>
                                            <th style={thStyle}>NumeFurnizor</th>
                                            <th style={thStyle}>EmailFurnizor</th>
                                            <th style={thStyle}>TelefonFurnizor</th>
                                            <th style={thStyle}>ServiciiOferite</th>
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {furnizori.map((furnizor, index) => (
                                        <tr key={index}>
                                            <td style={tdStyle}>{furnizor.ID_Furnizor}</td>
                                            <td style={tdStyle}>{furnizor.NumeFurnizor}</td>
                                            <td style={tdStyle}>{furnizor.EmailFurnizor}</td>
                                            <td style={tdStyle}>{furnizor.TelefonFurnizor}</td>
                                            <td style={tdStyle}>{furnizor.ServiciiOferite}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {showDepartamentEvTable && (
                            <table style={tableStyle}>
                                <thead>
                                    {showDepartamentEvHeader && (
                                        <tr>
                                            <th style={thStyle}>ID_DepartamentEveniment</th>
                                            <th style={thStyle}>ID_Departament</th>
                                            <th style={thStyle}>ID_Eveniment</th>
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {departamentev.map((departamenteev, index) => (
                                        <tr key={index}>
                                            <td style={tdStyle}>{departamenteev.ID_DepartamentEveniment}</td>
                                            <td style={tdStyle}>{departamenteev.ID_Departament}</td>
                                            <td style={tdStyle}>{departamenteev.ID_Eveniment}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {showFurnizoriEvTable && (
                            <table style={tableStyle}>
                                <thead>
                                    {showFurnizoriEvHeader && (
                                        <tr>
                                            <th style={thStyle}>ID_FurnizorEveniment</th>
                                            <th style={thStyle}>ID_Furnizor</th>
                                            <th style={thStyle}>ID_Eveniment</th>
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {fe.map((furnizoriev, index) => (
                                        <tr key={index}>
                                            <td style={tdStyle}>{furnizoriev.ID_FurnizorEveniment}</td>
                                            <td style={tdStyle}>{furnizoriev.ID_Furnizor}</td>
                                            <td style={tdStyle}>{furnizoriev.ID_Eveniment}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        <div className={'ups1'}>
                            <input
                                className={"inputButton"}
                                type="button"
                                onClick={onOppClick}
                                value={"Opp"}
                            />
                            <input
                                className={"inputButton"}
                                type="button"
                                onClick={onQueryClick}
                                value={"Query-uri"}
                            />
                        </div>
                    </div>
                )}

                <input id="firstButton"
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? "Log out" : "Log in"}
                />

                {loggedIn && (
                    <div className="lost">
                        Your email address is {email}
                    </div>
                )}
            </div>
        </div >
    );
};

//export the component to be used in App.js
export default Home;
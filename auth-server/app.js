import sql from 'mssql/msnodesqlv8.js';
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import low from 'lowdb';
//FileSync is a synchronous adapter for lowdb which is used to read and write to the database file.
import FileSync from 'lowdb/adapters/FileSync.js';
//The FileSync module provides functionality to work with JSON files
var adapter = new FileSync("./database.json");

var config = {
    server: 'SBT\\SQLEXPRESS',
    database: 'CompanieEvenimente',
    driver: 'msnodesqlv8',
    user: 'gabisbt',
    password: 'parola1234',
    options: {
        trustedConnection: true
    }
};

sql.connect(config, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});


var Request = new sql.Request();

var db = low(adapter);

const app = express()

const jwtSecretKey = "dsfdsfsdfdsvcsvdfgefg"

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
    res.send("Auth API.\nPlease use POST /auth & POST /verify for authentication")
})

//authentication
app.post("/auth", (req, res) => {

    // Extract email and password from request body
    const { email, password } = req.body;

    const user = db.get("users").value().filter(user => email === user.email)

    if (user.length === 1) {
        //bcrypt.compare compares the password with the hashed password
        bcrypt.compare(password, user[0].password, function (_err, result) {
            if (!result) {
                return res.status(401).json({ message: "Invalid password" });
            } else {
                // Password matches, create and send successful login response
                let loginData = {
                    email,
                    signInTime: Date.now(),
                };

                const token = jwt.sign(loginData, jwtSecretKey);
                res.status(200).json({ message: "success", token });
            }
        });
    } else if (user.length === 0) {
        // User not found, register them and send successful login response
        bcrypt.hash(password, 10, function (_err, hash) {
            console.log({ email, password: hash })
            db.get("users").push({ email, password: hash }).write()

            let loginData = {
                email,
                signInTime: Date.now(),
            };

            const token = jwt.sign(loginData, jwtSecretKey);
            res.status(200).json({ message: "success", token });
        });
    }
})

//verify the token
app.post('/verify', (req, res) => {
    const tokenHeaderKey = "jwt-token";
    const authToken = req.headers[tokenHeaderKey];
    try {
        const verified = jwt.verify(authToken, jwtSecretKey);
        if (verified) {
            return res
                .status(200)
                .json({ status: "logged in", message: "success" });
        } else {
            // Access Denied
            return res.status(401).json({ status: "invalid auth", message: "error" });
        }
    } catch (error) {
        // Access Denied
        return res.status(401).json({ status: "invalid auth", message: "error" });
    }

})

//check if the account exists
app.post('/check-account', (req, res) => {
    const { email } = req.body

    console.log(req.body)

    const user = db.get("users").value().filter(user => email === user.email)

    console.log(user)

    res.status(200).json({
        status: user.length === 1 ? "User exists" : "User does not exist", userExists: user.length === 1
    })
})



//obtaining the data from the database
app.get('/clienti', (req, res) => {
    Request.query("SELECT * FROM Clienti", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/evenimente', (req, res) => {
    Request.query("SELECT * FROM Evenimente", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/locatii', (req, res) => {
    Request.query("SELECT * FROM Locatii", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/departamente', (req, res) => {
    Request.query("SELECT * FROM Departamente", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/angajati', (req, res) => {
    Request.query("SELECT * FROM Angajati", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/furnizori', (req, res) => {
    Request.query("SELECT * FROM Furnizori", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/departamentev', (req, res) => {
    Request.query("SELECT * FROM DepartamentEvenimente", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/fe', (req, res) => {
    Request.query("SELECT * FROM FurnizoriEveniment", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});


//insert operation for departamente and locatii
app.post('/departamente', (req, res) => {
    const departament = req.body;
    console.log(departament);
    Request.query(`INSERT INTO Departamente (ID_Departament, NumeDepartament, Atributii, Cost) VALUES (${departament.departament}, '${departament.numeDepartament}', '${departament.atributii}', ${departament.cost})`, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send('Departament adăugat cu succes');
        }
    });
});

app.post('/locatii', (req, res) => {
    const locatie = req.body;
    console.log(locatie);
    Request.query(`INSERT INTO Locatii (ID_Locatie, NumeLocatie, Judet, Oras, Strada, Capacitate) VALUES (${locatie.ID_Locatii}, '${locatie.NumeLocatie}', '${locatie.Judet}', '${locatie.Oras}', '${locatie.Strada}', ${locatie.Capacitate})`, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send('Locatie adăugată cu succes');
        }
    });
})

//update operation for departamente and locatii
app.put('/departamente', (req, res) => {
    const departament = req.body;
    console.log(departament);
    Request.query(`UPDATE Departamente SET NumeDepartament = '${departament.NumeDepartament}', Atributii = '${departament.Atributii}', Cost = '${departament.Cost}' WHERE ID_Departament = '${departament.ID_Departament}'`, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send('Departament actualizat');
        }
    });
});

app.put('/locatii', (req, res) => {
    const locatie = req.body;
    console.log(locatie);
    Request.query(`UPDATE Locatii SET NumeLocatie = '${locatie.NumeLocatie}',  Judet = '${locatie.Judet}', Oras = '${locatie.Oras}', Strada = '${locatie.Strada}', Capacitate = ${locatie.Capacitate} WHERE ID_Locatie = '${locatie.ID_Locatii}'`, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send('Locatie actualizata');
        }
    });
});

//delete operation for departamente and locatii
app.delete('/departamente', (req, res) => {
    const departament = req.body;
    console.log(departament);
    Request.query(`DELETE FROM Departamente WHERE ID_Departament = '${departament.ID_Departament}' OR NumeDepartament = '${departament.NumeDepartament}'`, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send('Departament sters');
        }
    });
});

app.delete('/locatii', (req, res) => {
    const locatie = req.body;
    console.log(locatie);
    Request.query(`DELETE FROM Locatii WHERE ID_Locatie = '${locatie.ID_Locatii}'`, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send('Locatie stearsa');
        }
    });
});


//the 10 queries
app.get('/query1', (req, res) => {
    Request.query("SELECT ID_Eveniment, NumeEveniment, Data, ID_Client, L.Oras FROM Evenimente INNER JOIN Locatii L ON Evenimente.ID_Locatie = L.ID_Locatie WHERE L.Oras = 'Brasov'", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.post('/query2', (req, res) => {
    console.log(req.body);
    Request.query(`SELECT Evenimente.ID_Eveniment, Evenimente.NumeEveniment, Evenimente.Data, Evenimente.ID_Client, Evenimente.ID_Locatie, Locatii.NumeLocatie, Locatii.Capacitate FROM Evenimente INNER JOIN Locatii ON Evenimente.ID_Locatie = Locatii.ID_Locatie WHERE Locatii.Capacitate >= ${req.body.capacity};`, function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/query3', (req, res) => {
    Request.query("SELECT D.ID_Departament, D.NumeDepartament, D.Atributii, D.Cost, COUNT(De.ID_Eveniment) AS NumerEvenimente FROM DepartamentEvenimente De INNER JOIN Departamente D ON De.ID_Departament = D.ID_Departament GROUP BY D.NumeDepartament, D.Atributii, D.Cost, D.ID_Departament HAVING COUNT(De.ID_Eveniment) > 2;", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/query4', (req, res) => {
    Request.query("SELECT Locatii.ID_Locatie, Locatii.NumeLocatie, Locatii.Judet, Locatii.Oras, Locatii.Strada, Locatii.Capacitate, Evenimente.NumeEveniment, Evenimente.Data FROM Locatii INNER JOIN Evenimente ON Locatii.ID_Locatie = Evenimente.ID_Locatie WHERE Evenimente.Data LIKE '2023-11%';", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/query5', (req, res) => {
    Request.query("SELECT Furnizori.ID_Furnizor, Furnizori.NumeFurnizor, Furnizori.EmailFurnizor, Furnizori.TelefonFurnizor, Furnizori.ServiciiOferite FROM Furnizori INNER JOIN FurnizoriEveniment ON Furnizori.ID_Furnizor = FurnizoriEveniment.ID_Furnizor INNER JOIN Evenimente ON Evenimente.ID_Eveniment = FurnizoriEveniment.ID_Eveniment WHERE Evenimente.NumeEveniment = 'Revelion';", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/query6', (req, res) => {
    Request.query("SELECT Departamente.ID_Departament, Departamente.NumeDepartament, Departamente.Atributii, Departamente.Cost FROM Departamente INNER JOIN Angajati ON Departamente.ID_Departament = Angajati.ID_Departament WHERE Angajati.Nume LIKE 'Pop%'", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/query7', (req, res) => {
    Request.query("SELECT Angajati.ID_Angajat, Angajati.Nume, Angajati.Prenume, Angajati.Email, Angajati.NrTelefon, Angajati.Functie, Departamente.NumeDepartament FROM Angajati  INNER JOIN Departamente ON Angajati.ID_Departament = Departamente.ID_Departament WHERE Departamente.Cost < (SELECT AVG(Departamente.Cost) FROM Departamente)", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/query8', (req, res) => {
    Request.query("SELECT Angajati.Nume, Angajati.Prenume, Angajati.Email, Angajati.NrTelefon, Angajati.Functie FROM Angajati  INNER JOIN Departamente ON Angajati.ID_Departament = Departamente.ID_Departament WHERE Departamente.Cost = ( SELECT MAX(Cost) FROM Departamente)", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.get('/query9', (req, res) => {
    Request.query("SELECT Angajati.ID_Angajat, Angajati.Nume, Angajati.Prenume, Angajati.Email, Angajati.NrTelefon, Angajati.Functie, Departamente.NumeDepartament FROM Angajati INNER JOIN Departamente ON Angajati.ID_Departament = Departamente.ID_Departament  WHERE Departamente.ID_Departament IN (SELECT ID_Departament  FROM Departamente WHERE Departamente.Cost > (SELECT AVG(Departamente.Cost) FROM Departamente))", function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {    
            res.json(recordset.recordset);
        }
    });
});

app.post('/query10', (req, res) => {
    Request.query(`SELECT Clienti.ID_Client, Clienti.NumeClient, Clienti.PrenumeClient, Clienti.Email, Clienti.NrTelefon, Clienti.Judet, Clienti.Oras FROM Clienti INNER JOIN ( SELECT Evenimente.ID_Client FROM Evenimente INNER JOIN Locatii ON Evenimente.ID_Locatie = Locatii.ID_Locatie WHERE Locatii.Capacitate = ${req.body.capacity1}) AS Subcereri ON Clienti.ID_Client = Subcereri.ID_Client`, function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(recordset.recordset);
        }
    });
});

app.listen(3080)

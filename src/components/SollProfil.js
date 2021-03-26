import React, {Component, useRef, useState} from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth, useDatabase } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "firebase";




export default function SollProfile (){

    const [loading] = useState(false)
    const {currentUser, useDatabase} = useAuth()
    const [mit, setMit] = useState("")
    const [bildungs, setBildungs] = useState("")
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [c, setC] = useState("")
    const [d, setD] = useState("")
    const [aufgabe, setAufgabe] = useState("")
    const [tatigkeit, setTat] = useState("")
    const [perso, setPerso] = useState("")
    const [kompo, setKompo] = useState("")
    const [kurs, setKurs] = useState("")
    const [erw, setErw] = useState("")


    const history = useHistory()
    function writeDatabase (){
        var db = firebase.firestore()
        var mitid = mit
        var Bildungsgrad = bildungs
           var Berufserfahrunga = a
           var Berufserfahrungb = b
           var Berufserfahrungc = c
           var Berufserfahrungd = d
           var Persönlichkeitsprofil = perso
           var SchwerpunktAufgabe = aufgabe
           var SchwerpunktKompetenzenprofil = kompo
           var SchwerpunktTätigkeit = tatigkeit
           var Kursangebot = kurs
           var ErwartetesKompetentniveau = erw

        db.collection("Mitarbeiter").doc(mitid).collection("Soll-Profil").doc(mitid).collection("PI-Analyse").add({
            MitarbeiterID: mitid,
              Berufserfahrunga: Berufserfahrunga,
              Berufserfahrungb: Berufserfahrungb,
              Berufserfahrungc: Berufserfahrungc,
              Berufserfahrungd: Berufserfahrungd,
              Bildungsgrad: Bildungsgrad,
              Persönlichkeitsprofil: Persönlichkeitsprofil,
              SchwerpunktAufgabe: SchwerpunktAufgabe,
              SchwerpunktKompetenzenprofil: SchwerpunktKompetenzenprofil,
              SchwerpunktTätigkeit: SchwerpunktTätigkeit,
              Kursangebot: Kursangebot,
              ErwartetesKompetentniveau: ErwartetesKompetentniveau



        })
            .then((docRef) => {
                alert("Soll-Profil erstellt");
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    function handleSubmit(e) {
        e.preventDefault()
        writeDatabase()
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Ist Profile</h2>
                    <Form.Group id="mid">
                        <Form.Label>MitarbeiterID
                        </Form.Label>
                        <Form.Control
                            placeholder="Mitarbeiter ID"
                            onChange={e => setMit(e.target.value)}

                        />
                    </Form.Group>
                    <Form onSubmit={handleSubmit}>


                        <Form.Group id="Bildungsgrad">
                            <Form.Label>Welches Level der Qualifikation wird benötigt, um den Anforderungen an die Stelle gerecht zu werden?</Form.Label>
                            <Form.Control
                                placeholder="Bildungsgrad"

                                onChange={e => setBildungs(e.target.value)}
                            />
                        </Form.Group>


                        <Form.Group id="Berufserfahrunga">
                            <Form.Label>Wird Berufserfahrung im Öffentlichen-Dienst benötigt?
                                <Form.Control type="range" min="1" max="40" step="1"
                                              onChange={e => setA(e.target.value)}/>
                            </Form.Label>

                        </Form.Group>
                        <Form.Group id="Berufserfahrungb">
                            <Form.Label>Wie viel Berufserfahrung wird für die Stelle benötigt?</Form.Label>

                            <Form.Control type="range" min="1" max="40" step="1"
                                          onChange={e => setB(e.target.value)}/>


                        </Form.Group>
                        <Form.Group id="Berufserfahrungc">
                            <Form.Label>Wie viel Führungserfahrung wird für die Stelle benötigt?
                            </Form.Label>
                            <Form.Control type="range" min="1" max="40" step="1"
                                          onChange={e => setC(e.target.value)}/>
                        </Form.Group>
                        <Form.Group id="Berufserfahrungd">
                            <Form.Label>Wie viel Projekterfahrung wird für die Stelle benötigt?
                            </Form.Label>
                            <Form.Control type="range" min="1" max="40" step="1"
                                          onChange={e => setD(e.target.value)}/>
                        </Form.Group>

                        <Form.Group id="Schwerpunkt Aufgabe">
                            <Form.Label>Wo liegt der Schwerpunkt der Aufgabe der Stelle?</Form.Label>
                            <Form.Control
                                placeholder="Schwerpunkt Aufgabe"

                                onChange={e => setAufgabe(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group id="Schwerpunkt Tätigkeit">
                            <Form.Label>Welche grundsätzliche Tätigkeit überwiegt bei der Stelle?</Form.Label>
                            <Form.Control
                                placeholder="Schwerpunkt Tätigkeit"

                                onChange={e => setTat(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group id="Persönlichkeitsprofil">
                            <Form.Label>Was erfordert die Stelle in besonderem Maße?</Form.Label>
                            <Form.Control
                                placeholder="Persönlichkeitsprofil"

                                onChange={e => setPerso(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group id="Schwerpunkt Kompetenzprofil">
                            <Form.Label>Welche Kompetenz flankiert die Stelle am stärksten?</Form.Label>
                            <Form.Control
                                placeholder="Schwerpunkt Kompetenzprofil"
                                onChange={e => setKompo(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group id="Geeignete Kursangebote">
                            <Form.Label>Welches Kompetenzprofil erwarten Sie von der erworbenen Qualifikationen?</Form.Label>
                            <Form.Control
                                placeholder="Geeignete Kursangebote"
                                onChange={e => setKurs(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group id="Erwartetes Kompetentniveau">
                            <Form.Label>Welches Niveau erwarten sie von der erworbenen Qualifikation?</Form.Label>
                            <Form.Control
                                placeholder="Geeignete Kursangebote"
                                onChange={e => setErw(e.target.value)}
                            />
                        </Form.Group>


                        <Button disabled={loading} className="w-100" type="submit">
                            Update
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </>
    )

}
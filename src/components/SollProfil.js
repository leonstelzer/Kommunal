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
                            <Form.Label>Welches Level der Qualifikation wird benötigt, um den Anforderungen an die Stelle gerecht zu werden?
                                <Form.Control as="select">
                                    <option>Unterdurchschnittliche Qualifikation</option>
                                    <option>Duchschnittliche Qualifikation</option>
                                    <option>Überdurchschnittliche Qualifikation</option>
                                    onChange={e => setBildungs(e.target.value)}


                                </Form.Control>
                            </Form.Label>
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
                        <Form.Group controlId="Schwerpunkt Aufgabe">
                            <Form.Label>Wo liegt der Schwerpunkt der Aufgabe der Stelle?</Form.Label>
                            <Form.Control as="select">
                                <option>Steuerung</option>
                                <option>Führung</option>
                                <option>Projekte</option>
                                <option>Fach- bzw. Querschnittsaufgaben</option>
                                onChange={e => setAufgabe(e.target.value)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Schwerpunkt Tätigkeit">
                            <Form.Label>Welche grundsätzliche Tätigkeit überwiegt bei der Stelle?
                                <Form.Control as="select">
                                    <option>Strategie</option>
                                    <option>Planung</option>
                                    <option>Umsetzung</option>
                                    <option>Kontrolle</option>
                                    onChange={e => setTat(e.target.value)}
                                </Form.Control>
                            </Form.Label>

                        </Form.Group>
                        <Form.Group controlId="Persönlichkeitsprofil">
                            <Form.Label>Was erfordert die Stelle in besonderem Maße?

                                <Form.Control as="select">
                                    <option>Analysefähigkeit</option>
                                    <option>Teamfähigkeit</option>
                                    <option>Technikaffinität</option>
                                    <option>Organisationsvermögen</option>
                                    <option>Kontinuität</option>
                                    onChange={e => setPerso(e.target.value)}

                                </Form.Control>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group controlId="Schwerpunkt Kompetenzprofil">
                            <Form.Label>Welche Kompetenz flankiert die Stelle am stärksten?

                                <Form.Control as="select">
                                    <option>Entwicklung von Innovationen</option>
                                    <option>Umsetzung von Change- u. Transformationsprozessen</option>
                                    <option>Transfer des Neuen in die Praxis</option>
                                    <option>Ausführung von operativen Tätigkeiten</option>
                                    onChange={e => setKompo(e.target.value)}

                                </Form.Control>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group controlId="Geeignete Kursangebote">
                            <Form.Label>Welches Kompetenzprofil erwarten Sie von der erworbenen Qualifikationen?
                                <Form.Control as="select">
                                    <option>Handlungssicherheit mit ablauforganisatorischen Prozessen im Kontext der Digitalisierung</option>
                                    <option>Handlungssicherheit in Projekten der Verwaltungsdigitalisierung</option>
                                    <option>Handlungssicherheit bei der Gestaltung von Veränderungen und Modernisierungsvorhaben</option>
                                    onChange={e => setKurs(e.target.value)}

                                </Form.Control>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group controlId="Erwartetes Kompetentniveau">
                            <Form.Label>Welches Niveau erwarten sie von der erworbenen Qualifikation?


                                <Form.Control as="select">
                                    <option>Die Qualifikation sollte Basiswissen vermitteln (entspricht Level Educated)
                                    </option>
                                    <option>Die Qualifikation sollte hohe Handlungssicherheit vermitteln (entspricht Level Professional)
                                    </option>
                                    <option>Die Qualifikation sollte in Theorie und Praxis auf Expertenniveau sein (entspricht Level Expert)
                                    </option>
                                    onChange={e => setErw(e.target.value)}

                                </Form.Control>
                            </Form.Label>
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
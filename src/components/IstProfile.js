import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth, useDatabase } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "firebase";

export default function IstProfile() {
    const emailRef = useRef()
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
    const {currentUser, useDatabase} = useAuth()
    const [loading] = useState(false)


    const history = useHistory()
    function writeDatabase (){
        var db = firebase.firestore()
        var mitid = mit
        var Bildungsgrad = bildungs
        var Berufserfahrunga = a
        var Berufserfahrungb = b
        var Berufserfahrungc = c
        var Berufserfahrungd = d
        var Persönlichkeitsprofil = aufgabe
        var SchwerpunktAufgabe = tatigkeit
        var SchwerpunktKompetenzenprofil = perso
        var SchwerpunktTätigkeit = kompo

        db.collection("Mitarbeiter").doc(mitid).collection("Ist-Profil").doc(mitid).collection("PI-Analyse").add({
            MitarbeiterID: mitid,
            Berufserfahrunga: Berufserfahrunga,
            Berufserfahrungb: Berufserfahrungb,
            Berufserfahrungc: Berufserfahrungc,
            Berufserfahrungd: Berufserfahrungd,
            Bildungsgrad: Bildungsgrad,
            Persönlichkeitsprofil: Persönlichkeitsprofil,
            SchwerpunktAufgabe: SchwerpunktAufgabe,
            SchwerpunktKompetenzenprofil: SchwerpunktKompetenzenprofil,
            SchwerpunktTätigkeit: SchwerpunktTätigkeit
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
                        <Form.Label>MitarbeiterID</Form.Label>
                        <Form.Control
                            placeholder="Mitarbeiter ID"
                            required
                            inputRef={(ref) => {this.mitarbeiter = ref}}
                            onChange={e => setMit(e.target.value)}
                        />
                    </Form.Group>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="Bildungsgrad">
                            <Form.Label>Nennen Sie Ihren höchsten Bildungsabschluss?
                                <Form.Control as="select" defaultValue="Wähle...">
                                    <option>Ohne Abschluss</option>
                                    <option>Berufsausbildung HWK/IHK</option>
                                    <option>Meister/Fachwirt HWK/IHK</option>
                                    <option>Bachelor</option>
                                    <option>Diplom FH/DH</option>
                                    <option>Diplom (Univ.) od. Master</option>
                                    <option>Promotion</option>
                                    onChange={e => setBildungs(e.target.value)}
                                </Form.Control>
                        </Form.Label>
                        </Form.Group>
                        <Form.Group id="Berufserfahrunga">
                            <Form.Label>Wie lange arbeiten Sie insgesamt im Öffentlichen-Dienst?
                                <Form.Control type="range" min="1" max="40" step="1"
                                              onChange={e => setA(e.target.value)}/>
                            </Form.Label>

                        </Form.Group>
                        <Form.Group id="Berufserfahrungb">
                            <Form.Label>Wie lange arbeiten Sie an Ihrem aktuellen Arbeitsplatz?</Form.Label>

                                <Form.Control type="range" min="1" max="40" step="1"
                                              onChange={e => setB(e.target.value)}/>


                        </Form.Group>
                        <Form.Group id="Berufserfahrungc">
                            <Form.Label>Wie lange arbeiten Sie als Führungskraft?
                            </Form.Label>
                            <Form.Control type="range" min="1" max="40" step="1"
                                          onChange={e => setC(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group id="Berufserfahrungd">
                            <Form.Label>Wie lange arbeiten Sie in Projekten?
                            </Form.Label>
                            <Form.Control type="range" min="1" max="40" step="1"
                                          onChange={e => setD(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="Schwerpunkt Aufgabe">
                            <Form.Label>In welcher Aufgabe liegt der Schwerpunkt Ihrer aktuellen Tätigkeit?</Form.Label>
                            <Form.Control as="select" defaultValue="Wähle...">
                                <option>Steuerung</option>
                                <option>Führung</option>
                                <option>Projekte</option>
                                <option>Fach- bzw. Querschnittsaufgaben</option>
                                onChange={e => setAufgabe(e.target.value)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Schwerpunkt Tätigkeit">
                            <Form.Label>Beschreiben Sie die grundsätzliche Ausrichtung Ihrer derzeitigen Tätigkeit?
                            <Form.Control as="select" defaultValue="Wähle...">
                                <option>Strategie</option>
                                <option>Planung</option>
                                <option>Umsetzung</option>
                                <option>Kontrolle</option>
                                onChange={e => setTat(e.target.value)}
                            </Form.Control>
                        </Form.Label>

                    </Form.Group>
                        <Form.Group controlId="Persönlichkeitsprofil">
                            <Form.Label>Wo sehen Sie Ihr größtes Potential?
                                <Form.Control as="select" defaultValue="Wähle...">
                                    <option>Innovative Ideen entwickeln</option>
                                    <option>Menschen für Veränderungen zu begeistern</option>
                                    <option>Neuerungen in der Praxis zu implementieren</option>
                                    <option>Technik selbst aktiv anzuwenden</option>
                                    onChange={e => setPerso(e.target.value)}
                                </Form.Control>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group controlId="Schwerpunkt Kompetenzprofil">
                            <Form.Label>In welchem Bereich sehen Sie sich perspektivisch in 5 Jahren?

                                <Form.Control as="select" defaultValue="Wähle...">
                                    <option>Entwicklung von Innovationen</option>
                                    <option>Umsetzung von Change- u. Transformationsprozessen</option>
                                    <option>Transfer des Neuen in die Praxis</option>
                                    <option>Ausführung von operativen Tätigkeiten</option>
                                    onChange={e => setKompo(e.target.value)}
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

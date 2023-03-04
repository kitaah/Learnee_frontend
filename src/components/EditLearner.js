import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";

function EditLearner() {
    useEffect(() => {
        document.title = 'Modifier un apprenant 👤';
        loadLearner();
    }, []);

    let navigate = useNavigate();

    const{id} = useParams();

    const [learner, setLearner] = useState({
        fname: "",
        lname: "",
        promotion: "",
        address: "",
        email: "",
        mobile: "",
        absence: "",
        representative: "",
    });

    const { fname, lname, promotion, address, email, mobile, absence, representative } = learner;

    const onInputChange = (e) => {
        setLearner({ ...learner, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/updatelearner/${id}`, learner);
        navigate("/apprenants");
    };

    const loadLearner = async () => {
        const result = await axios.get(`http://localhost:8080/getlearner/${id}`);
        setLearner(result.data);
    };
    return (
    <main>
        <Container>
            <h1 className="mb-5"><FaUserAlt className="pe-3" size={60} />Modifie un apprenant</h1>
            <Row>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 bg-dark shadow">
                    <Form onSubmit={handleSubmit} className="text-light p-3">
                        <Form.Group className="mb-3" controlId="formEditFname">
                            <Form.Label htmlFor="fname">Prénom</Form.Label>
                            <Form.Control type={"text"} placeholder="Prénom..." name="fname" defaultValue={fname} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditLname">
                            <Form.Label htmlFor="lname" >Nom</Form.Label>
                            <Form.Control type={"text"} placeholder="Prénom..." name="lname" defaultValue={lname} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditPromotion">
                            <Form.Label htmlFor="promotion" >Promotion</Form.Label>
                            <Form.Control type={"text"} placeholder="Promotion..." name="promotion" defaultValue={promotion} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditAddress">
                            <Form.Label htmlFor="address">Adresse</Form.Label>
                            <Form.Control type={"text"} placeholder="Address" name="address" defaultValue={address} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditEmail">
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type={"text"} placeholder="E-mail..." name="email" defaultValue={email} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditMobile">
                            <Form.Label htmlFor="mobile">Téléphone</Form.Label>
                            <Form.Control type={"text"} placeholder="Téléphone..." name="mobile" defaultValue={mobile} onChange={onInputChange}  required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditAbsence">
                            <Form.Label  htmlFor="absence">Absence(s)</Form.Label>
                            <Form.Control type={"number"} min="1" placeholder="Absence(s)..." name="absence" defaultValue={absence} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditRepresentative">
                            <Form.Label htmlFor="representative">Délégué:</Form.Label>
                            <Form.Control className="mb-3 bg-dark text-light" type={"text"} placeholder="Délégué..." name="representative" defaultValue={representative} disabled/>
                                <Form.Select name="representative" defaultValue={representative} onChange={onInputChange}>
                                    <option value="">-- Sélectionner le statut --</option>
                                    <option value="true">Vrai</option>
                                    <option value="false">Faux</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="danger" className="mt-3 fw-bold">Envoyer</Button>
                        </div>
                    </Form>
                </div>
            </Row>
            <div className="text-center">
                <Link className="btn btn-primary mt-5 px-5 text-center mx-auto" to="/apprenants">
                    <BsFillArrowLeftCircleFill className="h1 align-middle"/>
                </Link>
            </div>
        </Container>
    </main>
    )
}

export default EditLearner
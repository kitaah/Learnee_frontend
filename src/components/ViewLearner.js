import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaUserAlt, FaAddressCard } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function ViewLearner() {
    useEffect(() => {
        document.title = 'Information apprenant 👤';
        loadLearner();
    }, []);

    const [learner, setLearner] = useState({
        fname: "",
        lname: "",
        promotion: "",
        address: "",
        email: "",
        mobile: "",
        representative: "",
    });

    const { id } = useParams();

    const loadLearner = async () => {
        const result = await axios.get(`http://localhost:8080/getlearner/${id}`);
        setLearner(result.data);
    };

    return (
    <main>
        <Container>
            <h1 className="mb-5"><FaUserAlt className="pe-3" size={60} />Informations du client</h1>
            <Row>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-dark">
                    <Card.Body>
                        <Card.Text>
                            <Card.Title className="text-center m-4">{learner.fname} {learner.lname}</Card.Title>
                            <ul className="list-group list-group-flush rounded card-learners">
                                <li className="list-group-item">
                                    <b><FaUserAlt className="pe-3" size={40} />Prénom: </b>
                                    {learner.fname}
                                </li>
                                <li className="list-group-item">
                                    <b><FaUserAlt className="pe-3" size={40} />Nom: </b>
                                    {learner.lname}
                                </li>
                                <li className="list-group-item">
                                    <b><AiOutlineFieldNumber className="pe-3" size={40} />Promotion: </b>
                                    {learner.promotion}
                                </li>
                                <li className="list-group-item">
                                    <b><FaUserAlt className="pe-3" size={40} />Genre: </b>
                                    {learner.address}
                                </li>
                                <li className="list-group-item">
                                    <b><MdEmail className="pe-3" size={40} />Email: </b>
                                    {learner.email}
                                </li>
                                <li className="list-group-item">
                                    <b><BsFillTelephoneFill className="pe-3" size={40} />Tél.: </b>
                                    {learner.mobile}
                                </li>
                                <li className="list-group-item">
                                    <b><FaAddressCard className="pe-3" size={40} />Absence(s): </b>
                                    {learner.absence}
                                </li>
                                <li className="list-group-item">
                                    <b><FaAddressCard className="pe-3" size={40} />Adresse: </b>
                                    {learner.address}
                                </li>
                                <li className="list-group-item">
                                    <b><FaUserAlt className="pe-3" size={40} />Délégué: </b>
                                    {learner.representative.toString()}
                                </li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    <div className="text-center">
                        <Link className="btn btn-primary mt-5" to={"/apprenants"}>Retour</Link>
                    </div>
                </div>
            </Row>
        </Container>
    </main>
    )
}

export default ViewLearner
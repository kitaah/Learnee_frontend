import React, { useEffect, useState } from 'react';
import { FaUsers, FaEye, FaEdit, FaSearch } from 'react-icons/fa';
import { BsFillPlusCircleFill, BsTrashFill } from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link, useParams  } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function ViewAllLearners() {
    const [learners,setLearners] = useState([]);
    useEffect(() => {
    document.title = 'Liste des apprenants 👤';
    loadLearners();
    }, []);

    const[search, setSearch] = useState('');

    const { id } = useParams();

    const loadLearners = async() => {
    const result = await axios.get("http://localhost:8080/getlearners");
    setLearners(result.data);
    }

    const deleteLearner = async (id) => {
    await axios.delete(`http://localhost:8080/deletelearner/${id}`);
    loadLearners();
    };
    
    return (
    <main>
        <Container>
            <h1 className="mb-5"><FaUsers className="pe-3" size={65} />Liste des apprenants</h1>
            <Link className="btn btn-primary mb-3" to="/ajoutapprenant"><BsFillPlusCircleFill className="me-2" />Ajoute un apprenant</Link>
            <Form className="d-flex align-items-center justify-content-center align-middle my-3">
                <Stack direction="horizontal" gap={3}>
                <FaSearch size={30} />
                <Form.Control onChange={(e) =>setSearch(e.target.value)}  type="search" className="search-bar" placeholder="Cherche une promotion..."/>
                </Stack>
            </Form>
            <Table className="table table-hover table-responsive shadow table-light">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Promotion</th>
                        <th>Addresse</th>
                        <th>Email</th>
                        <th>Tél.</th>
                        <th>Absence(s)</th>
                        <th>Délégué</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
            {
                learners.filter((learner) => {
                    return search.toLowerCase()  === ''
                    ? learner: learner.promotion.toLowerCase().includes(search);
                }).map((learner, index)=>(
                    <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{learner.fname}</td>
                        <td>{learner.lname}</td>
                        <td>{learner.promotion}</td>
                        <td>{learner.address}</td>
                        <td>{learner.email}</td>
                        <td>{learner.mobile}</td>
                        <td>{learner.absence}</td>
                        <td className="rep">{learner.representative.toString()}</td>
                        <td>
                            <Link className="btn btn-success" to={`/consultationapprenant/${learner.id}`} title="Voir"><FaEye size={20} /></Link>
                            <Link className="btn btn-primary my-2 mx-4" to={`/modificationapprenant/${learner.id}`} title="Modifier">< FaEdit size={20} /></Link>
                            <Button variant="danger" onClick={() => deleteLearner(learner.id)} title="Supprimer"><BsTrashFill size={20} /></Button>
                        </td>
                    </tr>
                ))
            }
                </tbody>
            </Table>
        </Container>
    </main>
    )
}

export default ViewAllLearners
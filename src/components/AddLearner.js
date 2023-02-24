import axios from "axios";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddLearner() {
  useEffect(() => {
    document.title = 'Ajouter un apprenant 👤';
  }, []);

  let navigate = useNavigate();

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

  const handleSubmit =  async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addlearner", learner);
    navigate("/apprenants");
  };

  return (
    <main>
      <Container>
        <h1 className="mb-5"><FaUserAlt className="pe-3" size={60} />Ajoute un apprenant</h1>
        <Row>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 bg-dark shadow px-5">
            <Form onSubmit={handleSubmit} className="text-light p-3">
              <Form.Group className="mb-3" controlId="formAddFname">
                <Form.Label htmlFor="fname">Prénom</Form.Label>
                <Form.Control type={"text"} placeholder="Prénom..." name="fname" defaultValue={fname} onChange={onInputChange} required/>
              </Form.Group>
            <Form.Group className="mb-3" controlId="formAddLname">
              <Form.Label htmlFor="lname" >Nom</Form.Label>
              <Form.Control type={"text"} placeholder="Nom..." name="lname" defaultValue={lname} onChange={onInputChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddPromotion">
              <Form.Label htmlFor="promotion" >Promotion</Form.Label>
              <Form.Control type={"text"} placeholder="Promotion..." name="promotion" defaultValue={promotion} onChange={onInputChange} required/>
            </Form.Group>
              <Form.Group className="mb-3" controlId="formAddEmail">
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Control type={"text"} placeholder="E-mail..." name="email" defaultValue={email} onChange={onInputChange} required/>
              </Form.Group>
            <Form.Group className="mb-3" controlId="formAddMobile">
                <Form.Label htmlFor="mobile">Téléphone</Form.Label>
                <Form.Control type={"text"} placeholder="Téléphone..." name="mobile" defaultValue={mobile} onChange={onInputChange} required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddAddress">
                <Form.Label htmlFor="address">Adresse</Form.Label>
                <Form.Control type={"text"} placeholder="Address" name="address" defaultValue={address} onChange={onInputChange} required/>
              </Form.Group>
            <Form.Group className="mb-3" controlId="formAddAbsence">
                <Form.Label htmlFor="absence">Absence(s)</Form.Label>
                <Form.Control type={"number"} min="1" placeholder="Absence..." name="absence" defaultValue={absence} onChange={onInputChange} required/>
              </Form.Group>
            <Form.Group className="mb-3" controlId="formAddRepresentative">
              <Form.Label htmlFor="representative">Délégue:</Form.Label>
                <Form.Select name="representative" defaultValue={representative} onChange={onInputChange} required>
                  <option value="">-- Sélectionner le statut --</option>
                  <option value="true">Vrai</option>
                  <option value="false">Faux</option>
              </Form.Select>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="danger" className="fw-bold mt-3">Envoyer</Button>
              </div>
            </Form>
          </div>
        </Row>
        <div className="text-center">
        <Link className="btn btn-primary mt-5 px-5" to="/apprenants">
            <BsFillArrowLeftCircleFill className="h1 align-middle"/>
        </Link>
        </div>
      </Container>
    </main>
  );
}

export default AddLearner
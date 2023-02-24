import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
    document.title = 'Accueil 👤';
    AOS.init();
    AOS.refresh();
  }, []);

  return (

<div data-aos="fade-right" data-aos-delay="100" data-aos-duration="4000">
    <main className="text-center">
        <h1 className="mb-5 px-5">Bienvenue chez Learnee</h1>
        <h2 className="mb-3 px-5">Accède à la liste des apprenants !</h2>
        <Link className="btn btn-danger fw-bold text-uppercase border border-warning py-2 my-4 link-to-allclients" to="/apprenants"><span className="h4">Espace de gestion</span></Link>
        <p className="px-5 h5 pt-3">Accède à l'espace de gestion pour consulter l'ensemble des apprenants.</p>
        <p className="px-5 pb-3 h5">Tu pourras également ajouter, consulter, <span className="line-break">modifier ou supprimer un apprenant de ton choix !</span></p>
        <FaUsers size={70} />
    </main>
</div>
  )
}
export default Home
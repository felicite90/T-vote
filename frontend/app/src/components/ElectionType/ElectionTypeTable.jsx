import axios from 'axios';
import { React, useState } from 'react'
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { useToast, immediateToast } from "izitoast-react";


function ElectionTypeTable({ electionTypes, setElectionTypes, isLoading, fetchData }) {
  // Ici on affiche un formulaire en recuperer les props depuis le component parent (App.jsx)

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(1); // 1=Create, 2=Read, 3=Update, 4=Delete
  const [currentElectionType, setCurrentElectionType] = useState({
    'id': '',
    'code': '',
    'name': ''
  });

  const handleClose = () => setShow(false); // On ferme le modal

  const handleShowOnUpdate = (electionType) => {
    // On ouvre le modal et on met à jour le currentElectionType
    setCurrentElectionType({
      'id': electionType.id,
      'code': electionType.code,
      'name': electionType.name
    });
    setShow(true);
    setTitle(3); // 1=Create, 2=Read, 3=Update, 4=Delete
  };

  const handleShowOnCreate = () => {
    setShow(true);
  };

  const handleShowOnRead = (electionType) => {
    // On ouvre le modal et on met à jour le currentElectionType
    setCurrentElectionType({
      'id': electionType.id,
      'code': electionType.code,
      'name': electionType.name
    });
    setShow(true);
    setTitle(2); // 1=Create, 2=Read, 3=Update, 4=Delete
  };

  const handleShowOnDelete = (electionType) => {
    // On ouvre le modal et on met à jour le currentElectionType
    setCurrentElectionType({
      'id': electionType.id,
      'code': electionType.code,
      'name': electionType.name
    });
    setShow(true);
    setTitle(4); // 1=Create, 2=Read, 3=Update, 4=Delete
  };

  const handleDelete = async (id) => {
    // Pour supprimer un Type d'election connaissant son ID
    try {
      await axios.delete(`http://127.0.0.1:8000/api/electiontype/${id}/`); // attention au caractere utilisé ici
      const newList = electionTypes.filter(electionType => electionType.id !== id); // :)
      setElectionTypes(newList);
      immediateToast("success", {
        message: "Object supprimé avec succès",
        timeout: 5000,
        position: "topCenter"
      });
      handleClose(); // On ferme le modal
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async (id, value) => {
    // Pour modifier un Type d'election
    try {
      const response = await axios.patch(`http://127.0.0.1:8000/api/electiontype/${id}/`, value); // attention au caractere utilisé ici
      const newList = electionTypes.map(electionType => electionType.id === id ? response.data : electionType); // :)
      setElectionTypes(newList);
      handleClose(); // On ferme le modal
      immediateToast("success", {
        message: "Object modifié avec succès",
        timeout: 5000,
        position: "topCenter"
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreate = async () => {
    // Pour ajouter un type d'élection
    console.log(currentElectionType, "--");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/electiontype/", currentElectionType);
      console.log(response);
      immediateToast("success", {
        message: "Object créé avec succès",
        timeout: 5000,
        position: "topCenter"
      });
      fetchData(); // On recharge les données
      handleClose(); // On ferme le modal
    } catch (error) {
      console.log(error);
    }
  }

  const handleCodeChange = (e) => {
    // Pour les changements au niveau du code
    setCurrentElectionType(prev => ({
      ...prev,
      'code': e.target.value
    }));

  };

  const handleNameChange = (e) => {
    // Pour les changements au niveau du name
    setCurrentElectionType(prev => ({
      ...prev,
      'name': e.target.value
    }));
  };

  return (
    <div className='table-responsive mt-2'>
      <button className='btn btn-sm btn-primary mb-1'><FaPlus onClick={handleShowOnCreate} /></button>
      <table className='table table-sm table-bordered table-striped table-hover'>
        <thead className='table-dark'>
          <tr className='text-center'>
            <th>#</th>
            <th>CODE</th>
            <th>LIBELLÉ</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <tr><td colSpan={4}>Chargement en cours...</td></tr> :
            <>
              {electionTypes.map((electionType, index) => {
                return (
                  <tr className='text-center' key={index}>
                    <td>{electionType.id}</td>
                    <td>{electionType.code}</td>
                    <td>{electionType.name}</td>
                    <td>
                      <span><FaEdit onClick={() => handleShowOnUpdate(electionType)} /></span>
                      <span><FaEye onClick={() => handleShowOnRead(electionType)} /></span>
                      <span><FaTrash onClick={() => handleShowOnDelete(electionType)} /></span>
                    </td>
                  </tr>
                )
              })}
            </>}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title == 1 ? "Ajout d'un type d'élection" : title == 2 ? "Détail d'un type d'élection" : title == 3 ? "Modification d'un type d'élection" : "Suppression d'un type d'élection"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {title == 1 ? <>
            {/* Create */}
            <input type="text" className='form-control mb-1' onChange={handleCodeChange} placeholder='Code' />
            <input type="text" className='form-control' onChange={handleNameChange} placeholder='Nom' />
          </> : title == 2 ? <>
            {/* Read */}
            <table className='table table-sm table-bordered'>
              <tbody>
                <tr>
                  <th>#</th>
                  <td>{currentElectionType.id}</td>
                </tr>
                <tr>
                  <th>CODE</th>
                  <td>{currentElectionType.code}</td>
                </tr>
                <tr>
                  <th>NOM</th>
                  <td>{currentElectionType.name}</td>
                </tr>
              </tbody>
            </table>
          </> : title == 3 ? <>
            {/* Update */}
            <input type="text" value={currentElectionType.code} className='form-control mb-1' onChange={handleCodeChange} placeholder='Code' />
            <input type="text" value={currentElectionType.name} className='form-control' onChange={handleNameChange} placeholder='Nom' />
          </> : <>
            {/* Delete */}
            <p>
              Êtes-vous sûr de vouloir supprimer l'objet selectionné #{currentElectionType.id} ?
            </p>
          </>}
        </Modal.Body>
        <Modal.Footer>
          {title == 1 ? <>
            {/* Create */}
            <Button variant="primary" onClick={handleCreate}>
              Valider
            </Button>
          </> : title == 2 ? <>
            {/* Read */}
            {/* On affiche pas de bouton valider */}
          </> : title == 3 ? <>
            {/* Update */}
            <Button variant="primary" onClick={() => handleUpdate(currentElectionType.id, currentElectionType)}>
              Valider
            </Button>
          </> : <>
            {/* Delete */}
            <Button variant="primary" onClick={() => handleDelete(currentElectionType.id)}>
              Oui
            </Button>
          </>}
          <Button variant="secondary" onClick={handleClose}>
            {title == 4 ? "Non" : "Fermer"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ElectionTypeTable

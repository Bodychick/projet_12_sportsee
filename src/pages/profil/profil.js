import React from 'react';
import { USER_MAIN_DATA } from '../../data/data'; 
import Footer from '../../composant/footer/footer'
import '../profil/profil.css'

function Profil() {
  const storedUserId = localStorage.getItem('selectedUserId');
  const selectedUser = USER_MAIN_DATA.find(user => user.id === parseInt(storedUserId, 10));

  return (
    <section className="dashboardBody">
      <Footer />
      <section className="dashboard">
      {
        selectedUser ? (
            <div>
            <h1>
                Bonjour <span id="prenom">{selectedUser.userInfos.firstName} {selectedUser.userInfos.lastName}</span>
            </h1>
            <p>Félicitations, vous avez explosé vos objectifs hier</p>
            <div>
                <h2>Âge :</h2>
                <p>{selectedUser.userInfos.age}</p>
            </div>
            </div>
        ) : (
            
            <div>Veuillez sélectionner un utilisateur dans les réglages</div>
        )
        }
        
      </section>
      <section>
        <div className="columnGraph"></div>
        <div className="columnRight"></div>
      </section>
    </section>
  );
}

export default Profil;

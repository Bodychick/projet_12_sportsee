import React from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY } from '../../data/data'; 
import Footer from '../../composant/footer/footer';
import '../profil/profil.css';
import MyBarChart from '../../composant/barChart/barChart'



function Profil() {
  const storedUserId = localStorage.getItem('selectedUserId');
  const selectedUser = USER_MAIN_DATA.find(user => user.id === parseInt(storedUserId, 10));
  console.log(selectedUser);
  const userActivity = USER_ACTIVITY.find(user => user.userId === parseInt(storedUserId,10)).sessions;
  console.log(userActivity)

  return (
    <section className="dashboardBody">
      <Footer />
      <section className="dashboard">
      {
        selectedUser ? (
          //Info utilisateurs
            <section>
              <h1>
                  Bonjour <span id="prenom">{selectedUser.userInfos.firstName} </span>
              </h1>
              <p>Félicitations, vous avez explosé vos objectifs hier</p>
              <div>
                  <h2>Âge :</h2>
                  <p>{selectedUser.userInfos.age}</p>
              </div>
              <MyBarChart data={userActivity} />
            </section>

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

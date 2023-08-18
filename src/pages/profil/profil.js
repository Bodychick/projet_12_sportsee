import React from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../data/data'; 
import Footer from '../../composant/footer/footer';
import '../profil/profil.css';
import MyBarChart from '../../composant/barChart/barChart'
import UsersInfo from '../../composant/info-users/info-users';
import MyAreaChart from '../../composant/areaChart/AreaChart';
import MyRadarChart from '../../composant/radarChart/radarChat'



function Profil() {
  const storedUserId = localStorage.getItem('selectedUserId');
  const selectedUser = USER_MAIN_DATA.find(user => user.id === parseInt(storedUserId, 10));
  const userActivity = USER_ACTIVITY.find(user => user.userId === parseInt(storedUserId,10)).sessions;
  const userSession = USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(storedUserId,10)).sessions;
  const userIntensity = USER_PERFORMANCE.find(user => user.userId === parseInt(storedUserId,10))
  console.log(userIntensity);

  return (
    <section className="dashboardBody">
      <Footer />
      
      {
        selectedUser ? (
          //Info utilisateurs
          <section className="dashboard">
            <h1>
                  Bonjour <span id="prenom">{selectedUser.userInfos.firstName} </span>
           </h1>
            <p>Félicitations, vous avez explosé vos objectifs hier</p>

            <div className='gaph_users'>
              <section className='graph'>
                <MyBarChart data={userActivity} />
                <MyAreaChart data={userSession}/>
                <MyRadarChart data={userIntensity}/>
              </section>
              <section className='userInfos'>
                <UsersInfo icon="fa-solid fa-fire" value={selectedUser.keyData.calorieCount} sousTitre="Calories" unite="kCal" color="pink"/>
                <UsersInfo icon="fa-solid fa-fire" value={selectedUser.keyData.proteinCount} sousTitre="Protéines" unite="g" color="#4AB8FF1A"/>
                <UsersInfo icon="fa-solid fa-fire" value={selectedUser.keyData.carbohydrateCount} sousTitre="Glucides" unite="g" color="#F9CE23"/>
                <UsersInfo icon="fa-solid fa-fire" value={selectedUser.keyData.lipidCount} sousTitre="Lipides" unite="g" color="#FD51811A"/>                
              </section>
            </div>

            
          </section>

        ) : (
            
            <div>Veuillez sélectionner un utilisateur dans les réglages</div>
        )
        }
        
      
      <section>
        <div className="columnGraph"></div>
        <div className="columnRight"></div>
      </section>
    </section>
  );
}

export default Profil;

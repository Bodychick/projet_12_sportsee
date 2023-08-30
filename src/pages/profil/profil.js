import React from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../data/data'; 
import Footer from '../../composant/footer/footer';
import '../profil/profil.css';
import MyBarChart from '../../composant/barChart/barChart'
import UsersInfo from '../../composant/info-users/info-users';
import MyAreaChart from '../../composant/areaChart/AreaChart';
import MyRadarChart from '../../composant/radarChart/radarChat'
import ChartScore from '../../composant/scoreChart/scoreChart';



function Profil() {
  const storedUserId = localStorage.getItem('selectedUserId');
  const selectedUser = USER_MAIN_DATA.find(user => user.id === parseInt(storedUserId, 10));
  const userActivity = USER_ACTIVITY.find(user => user.userId === parseInt(storedUserId,10)).sessions;
  const userSession = USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(storedUserId,10)).sessions;
  const userIntensity = USER_PERFORMANCE.find(user => user.userId === parseInt(storedUserId,10));
  let score = 0;

  if(selectedUser.score == null){
     score = selectedUser.todayScore;
  }
  else {
     score = selectedUser.score;
  }

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
                <div className='graph__haut'>
                  <MyBarChart data={userActivity} />
                </div>
                <div className='graph__bas'>
                  <MyAreaChart data={userSession}/>
                  <MyRadarChart data={userIntensity}/>
                  <ChartScore score={score} />
                </div>
                
              </section>
              <section className='userInfos'>
                <UsersInfo icon="fa-solid fa-fire" value={selectedUser.keyData.calorieCount} sousTitre="Calories" unite="kCal" color="rgba(255, 0, 0, 1)" colorBackground="rgba(255, 0, 0, 0.1)"/>
                <UsersInfo icon="fa-solid fa-drumstick-bite" value={selectedUser.keyData.proteinCount} sousTitre="Protéines" unite="g" color="rgba(74, 184, 255, 1)" colorBackground="rgba(74, 184, 255, 0.1)"/>
                <UsersInfo icon="fa-brands fa-apple" value={selectedUser.keyData.carbohydrateCount} sousTitre="Glucides" unite="g" color="rgba(249, 206, 35, 1)" colorBackground="rgba(249, 206, 35, 0.1)"/>
                <UsersInfo icon="fa-solid fa-burger" value={selectedUser.keyData.lipidCount} sousTitre="Lipides" unite="g" color="rgba(253, 81, 129, 1)" colorBackground="rgba(253, 81, 129, 0.1)"/>                
              </section>
            </div>        
          </section>

        ) : (
            
            <div>Veuillez sélectionner un utilisateur dans les réglages</div>
        )
        }
        
    </section>
  );
}

export default Profil;

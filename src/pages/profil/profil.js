import React, { useState, useEffect } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../data/data'; 
import Footer from '../../composant/footer/footer';
import '../profil/profil.css';
import MyBarChart from '../../composant/barChart/barChart'
import UsersInfo from '../../composant/info-users/info-users';
import MyAreaChart from '../../composant/areaChart/AreaChart';
import MyRadarChart from '../../composant/radarChart/radarChat'
import ChartScore from '../../composant/scoreChart/scoreChart';
import {getUserAverageSession, getUserActivity, getUserPerformance, getUserMainData} from '../../services/api'

function Profil() {
  const storedUserId = localStorage.getItem('selectedUserId');
  const storeDataIsOn = localStorage.getItem('isOn');
  var isAPI = true;
  console.log(storeDataIsOn);

  const [userData, setUserData] = useState(null);
  const [userActivityFetch, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPeformance, setUserPeformance] = useState(null);

  const test = USER_PERFORMANCE.find(user => user.userId === parseInt(storedUserId, 10));
  console.log(test)

  useEffect(() => {
    // Vérifiez si isOn est true avant d'appeler fetchUserData
    if (storeDataIsOn === 'true') {
      async function fetchUserDataMainData() {
        try {
          const dataTest = await getUserMainData(storedUserId);
          setUserData(dataTest.data); // Assurez-vous d'extraire les données correctement
        } catch (error) {
          console.error('Erreur lors de la récupération des données utilisateur', error);
        }
      }
      fetchUserDataMainData();
    }
  }, [storedUserId, storeDataIsOn]); 

  useEffect(() => {
    // Vérifiez si isOn est true avant d'appeler fetchUserData
    if (storeDataIsOn === 'true') {
      async function fetchUserDataAverageSession() {
        try {
          const userAverage = await getUserAverageSession(storedUserId);
          setUserAverageSessions(userAverage.data.sessions); // Assurez-vous d'extraire les données correctement
        } catch (error) {
          console.error('Erreur lors de la récupération des données utilisateur', error);
        }
      }
      fetchUserDataAverageSession();
    }
  }, [storedUserId, storeDataIsOn]);
  
  useEffect(() => {
    // Vérifiez si isOn est true avant d'appeler fetchUserData
    if (storeDataIsOn === 'true') {
      async function fetchUserDataActivity() {
        try {
          const userActivity1 = await getUserActivity(storedUserId);
          setUserActivity(userActivity1.data.sessions); // Assurez-vous d'extraire les données correctement
        } catch (error) {
          console.error('Erreur lors de la récupération des données utilisateur', error);
        }
      }
      fetchUserDataActivity();
    }
  }, [storedUserId, storeDataIsOn]); 
  

  
  useEffect(() => {
    // Vérifiez si isOn est true avant d'appeler fetchUserData
    if (storeDataIsOn === 'true') {
      async function fetchUserDataPerformance() {
        try {
          const userPerf = await getUserPerformance(storedUserId);
          console.log(userPerf.data);

          if (userPerf && userPerf.data) {
            // Assurez-vous que userActivityResponse et userActivityResponse.data ne sont pas nuls
            setUserPeformance(userPerf.data);
          }
           // Assurez-vous d'extraire les données correctement
        } catch (error) {
          console.error('Erreur lors de la récupération des données utilisateur', error);
        }
      }
      fetchUserDataPerformance();
    }
  }, [storedUserId, storeDataIsOn]);

  // Initialisez les variables pour stocker les données en fonction de storeDataIsOn
  let selectedUser, userActivity, userSession, userIntensity, score;

  if (storeDataIsOn === "true") {
    // Utilisez les données de l'API
    selectedUser = userData; 
    userActivity = userActivityFetch;
    userSession = userAverageSessions;
    userIntensity = userPeformance;
    console.log(userIntensity);
    isAPI = true;
  } else {
    // Mockez les données
    selectedUser = USER_MAIN_DATA.find(user => user.id === parseInt(storedUserId, 10));
    userActivity = USER_ACTIVITY.find(user => user.userId === parseInt(storedUserId, 10)).sessions;
    userSession = USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(storedUserId, 10)).sessions;
    userIntensity = USER_PERFORMANCE.find(user => user.userId === parseInt(storedUserId, 10));
    console.log(userIntensity)
    isAPI = false;
  }

  console.log(userIntensity);
  console.log(userPeformance);
  // Initialisation du score score en fonction de selectedUser
  score = selectedUser ? (selectedUser.score != null ? selectedUser.score : selectedUser.todayScore) : 0;

  return (
    <section className="dashboardBody">
      <Footer />
      
      {selectedUser ? (
        // Info utilisateurs 
        <section className="dashboard">
          <h1>
            Bonjour <span id="prenom">{selectedUser.userInfos.firstName} </span>
          </h1>
          <p>Félicitations, vous avez explosé vos objectifs hier. { isAPI ? "Provenant de l'API" : "Par fichier"}</p>

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
      )}
    </section>
  );
}

export default Profil;

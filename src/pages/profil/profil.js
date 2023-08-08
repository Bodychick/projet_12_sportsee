import Footer from "../../composant/footer/footer";
import "../profil/profil.css"

function Profil(){

    return(
        <section className="dashboardBody">
            <Footer />
            <section className="dashboard">
                <h1>Bonjour <span id="prenom"></span></h1>
                <p>Félicitations, vous avez explosé vos objectifs hier</p>
            </section>  
            <section>
                <div className="columnGraph">
                    
                </div>
                <div className="columnRight">

                </div>
            </section>
        </section>
    );
}

export default Profil
import '../footer/footer.css'
import Icons from '../sportsIcon/sportsIcon'

function Footer(){

    return(
        <aside className='footer'>
            <Icons name='fa-solid fa-table-tennis-paddle-ball' />
            <Icons name='fa-solid fa-person-swimming' />
            <Icons name='fa-solid fa-person-biking' />
            <Icons name='fa-solid fa-dumbbell' />  
            <p className='copyright'>copyright</p>
        </aside>
    );
}

export default Footer
import "../info-users/info-users.css"

function UsersInfo(props){
    const color = props.color
    const icon = props.icon;
    const value = props.value;
    const sousTitre = props.sousTitre;
    const unite = props.unite;
    
    return(
        <div className='infos'>
            <div className='icon' style={{backgroundColor:color}}><i class={icon} style={{backgroundColor:color,color:color}}></i></div>
            <div className='infos-texte'>
                <p>{value}{unite}</p>
                <p className='sous-titre'>{sousTitre}</p>
            </div>
        </div>
    );
}

export default UsersInfo
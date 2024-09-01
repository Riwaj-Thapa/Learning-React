import profilePic from './assets/IMG_20240505_201423_780.jpg'

function Card(){

    return(
        <div className="card">
                <img className="card-image" src={profilePic} alt="profile picture"></img>
                <h2 className="card-title">Riwaj Thapa</h2>
                <p className="card-text" >I am currently purshing my BSC computing at ICP.</p>
        </div>
    );

}

export default Card
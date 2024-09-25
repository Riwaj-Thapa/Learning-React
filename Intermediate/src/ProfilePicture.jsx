function ProfilePicture(){

    const imageUrl = './src/assets/IMG_20240505_201423_780.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e)=> handleClick(e)} src={imageUrl
    }></img>);

}

export default ProfilePicture
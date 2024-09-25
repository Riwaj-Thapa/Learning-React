import PropsTypes from 'prop-types'

function UserGreeting(props){
    return(
        props.isloggedIn ? <p>Welcome to our page {props.username} </p>:  <p>Please login first</p>
    )
}

UserGreeting.propsTypes = {
    isloggedIn: PropsTypes.bool,
    username: PropsTypes.string,
    
} 


UserGreeting.defaultProps= {
    isloggedIn: false,
    username: "Guest",
}
export default UserGreeting
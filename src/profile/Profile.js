import React from 'react';
import PropTypes from 'prop-types'

const Profile = (props) => {
    const handleName = () => alert (`This is ${props.FullName}`)
    console.log(props)
    return (
        <div>
        {props.children}
        <h1>{props.FullName}</h1>
        <h1>{props.Bio}</h1>
        <h1>{props.Profession}</h1>
        <button onClick={handleName}>click me</button>



        </div>
    )
}
export default Profile

Profile.defaultProps ={
    FullName: "fullname"
}
Profile.propTypes ={
    FullName: PropTypes.string

}
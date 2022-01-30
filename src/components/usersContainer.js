import { fetchUsers } from "../redux/users/usersAction"
import {connect}  from "react-redux"

function UsersContainer (props) {
    return (
        <div>
            <button style={{backgroundColor: "red", color:"#fff"}}>Load Users</button>
        {props.users.length > 0
        ? props.users.map((user)=> (
            <ul key={user.id}>
                <li>{user.name}</li>
            </ul>
        ))
        : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)

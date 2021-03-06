import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/employees")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div id="body">
                <div id="image"/>
                <div id="user-list">
                    <ul>
                        {users.map(user => (
                        <li key={user.employeeNumber}>
                        <Link to={`user/${user.employeeNumber}`}>{user.firstName} {user.lastName}</Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Home;
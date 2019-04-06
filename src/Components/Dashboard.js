import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    dispalyData = data => data && data.map(val => <tr key={val.id}>
        <td>{val.name}</td>
        <td>{val.email}</td>
        <td>{val.phoneNo}</td>
        <td>{val.gender}</td>
        <td>{val.age}</td>
    </tr>);
    handleLogout = () => {
        localStorage.removeItem("usersdata");
        window.location.reload();
    }
    render() {
        const { usersData } = this.props;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="card mb-5 mt-5">
                        <div className="card-body text-center">
                            <h4 className="text-info">Hello welcome {this.props.currentUser.name}
                                <button onClick={this.handleLogout} className="btn btn-danger float-right">Logout</button>
                            </h4>

                        </div>
                    </div>

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th> Name</th>
                                <th>Email</th>
                                <th>Ph.No</th>
                                <th>Gender</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dispalyData(usersData)}
                        </tbody>
                    </table>
                </div>

            </React.Fragment>
        )
    }
};
const mapStateToProps = state => ({
    usersData: state.usersData,
    currentUser: state.currentUser
});
export default connect(mapStateToProps)(Dashboard);

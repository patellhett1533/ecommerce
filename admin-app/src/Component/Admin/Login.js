import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Actions';

const Login = () => {

  const dispatch = useDispatch();

  const userLogin = (e) => {

    e.preventDefault();
    const user = {
      email: "het@gmail.com",
      password: "123456"
    }

    dispatch(login(user));
  }

  return (
    <div>
      <div className="container my-4">
        <form onSubmit={userLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

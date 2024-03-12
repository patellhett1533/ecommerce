import React from 'react';
import { BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid container">
                    <a class="navbar-brand">Admin Dashboard</a>
                    <form class="d-flex">
                            <Link class="btn btn-outline-success mx-2" to="/admin/login">Login</Link>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

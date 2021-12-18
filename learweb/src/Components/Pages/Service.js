import React from 'react'
// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Service = () => {
    return (
        <div>
            <h1>Welcome to Service Page</h1><span><Link to="/" className="btn btn-danger">Go back</Link></span>
        </div>
    )
}

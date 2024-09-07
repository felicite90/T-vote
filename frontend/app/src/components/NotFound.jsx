import React from 'react'

function NotFound() {
    return (
        <div className='container mt-2'>
            <div className="row justify-content-center d-flex">
                <div className="card">
                    <div className="card-header">
                        <h4>Page introuvable</h4>
                    </div>
                    <div className="card-body">
                        La page que vous recherchez est introuvable.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound

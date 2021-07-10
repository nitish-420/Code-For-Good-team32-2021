import React from 'react'

export const Spinner = () => {
    return (
        <>
            <div className="container text-center" style={{ marginTop: '30vh' }}>
                <h1>
                    Loading...
                </h1>
                <div class="spinner-grow spinner-border-sm text-secondary mx-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow spinner-border-sm text-dark mx-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow spinner-border-sm text-secondary mx-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

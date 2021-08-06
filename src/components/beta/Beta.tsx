import React from 'react';

function Beta() {
    return (
        <>
            <h1>Beta Version</h1>
            <h2>Basic list view</h2>
            <ul>
                <li>✅ list the top coding rules</li>
                <li>✅ list the tags </li>
                <li>✅ list the teams </li>
                <li>✅ filter the rules by tag</li>
                <li>✅ sort the rules by votes</li>
            </ul>

            <h4>Basic detail view</h4>
            <ul>
                <li>✅ Detail of the coding rule </li>
                <li>✅ switch between good and bad snippet</li>
            </ul>

            <h4>Basic modification</h4>
            <ul>
                <li>✅ insert a new rule </li>
                <li>✅ insert a new code snippet </li>
                <li>✅ edit the existing coding rule </li>
                <li>✅ edit the code snippet </li>
            </ul>
        </>
    );
}

export default Beta;

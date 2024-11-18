import React from 'react';
import Chat from '../components/Chat';
import FileUpload from '../components/FileUpload';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Underground Communications</h1>
            <Chat />
            <FileUpload />
        </div>
    );
};

export default Home;

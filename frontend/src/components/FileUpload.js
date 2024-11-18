import React from 'react';

const FileUpload = () => {
    const handleFileUpload = (e) => {
        // Logic to handle file upload
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
};

export default FileUpload;

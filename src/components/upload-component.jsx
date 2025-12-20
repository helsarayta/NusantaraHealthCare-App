import { useState } from "react";

const UploadComponent = () => {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file");
            return;
        }

        console.log("Uploaded file:", file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">

                <div style={{position: 'relative', width: '15rem'}}>
                    <input
                        type="file"
                        style={{
                            width: '14rem',
                            border: '1px solid',
                            height: '8rem',
                            padding: '50px',
                            background: 'white',
                            borderRadius: '10px',
                            position: 'relative',
                            opacity: 0, // Make the file input invisible
                            zIndex: 2,
                        }}
                        className="form-control"
                        onChange={handleChange}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '14rem',
                            height: '8rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'white',
                            borderRadius: '10px',
                            border: '1px dashed gray',
                            zIndex: 1,
                        }}
                    >
                        <span style={{marginLeft: '10px', color: '#007bff', fontWeight: 'bold'}} className={'d-flex flex-column align-items-center'}>
                            <i class="bi bi-person-bounding-box" style={{fontSize: '50px', color: '#007bff'}}></i>
                            Upload Foto
                        </span>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UploadComponent;

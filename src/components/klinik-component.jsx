import React, {useState} from 'react';
import {poliOptions, docterOptions} from "../data";

const KlinikComponent = () => {
    const[poli, setPoli] = useState("")
    const[dokter, setDokter] = useState(null)
    const [filteredDokter, setFilteredDokter] = useState([]);

    const handleDokterBaseOnPoli = (idPoli) => {
        setPoli(idPoli);
        setDokter(null);

        const result = docterOptions.filter(
            (d) => d.poli === Number(idPoli)
        );

        setFilteredDokter(result);
    }

    function onChangeIdDokter(dokterId) {
        const selectedDokter = filteredDokter.find(
            (d) => d.id === Number(dokterId)
        );

        setDokter(selectedDokter);
    }

    return (
        <div>
            <div className="d-flex flex-column gap-3">
                <div className="card w-100">
                    <div className="card-header fw-bold">
                        Detail Pasien :
                    </div>
                    <div className="card-body">
                        <div className={'d-flex flex-column w-100'}>
                            <div className="d-flex flex-row gap-3">
                                <div className="mb-3 w-25">
                                    <input type="text" className="form-control" id="namaPasien"
                                           aria-describedby="Nama Pasien" placeholder={'Nama Pasien'}/>
                                </div>

                                <div className="mb-3 w-25">
                                    <input type="text" className="form-control" id="rmPasien"
                                           aria-describedby="RM Pasien" placeholder={'No Rekam Medis'}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="card w-100">
                    <div className="card-header fw-bold">
                        Detail Dokter :
                    </div>
                    <div className="card-body">
                        <div className={'d-flex flex-column w-100'}>
                            <div className="d-flex flex-row gap-3">
                                <select
                                    className="form-select mb-3 w-25"
                                    value={poli}
                                    onChange={(e) => handleDokterBaseOnPoli(e.target.value)}
                                >
                                    <option value="">--Pilih Poli--</option>
                                    {poliOptions.map(opt => (
                                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                                    ))}
                                </select>

                                <select
                                    className="form-select mb-3 w-25"
                                    value={dokter?.id || ""}
                                    onChange={(e) => onChangeIdDokter(e.target.value)}
                                    disabled={!poli}
                                >
                                    <option value="">--Pilih Dokter--</option>
                                    {filteredDokter.map(opt => (
                                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                                    ))}
                                </select>

                                <div className="mb-3 w-25">
                                    <input type="text" className="form-control" id="idDokter" disabled={true}
                                           aria-describedby="ID Dokter" placeholder={'ID Dokter'}
                                           value={dokter?.id || ""}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="card w-100">
                    <div className="card-header fw-bold">
                        Detail Tindakan :
                    </div>
                    <div className="card-body">
                        <div className={'d-flex flex-column w-100 gap-2'}>

                            <div className="d-flex flex-row gap-3">
                                <button
                                    type="button"
                                    className="btn btn-danger d-flex align-items-center justify-content-center"
                                    style={{width: "40px", height: "40px"}}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>

                                <select
                                    className="form-select mb-3 w-25"
                                    value={poli}
                                    onChange={(e) => handleDokterBaseOnPoli(e.target.value)}
                                >
                                    <option value="">--Pilih Poli--</option>
                                    {poliOptions.map(opt => (
                                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                                    ))}
                                </select>

                                <select
                                    className="form-select mb-3 w-25"
                                    value={dokter?.id || ""}
                                    onChange={(e) => onChangeIdDokter(e.target.value)}
                                    disabled={!poli}
                                >
                                    <option value="">--Pilih Dokter--</option>
                                    {filteredDokter.map(opt => (
                                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                                    ))}
                                </select>

                                <div className="mb-3 w-25">
                                    <input type="text" className="form-control" id="idDokter" disabled={true}
                                           aria-describedby="ID Dokter" placeholder={'ID Dokter'}
                                           value={dokter?.id || ""}
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                                style={{width: "40px", height: "40px"}}
                            >
                                <i className="bi bi-plus-circle"></i>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KlinikComponent;
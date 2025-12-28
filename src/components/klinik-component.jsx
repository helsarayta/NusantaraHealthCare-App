import React, {useState} from 'react';
import {poliOptions, docterOptions, tindakanOptions} from "../data";

const KlinikComponent = () => {
    const[poli, setPoli] = useState("")
    const[dokter, setDokter] = useState(null)
    const [filteredDokter, setFilteredDokter] = useState([]);
    const [tindakanList, setTindakanList] = useState([
        { tindakan: "", harga:0, jumlah:1 }
    ]);
    const[jumlahOrder, setJumlahOrder] = useState(1)
    const[harga, setHarga] = useState("")


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

    const addTindakan = () => {
        setTindakanList([
            ...tindakanList,
            { tindakan: "", harga: 0, jumlah: 1 }
        ]);
    };

    const removeTindakan = (index) => {
        setTindakanList(tindakanList.filter((_, i) => i !== index));
    };

    const handleTindakanChange = (index, value) => {
        const updated = [...tindakanList];

        // cari tindakan di master list
        const tindakan = tindakanOptions.find(t => t.id === Number(value));

        // update baris tindakan
        updated[index].tindakan = tindakan ? tindakan.name : "";
        updated[index].harga = tindakan ? tindakan.tarif : 0;

        setTindakanList(updated);
    };


    const increment = (index) => {
        const updated = [...tindakanList];
        updated[index].jumlah += 1;
        setTindakanList(updated);
    };

    const decrement = (index) => {
        const updated = [...tindakanList];
        if (updated[index].jumlah > 1) updated[index].jumlah -= 1;
        setTindakanList(updated);
    };



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

                            {tindakanList.map((item, index) => (
                                <div className="d-flex flex-row gap-3">
                                    <button
                                        type="button"
                                        className="btn btn-danger d-flex align-items-center justify-content-center"
                                        style={{width: "40px", height: "40px"}} onClick={() => removeTindakan(index)}
                                        disabled={tindakanList.length === 1}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>

                                    <select
                                        className="form-select mb-3 w-25"
                                        value={tindakanOptions.find(t => t.name === item.tindakan)?.id || ""}
                                        onChange={(e) => handleTindakanChange(index, e.target.value)}
                                    >
                                        <option value="">--Pilih Tindakan--</option>
                                        {tindakanOptions.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                                        ))}
                                    </select>

                                    <div className="d-flex gap-1">
                                        {/* Decrement */}
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => decrement(index)}
                                            style={{width: "40px", height: "40px"}}
                                        >
                                            <i className="bi bi-dash"></i>
                                        </button>

                                        {/* Input */}
                                        <div className="mb-3" style={{width: '50px'}}>
                                            <input
                                                type="text"
                                                className="form-control text-center"
                                                value={item.jumlah}
                                                readOnly
                                            />
                                        </div>
                                        {/* Increment */}
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => increment(index)}
                                            style={{width: "40px", height: "40px"}}
                                        >
                                            <i className="bi bi-plus"></i>
                                        </button>
                                    </div>

                                    <div className="mb-3 w-10">
                                        <input type="text" className="form-control" id="harga" readOnly={true}
                                               aria-describedby="harga" placeholder={'Harga'}
                                               value={item.harga ? item.harga.toLocaleString("id-ID") : ""}
                                        />
                                    </div>

                                    <div className="mb-3 w-10">
                                        <input type="text" className="form-control" id="total" readOnly={true}
                                               aria-describedby="total" placeholder={'Total Harga'}
                                               value={item.harga ? (item.harga * item.jumlah).toLocaleString("id-ID") : ""}
                                        />
                                    </div>


                                </div>

                            ))}

                            <button
                                type="button"
                                className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                                style={{width: "40px", height: "40px"}} onClick={addTindakan}
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
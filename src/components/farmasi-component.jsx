import React, {useState} from 'react';
import {daftarResep} from "../data";
import TambahResepComponent from "./tambah-resep-component";

const FarmasiComponent = () => {
    const [expandedResep, setExpandedResep] = useState(null);
    const [showFilter, setShowFilter] = useState(false);
    const [filter, setFilter] = useState({
        noResep: '',
        namaPasien: '',
        namaDokter: ''
    });
    const [showTambahResep, setShowTambahResep] = useState(false);

    if (showTambahResep) {
        return <TambahResepComponent onBack={() => setShowTambahResep(false)} />;
    }


    const toggleExpand = (noResep) => {
        setExpandedResep(prev => (prev === noResep ? null : noResep));
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter(prev => ({ ...prev, [name]: value }));
    };

    const filteredResep = daftarResep.filter(r =>
        r.noResep.toLowerCase().includes(filter.noResep.toLowerCase()) &&
        r.namaPasien.toLowerCase().includes(filter.namaPasien.toLowerCase()) &&
        r.namaDokter.toLowerCase().includes(filter.namaDokter.toLowerCase())
    );

    const formatRupiah = (value) =>
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(value);

    return (
        <div>
            <div className="card w-100">
                <div className="card-header fw-bold">
                    <div className={'d-flex justify-content-between'}>
                        Daftar Resep

                        <div className={'d-flex gap-3'}>
                            <button
                                type="button"
                                className="btn btn-danger d-flex align-items-center justify-content-center"
                                onClick={() => setShowTambahResep(true)}
                            >
                                Tambah Resep
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                style={{width: "40px", height: "40px"}}
                                onClick={() => setShowFilter(!showFilter)}
                            >
                                <i className="bi bi-funnel"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* FILTER PANEL */}
                {showFilter && (
                    <div className="card-body border-bottom">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <label className="form-label">No Resep</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="noResep"
                                    value={filter.noResep}
                                    onChange={handleFilterChange}
                                    placeholder="RSP-001"
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Nama Pasien</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="namaPasien"
                                    value={filter.namaPasien}
                                    onChange={handleFilterChange}
                                    placeholder="Andi"
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Nama Dokter</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="namaDokter"
                                    value={filter.namaDokter}
                                    onChange={handleFilterChange}
                                    placeholder="Dr. Budi"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* TABLE */}
                <div className="card-body">
                    <table className="table table-hover align-middle">
                        <thead>
                        <tr>
                            <th style={{ width: "40px" }}>#</th>
                            <th>No</th>
                            <th>No Resep</th>
                            <th>Nama Pasien</th>
                            <th>No Billing</th>
                            <th>Tanggal</th>
                            <th>Nama Dokter</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredResep.map((resep, index) => (
                            <React.Fragment key={resep.noResep}>
                                <tr>
                                    <td
                                        style={{ cursor: "pointer" }}
                                        onClick={() => toggleExpand(resep.noResep)}
                                    >
                                        <i
                                            className={`bi ${
                                                expandedResep === resep.noResep
                                                    ? "bi-chevron-down"
                                                    : "bi-chevron-right"
                                            }`}
                                        />
                                    </td>
                                    <td>{index + 1}</td>
                                    <td>{resep.noResep}</td>
                                    <td>{resep.namaPasien}</td>
                                    <td>{resep.noBilling}</td>
                                    <td>{resep.tanggal}</td>
                                    <td>{resep.namaDokter}</td>
                                </tr>

                                {expandedResep === resep.noResep && (
                                    <tr className="table-light">
                                        <td colSpan="7">
                                            <table className="table table-sm mb-0">
                                                <thead>
                                                <tr>
                                                    <th>Nama Obat</th>
                                                    <th className="text-end">Jumlah</th>
                                                    <th className="text-end">Harga</th>
                                                    <th className="text-end">Subtotal</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {resep.obatList.map((obat, i) => (
                                                    <tr key={i}>
                                                        <td>{obat.namaObat}</td>
                                                        <td className="text-end">{obat.jumlah}</td>
                                                        <td className="text-end">{formatRupiah(obat.harga)}</td>
                                                        <td className="text-end">
                                                            {formatRupiah(obat.jumlah * obat.harga)}
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}

                        {filteredResep.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center">
                                    Data tidak ditemukan
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default FarmasiComponent;
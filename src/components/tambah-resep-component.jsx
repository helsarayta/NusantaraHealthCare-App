import React, { useState } from "react";
import { poliOptions, docterOptions, obatOptions } from "../data";

const TambahResepComponent = ({ onBack }) => {
    const [poli, setPoli] = useState("");
    const [dokter, setDokter] = useState(null);
    const [filteredDokter, setFilteredDokter] = useState([]);

    const handleDokterBaseOnPoli = (idPoli) => {
        setPoli(idPoli);
        setDokter(null);

        const result = docterOptions.filter(
            (d) => d.poli === Number(idPoli)
        );
        setFilteredDokter(result);
    };

    function onChangeIdDokter(dokterId) {
        const selectedDokter = filteredDokter.find(
            (d) => d.id === Number(dokterId)
        );
        setDokter(selectedDokter);
    }

    const [obatList, setObatList] = useState([
        { namaObat: "", harga: 0, jumlah: 1 }
    ]);

    const addObat = () => {
        setObatList([...obatList, { namaObat: "", harga: 0, jumlah: 1 }]);
    };

    const removeObat = (index) => {
        setObatList(obatList.filter((_, i) => i !== index));
    };

    const handleObatChange = (index, value) => {
        const updated = [...obatList];
        const obat = obatOptions.find(o => o.id === Number(value));

        updated[index].namaObat = obat ? obat.name : "";
        updated[index].harga = obat ? obat.harga : 0;

        setObatList(updated);
    };

    const increment = (index) => {
        const updated = [...obatList];
        updated[index].jumlah += 1;
        setObatList(updated);
    };

    const decrement = (index) => {
        const updated = [...obatList];
        if (updated[index].jumlah > 1) updated[index].jumlah -= 1;
        setObatList(updated);
    };

    const totalSemuaBiaya = obatList.reduce(
        (sum, item) => sum + item.harga * item.jumlah,
        0
    );

    const resetForm = () => {
        setPoli("");
        setDokter(null);
        setFilteredDokter([]);
        setObatList([{ namaObat: "", harga: 0, jumlah: 1 }]);
    };

    return (
        <div className="d-flex flex-column gap-3">

            {/* HEADER */}
            <div className="card">
                <div className="card-header fw-bold d-flex justify-content-between">
                    Tambah Resep
                    <button className="btn btn-secondary" onClick={onBack}>
                        Kembali
                    </button>
                </div>
            </div>

            {/* ================= DETAIL PASIEN ================= */}
            <div className="card w-100">
                <div className="card-header fw-bold">Detail Pasien :</div>
                <div className="card-body">
                    <div className="d-flex gap-3">
                        <input
                            type="text"
                            className="form-control w-25"
                            placeholder="Nama Pasien"
                        />
                        <input
                            type="text"
                            className="form-control w-25"
                            placeholder="No Rekam Medis"
                        />
                    </div>
                </div>
            </div>

            {/* ================= DETAIL DOKTER ================= */}
            <div className="card w-100">
                <div className="card-header fw-bold">Detail Dokter :</div>
                <div className="card-body">
                    <div className="d-flex gap-3">
                        <select
                            className="form-select w-25"
                            value={poli}
                            onChange={(e) => handleDokterBaseOnPoli(e.target.value)}
                        >
                            <option value="">-- Pilih Poli --</option>
                            {poliOptions.map(opt => (
                                <option key={opt.id} value={opt.id}>{opt.name}</option>
                            ))}
                        </select>

                        <select
                            className="form-select w-25"
                            value={dokter?.id || ""}
                            onChange={(e) => onChangeIdDokter(e.target.value)}
                            disabled={!poli}
                        >
                            <option value="">-- Pilih Dokter --</option>
                            {filteredDokter.map(opt => (
                                <option key={opt.id} value={opt.id}>{opt.name}</option>
                            ))}
                        </select>

                        <input
                            type="text"
                            className="form-control w-25"
                            placeholder="ID Dokter"
                            value={dokter?.id || ""}
                            readOnly
                        />
                    </div>
                </div>
            </div>

            {/* ================= DETAIL RESEP OBAT ================= */}
            <div className="card w-100">
                <div className="card-header fw-bold">Detail Resep Obat :</div>
                <div className="card-body d-flex flex-column gap-2">

                    {obatList.map((item, index) => (
                        <div key={index} className="d-flex gap-3 align-items-center">
                            <button
                                className="btn btn-danger"
                                style={{ width: 40, height: 40 }}
                                onClick={() => removeObat(index)}
                                disabled={obatList.length === 1}
                            >
                                <i className="bi bi-trash"></i>
                            </button>

                            <select
                                className="form-select w-25"
                                value={
                                    obatOptions.find(o => o.name === item.namaObat)?.id || ""
                                }
                                onChange={(e) => handleObatChange(index, e.target.value)}
                            >
                                <option value="">-- Pilih Nama Obat --</option>
                                {obatOptions.map(o => (
                                    <option key={o.id} value={o.id}>{o.name}</option>
                                ))}
                            </select>

                            <div className="d-flex gap-1">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => decrement(index)}
                                >
                                    <i className="bi bi-dash"></i>
                                </button>
                                <input
                                    type="text"
                                    className="form-control text-center"
                                    style={{ width: 50 }}
                                    readOnly
                                    value={item.jumlah}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => increment(index)}
                                >
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>

                            <input
                                type="text"
                                className="form-control w-10"
                                readOnly
                                value={item.harga ? item.harga.toLocaleString("id-ID") : ""}
                                placeholder="Harga"
                            />

                            <input
                                type="text"
                                className="form-control w-10"
                                readOnly
                                value={
                                    item.harga
                                        ? (item.harga * item.jumlah).toLocaleString("id-ID")
                                        : ""
                                }
                                placeholder="Total"
                            />
                        </div>
                    ))}

                    <button
                        className="btn btn-outline-primary"
                        style={{ width: 40, height: 40 }}
                        onClick={addObat}
                    >
                        <i className="bi bi-plus-circle"></i>
                    </button>

                    <div className="card mt-4">
                        <div className="card-header d-flex gap-3">
                            <input
                                className="form-control w-50"
                                readOnly
                                value={"Rp " + totalSemuaBiaya.toLocaleString("id-ID")}
                            />

                            <button
                                className="btn btn-danger w-25"
                                onClick={resetForm}
                            >
                                <i className="bi bi-x-circle"></i> Batal
                            </button>

                            <button className="btn btn-success w-25">
                                <i className="bi bi-check2-circle"></i> Simpan Resep
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default TambahResepComponent;

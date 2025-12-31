export const pekerjaanOptions = [
    { id: 1, name: "Pegawai Negeri" },
    { id: 2, name: "Swasta" },
    { id: 3, name: "Wiraswasta" },
    { id: 4, name: "Pelajar/Mahasiswa" },
    { id: 5, name: "Lainnya" }
];

export const statusPernikahanOptions = [
    { id: 1, name: "Belum Menikah" },
    { id: 2, name: "Menikah" },
    { id: 3, name: "Cerai" }
];

export const golonganDarahOptions = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "AB" },
    { id: 4, name: "O" }
];

export const agamaOptions = [
    { id: 1, name: "Islam" },
    { id: 2, name: "Kristen Protestan" },
    { id: 3, name: "Katolik" },
    { id: 4, name: "Hindu" },
    { id: 5, name: "Buddha" },
    { id: 6, name: "Konghucu" },
    { id: 7, name: "Lainnya" }
];

export const pendidikanOptions = [
    { id: 1, name: "Tidak/Belum Sekolah" },
    { id: 2, name: "SD/Sederajat" },
    { id: 3, name: "SMP/Sederajat" },
    { id: 4, name: "SMA/Sederajat" },
    { id: 5, name: "Diploma" },
    { id: 6, name: "Sarjana" },
    { id: 7, name: "Pascasarjana" }
];

export const genderOptions = [
    { id: 1, name: "Laki-laki" },
    { id: 2, name: "Perempuan" }
];

export const tipeOptions = [
    { id: 1, name: "Pasien Umum" },
    { id: 2, name: "Pasien BPJS" },
    { id: 3, name: "Pasien Asuransi" }
];


export const poliOptions = [
    { id: 1, name: "Poli Umum" },
    { id: 2, name: "Poli Gigi" },
    { id: 3, name: "Poli Anak" },
    { id: 4, name: "Poli Kebidanan & Kandungan" },
    { id: 5, name: "Poli Penyakit Dalam" }
];

export const docterOptions = [
    { id: 1, name: "dr. Andi Pratama", poli: 1 },
    { id: 2, name: "dr. Siti Aisyah", poli: 1 },
    { id: 3, name: "dr. Budi Santoso", poli: 1 },

    { id: 4, name: "drg. Rina Marlina", poli: 2 },
    { id: 5, name: "drg. Fajar Nugroho", poli: 2 },
    { id: 6, name: "drg. Dewi Lestari", poli: 2 },

    { id: 7, name: "dr. Maya Putri, Sp.A", poli: 3 },
    { id: 8, name: "dr. Rizky Hidayat, Sp.A", poli: 3 },
    { id: 9, name: "dr. Liana Kusuma, Sp.A", poli: 3 },

    { id: 10, name: "dr. Anita Rahmawati, Sp.OG", poli: 4 },
    { id: 11, name: "dr. Hendra Wijaya, Sp.OG", poli: 4 },
    { id: 12, name: "dr. Nurul Hasanah, Sp.OG", poli: 4 },

    { id: 13, name: "dr. Ahmad Fauzi, Sp.PD", poli: 5 },
    { id: 14, name: "dr. Kevin Prabowo, Sp.PD", poli: 5 },
    { id: 15, name: "dr. Yuliana Hartono, Sp.PD", poli: 5 },
];

export const tindakanOptions = [
    { id: 1, name: "Konsultasi Dokter", tarif: 50000 },
    { id: 2, name: "Pemeriksaan Tekanan Darah", tarif: 15000 },
    { id: 3, name: "Pemeriksaan Gula Darah", tarif: 25000 },
    { id: 4, name: "Pemeriksaan Kolesterol", tarif: 30000 },
    { id: 5, name: "Pemeriksaan Asam Urat", tarif: 30000 },
    { id: 6, name: "Penyuntikan Obat", tarif: 20000 },
    { id: 7, name: "Infus Cairan", tarif: 75000 },
    { id: 8, name: "Nebulizer", tarif: 40000 },
    { id: 9, name: "Perawatan Luka", tarif: 60000 },
    { id: 10, name: "Penjahitan Luka Ringan", tarif: 100000 },
    { id: 11, name: "Penggantian Balutan Luka", tarif: 25000 },
    { id: 12, name: "Imunisasi", tarif: 50000 },
    { id: 13, name: "Pemeriksaan Kehamilan", tarif: 70000 },
    { id: 14, name: "Tes Kehamilan", tarif: 30000 },
    { id: 15, name: "Pembuatan Surat Keterangan Sehat", tarif: 20000 }
];

export const daftarResep =
    [
        {
            noResep: "RSP-001",
            namaPasien: "Andi Pratama",
            noBilling: "BILL-1001",
            tanggal: "2025-01-05",
            namaDokter: "Dr. Budi Santoso",
            obatList: [
                { namaObat: "Paracetamol", jumlah: 10, harga: 2000 },
                { namaObat: "Amoxicillin", jumlah: 20, harga: 3500 }
            ]
        },
        {
            noResep: "RSP-002",
            namaPasien: "Siti Aminah",
            noBilling: "BILL-1002",
            tanggal: "2025-01-06",
            namaDokter: "Dr. Rina Putri",
            obatList: [
                { namaObat: "Ibuprofen", jumlah: 15, harga: 3000 }
            ]
        },
        {
            noResep: "RSP-003",
            namaPasien: "Doni Saputra",
            noBilling: "BILL-1003",
            tanggal: "2025-01-06",
            namaDokter: "Dr. Agus Wijaya",
            obatList: [
                { namaObat: "CTM", jumlah: 10, harga: 1500 },
                { namaObat: "Vitamin C", jumlah: 30, harga: 1000 }
            ]
        },
        {
            noResep: "RSP-004",
            namaPasien: "Maya Lestari",
            noBilling: "BILL-1004",
            tanggal: "2025-01-07",
            namaDokter: "Dr. Nina Kurnia",
            obatList: [
                { namaObat: "Antasida", jumlah: 12, harga: 2500 }
            ]
        },
        {
            noResep: "RSP-005",
            namaPasien: "Rizky Hidayat",
            noBilling: "BILL-1005",
            tanggal: "2025-01-07",
            namaDokter: "Dr. Budi Santoso",
            obatList: [
                { namaObat: "Omeprazole", jumlah: 14, harga: 4000 },
                { namaObat: "Domperidone", jumlah: 10, harga: 3500 }
            ]
        },
        {
            noResep: "RSP-006",
            namaPasien: "Lina Marlina",
            noBilling: "BILL-1006",
            tanggal: "2025-01-08",
            namaDokter: "Dr. Rina Putri",
            obatList: [
                { namaObat: "Asam Mefenamat", jumlah: 15, harga: 3000 }
            ]
        },
        {
            noResep: "RSP-007",
            namaPasien: "Fajar Nugroho",
            noBilling: "BILL-1007",
            tanggal: "2025-01-08",
            namaDokter: "Dr. Agus Wijaya",
            obatList: [
                { namaObat: "Cefixime", jumlah: 10, harga: 6000 }
            ]
        },
        {
            noResep: "RSP-008",
            namaPasien: "Dewi Anggraini",
            noBilling: "BILL-1008",
            tanggal: "2025-01-09",
            namaDokter: "Dr. Nina Kurnia",
            obatList: [
                { namaObat: "Salbutamol", jumlah: 20, harga: 2500 }
            ]
        },
        {
            noResep: "RSP-009",
            namaPasien: "Hendra Wijaya",
            noBilling: "BILL-1009",
            tanggal: "2025-01-09",
            namaDokter: "Dr. Budi Santoso",
            obatList: [
                { namaObat: "Amlodipine", jumlah: 30, harga: 2000 }
            ]
        },
        {
            noResep: "RSP-010",
            namaPasien: "Putri Rahma",
            noBilling: "BILL-1010",
            tanggal: "2025-01-10",
            namaDokter: "Dr. Rina Putri",
            obatList: [
                { namaObat: "Vitamin B Complex", jumlah: 20, harga: 1800 },
                { namaObat: "Zinc", jumlah: 15, harga: 2200 }
            ]
        }
    ];





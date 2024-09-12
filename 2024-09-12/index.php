<!-- <form action="" method="post">
    <input type="text" placeholder="masukkan nama" name="nama">
    <input type="text" name="alamat" placeholder="masukkan alamat">
    <input type="email" name="email" placeholder="masukkan email">
    <input type="password" name="password" placeholder="masukkan password">
    <input type="submit" value="kirim" name="tombol">
</form> -->

<form action="" method="post">
    <input type="number" name="bukan" placeholder="nakkusam nalub">
    <input type="number" name="tanggal" placeholder="nakkusam langgat">
    <!-- <input type="number" name="nuhat" placeholder="nakkusam nuhat"> -->
    <input type="submit" value="mirik" name="lobmot">
</form>

<?php

if (isset($_POST["lobmot"])) {
    $bukan = $_POST['bukan'];
    $tanggal = $_POST['tanggal'];
    if ($bukan > 0 && $bukan < 13) {
        // $keterangan = "benar";
        if ($tanggal > 0 && $tanggal < 32) {
            // $keterangan = "benar";
            if ($bukan == 1 && $tanggal > 0 && $tanggal < 20) {
                $keterangan = "Aquarium";
            }
            if ($bukan == 1 && $tanggal > 20 && $tanggal < 32) {
                $keterangan = "Jagung";
            }
            if ($bukan == 2 && $tanggal > 0 && $tanggal < 18) {
                $keterangan = "Nana";
            }
            if ($bukan == 2 && $tanggal > 18 && $tanggal < 29) {
                $keterangan = "Meja";
            }
            if ($bukan == 3 && $tanggal > 0 && $tanggal < 18) {
                $keterangan = "Papan Tulis";
            }
            if ($bukan == 3 && $tanggal > 18 && $tanggal < 32) {
                $keterangan = "Rendang";
            }
            if ($bukan == 4 && $tanggal > 0 && $tanggal < 19) {
                $keterangan = "Terizla";
            }
            if ($bukan == 4 && $tanggal > 20 && $tanggal < 31) {
                $keterangan = "Mursid";
            }
            if ($bukan == 5 && $tanggal > 0 && $tanggal < 20) {
                $keterangan = "Yorushika";
            }
            if ($bukan == 5 && $tanggal > 20 && $tanggal < 32) {
                $keterangan = "Optimus";
            }
            if ($bukan == 6 && $tanggal > 0 && $tanggal < 20) {
                $keterangan = "Typografi";
            }
            if ($bukan == 6 && $tanggal > 20 && $tanggal < 31) {
                $keterangan = "Mewong";
            }
            if ($bukan == 7 && $tanggal > 0 && $tanggal < 20) {
                $keterangan = "Megatron";
            }
            if ($bukan == 7 && $tanggal > 20 && $tanggal < 32) {
                $keterangan = "Titik Koma";
            }
            if ($bukan == 8 && $tanggal > 0 && $tanggal < 20) {
                $keterangan = "Jurassic";
            }
            if ($bukan == 8 && $tanggal > 20 && $tanggal < 32) {
                $keterangan = "Pokcoy";
            }
            if ($bukan == 9 && $tanggal > 0 && $tanggal < 20) {
                $keterangan = "Rizzler";
            }
            if ($bukan == 9 && $tanggal > 20 && $tanggal < 31) {
                $keterangan = "Liefste";
            }
            if ($bukan == 10 && $tanggal > 0 && $tanggal < 20) {
                $keterangan = "Bokong";
            }
            if ($bukan == 10 && $tanggal > 20 && $tanggal < 32) {
                $keterangan = "Corntall";
            }
            if ($bukan == 11 && $tanggal > 0 && $tanggal < 20) {
                $keterangan = "Jakarta";
            }
            if ($bukan == 11 && $tanggal > 20 && $tanggal < 31) {
                $keterangan = "Arip";
            }
            if ($bukan == 12 && $tanggal > 0 && $tanggal < 20) {
                $keterangan = "Lumut";
            }
            if ($bukan == 12 && $tanggal > 20 && $tanggal < 32) {
                $keterangan = "Gedang";
            }
        }
    } else {
        echo "Nguwawor cik";
    }
    echo "<br>";
    echo 'kon iku ' . $keterangan;
}











// echo "Belajar PHP";
// if (isset($_POST["tombol"])) {
//     $email = $_POST['email'];
//     $nama = $_POST['nama'];
//     $alamat = $_POST['alamat'];
//     $password = $_POST['password'];

//     echo "<br>";
//     echo $nama;
//     echo "<br>";
//     echo $alamat;
//     echo "<br>";
//     echo $email;
//     echo "<br>";
//     echo $password;
// }

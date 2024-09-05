<?php
// for ($i = 1; $i <= 10; $i++) {
//     echo $i;
// }

echo "<br>";

// for ($i = 10; $i >= 1; $i--) {
//     echo $i;
//     echo "<br>";
// }

echo "<br>";

// for ($i = 1; $i < 100; $i = $i += 2) {
//     echo $i;
//     echo "<br>";
// }

$ganjil = 7 % 2;
echo $ganjil;
echo "<br>";

for ($i = 1; $i < 100; $i++) {

    $ganjil = $i % 2;
    // echo $ganjil;
    if ($ganjil == 1) {
        echo $i;
    }
}
echo "<br>";
$kkm = 80;
$nilai = 65;
if ($nilai > $kkm) {
    echo "LULUS";
} else {
    echo "GK";
}

echo "<br>";

$status = "TIDAK LULUS";
if ($nilai > $kkm) {
    $status = "LULUS";
}
echo $status;

echo "<br>";

$rapot = 0;
$tugas = 1;
if ($tugas == 1) {
    $rapot = 80;
}
echo $rapot;
echo "<br>";

$bukan = 4;
$tanggal = 17;
$keterangan = "SALAH";
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
}
echo $keterangan;

<!DOCTYPE html>
<html>

<head>
    <title>Kalkulator Sederhana</title>
</head>

<body>
    <h1>Kalkulator Sederhana</h1>
    <form action="" method="post">
        <label for="angka1">Angka 1:</label>
        <input type="number" id="angka1" name="angka1"><br><br>
        <label for="operator">Operator:</label>
        <select id="operator" name="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select><br><br>
        <label for="angka2">Angka 2:</label>
        <input type="number" id="angka2" name="angka2"><br><br>
        <input type="submit" value="Hitung">
    </form>

    <?php

    // Fungsi halo
    // function halo($nama, $kelas)
    // {
    //     echo "Halo, $nama $kelas!";
    //     echo "<br>";
    // }

    // halo("Darma", "XI RPL");
    // halo("Rafi", "XI RPL");
    // halo("Ryan", "XI RPL");
    // halo("Raka", "XI BD");
    // halo("Surya", "XI LPB");

    // // Fungsi hitungLuasPersegi
    // function hitungLuasPersegi($panjang, $lebar)
    // {
    //     $luas = $panjang * $lebar;
    //     return $luas;
    // }

    // $luas = hitungLuasPersegi(5, 3);
    // echo "Luas persegi adalah $luas";

    // // Fungsi sapa
    // function sapa($nama = 'Rafi')
    // {
    //     echo "Halo, $nama";
    // }

    // sapa();
    // sapa("Budi");

    // // Fungsi faktorial
    // function faktorial($n)
    // {
    //     if ($n == 0 || $n == 1) {
    //         return 1;
    //     } else {
    //         return $n * faktorial($n - 1);
    //     }
    // }

    // echo faktorial(5);


    // function tambah($a, $b)
    // {
    //     $luas = $a + $b;
    //     return $luas;
    // }

    // $luas = tambah(5, 3);
    // echo $luas;


    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $angka1 = $_POST["angka1"];
        $operator = $_POST["operator"];
        $angka2 = $_POST["angka2"];

        switch ($operator) {
            case '+':
                $hasil = $angka1 + $angka2;
                break;
            case '-':
                $hasil = $angka1 - $angka2;
                break;
            case '*':
                $hasil = $angka1 * $angka2;
                break;
            case '/':
                if ($angka2 != 0) {
                    $hasil = $angka1 / $angka2;
                } else {
                    $hasil = "Tidak dapat dibagi dengan nol";
                }
                break;
        }

        echo "Hasil: $angka1 $operator $angka2 = $hasil";
    }


    // function tambah($a, $b)
    // {
    //     return $a + $b;
    // }

    // function kurang($a, $b)
    // {
    //     return $a - $b;
    // }

    // function kali($a, $b)
    // {
    //     return $a * $b;
    // }

    // function bagi($a, $b)
    // {
    //     if ($b != 0) {
    //         return $a / $b;
    //     } else {
    //         return "Tidak dapat dibagi dengan nol";
    //     }
    // }

    // echo "Hasil Penjumlahan : " . tambah(10, 5) . "<br>";
    // echo "Hasil Pengurangan : " . kurang(10, 5) . "<br>";
    // echo "Hasil Perkalian : " . kali(10, 5) . "<br>";
    // echo "Hasil Pembagian : " . bagi(10, 5) . "<br>";
    ?>
</body>

</html>
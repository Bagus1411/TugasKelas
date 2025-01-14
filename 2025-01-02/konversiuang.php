<!DOCTYPE html>
<html>

<head>
    <title>Konversi Mata Uang - Gundam Edition</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Konversi Mata Uang</h1>
        <form action="" method="post">
            <label for="jumlah">Jumlah:</label>
            <input type="number" id="jumlah" name="jumlah" required><br><br>
            <label for="mata-uang">Mata Uang:</label>
            <select id="mata-uang" name="mata-uang" required>
                <option value="USD">USD (Dolar Amerika)</option>
                <option value="IDR">IDR (Rupiah Indonesia)</option>
                <option value="JPY">JPY (Yen Jepang)</option>
                <option value="EUR">EUR (Euro)</option>
            </select><br><br>
            <label for="tujuan">Tujuan:</label>
            <select id="tujuan" name="tujuan" required>
                <option value="USD">USD (Dolar Amerika)</option>
                <option value="IDR">IDR (Rupiah Indonesia)</option>
                <option value="JPY">JPY (Yen Jepang)</option>
                <option value="EUR">EUR (Euro)</option>
            </select><br><br>
            <input type="submit" name="konversi" value="Konversi">
        </form>

        <?php
        if (isset($_POST["konversi"])) {
            $jumlah = $_POST["jumlah"];
            $mataUang = $_POST["mata-uang"];
            $tujuan = $_POST["tujuan"];

            // Kurs mata uang (perlu diupdate secara berkala)
            $kurs = array(
                "USD" => array("IDR" => 14000, "JPY" => 110, "EUR" => 0.85),
                "IDR" => array("USD" => 0.000071, "JPY" => 0.0078, "EUR" => 0.000061),
                "JPY" => array("USD" => 0.0091, "IDR" => 127.5, "EUR" => 0.0078),
                "EUR" => array("USD" => 1.18, "IDR" => 16300, "JPY" => 128.5)
            );

            if ($mataUang == $tujuan) {
                $hasil = $jumlah;
            } else {
                $hasil = $jumlah * $kurs[$mataUang][$tujuan];
            }

            echo "$jumlah $mataUang = $hasil $tujuan";
        }
        ?>
    </div>
</body>

</html>
<form action="" method="get">
    <input type="number" name="bill1" placeholder="bilangan 1">
    <input type="number" name="bill2" placeholder="bilangan 2">
    <input type="submit" name="tambah" value="tambah">
    <input type="submit" name="kali" value="kali">
    <input type="submit" name="kurang" value="kurang">
    <input type="submit" name="bagi" value="bagi">
</form>

<?php
if (isset($_GET['tambah'])) {
    $bill1 = $_GET['bill1'];
    $bill2 = $_GET['bill2'];
    echo $hasil = $bill1 + $bill2;
}
if (isset($_GET['kali'])) {
    $bill1 = $_GET['bill1'];
    $bill2 = $_GET['bill2'];
    echo $hasil = $bill1 * $bill2;
}
if (isset($_GET['kurang'])) {
    $bill1 = $_GET['bill1'];
    $bill2 = $_GET['bill2'];
    echo $hasil = $bill1 - $bill2;
}
if (isset($_GET['bagi'])) {
    $bill1 = $_GET['bill1'];
    $bill2 = $_GET['bill2'];
    echo $hasil = $bill1 / $bill2;
}

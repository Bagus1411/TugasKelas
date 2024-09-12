<form action="" method="post">
    <input type="number" name="numero1" placeholder="masukkan 1">
    <input type="number" name="numero2" placeholder="masukkan 2">
    <input type="submit" value="+" name="tombol">
    <input type="submit" value="-" name="tombol2">
    <input type="submit" value="x" name="tombol3">
    <input type="submit" value=":" name="tombol4">
</form>

<?php
if (isset($_POST['tombol'])) {
    $TAMBAH = $_POST['numero1'] + $_POST['numero2'];
    echo 'hasil = ' . $TAMBAH;
}
if (isset($_POST['tombol2'])) {
    $KURANG = $_POST['numero1'] - $_POST['numero2'];
    echo 'hasil = ' . $KURANG;
}
if (isset($_POST['tombol3'])) {
    $KALI = $_POST['numero1'] * $_POST['numero2'];
    echo  'hasil = ' . $KALI;
}
if (isset($_POST['tombol4'])) {
    $BAGI = $_POST['numero1'] / $_POST['numero2'];
    echo 'hasil = ' . $BAGI;
}

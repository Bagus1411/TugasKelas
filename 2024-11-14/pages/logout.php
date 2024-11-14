<div class="logout">
    <h1>logout</h1>
</div>

<?php
session_destroy();
header("location:index.php");
?>
<?php
if (isSet($_POST['url'])) {
    $con = mysqli_connect('localhost', 'root', 'toor', 'extension');
    $stmt = mysqli_prepare($con, 'INSERT INTO urlVotes (url) VALUES (?)');
    mysqli_stmt_bind_param($stmt, 's', $_POST['url']);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    mysqli_close($con);
}
?>
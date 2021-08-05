<?php
$pdo = new PDO('mysql:host=localhost;dbname=dinoworks;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "UPDATE menu_list SET menu_level = :menu_level, menu_title = :menu_title, menu_id = :menu_id, menu_id_full = :menu_id_full, update_dtm = NOW() WHERE seq = :seq";
$statement = $pdo->prepare($query);
$statement->bindValue(':menu_level', $_POST['menu_level'], PDO::PARAM_INT);
$statement->bindValue(':menu_title', $_POST['menu_title'], PDO::PARAM_STR);
$statement->bindValue(':menu_id', $_POST['menu_id'], PDO::PARAM_STR);
$statement->bindValue(':menu_id_full', $_POST['menu_id_full'], PDO::PARAM_STR);
$statement->bindValue(':seq', $_POST['seq'], PDO::PARAM_INT);
$statement->execute();


/*
echo $_POST['menu_id'];
echo $_POST['menu_title'];
*/
echo 'modify';
header('Location: form-list.php');

?>
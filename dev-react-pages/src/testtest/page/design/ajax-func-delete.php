<?php
$pdo = new PDO('mysql:host=localhost;dbname=dinoworks;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "DELETE FROM menu_list WHERE seq = :seq";
$statement = $pdo->prepare($query);
$statement->bindValue(':seq', $_POST['seq'], PDO::PARAM_INT);
$statement->execute();


/*
echo $_POST['menu_id'];
echo $_POST['menu_title'];
*/
echo 'delete';
header('Location: form-list.php');

?>
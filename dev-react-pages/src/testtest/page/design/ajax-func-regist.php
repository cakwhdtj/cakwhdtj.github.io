<?php
$pdo = new PDO('mysql:host=localhost;dbname=dinoworks;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "INSERT INTO menu_list(menu_level, menu_title, menu_id, menu_id_full, register_dtm) VALUES(:menu_level, :menu_title, :menu_id, :menu_id_full, NOW())";
$statement = $pdo->prepare($query);
$statement->bindValue(':menu_level', $_POST['menu_level'], PDO::PARAM_INT);
$statement->bindValue(':menu_title', $_POST['menu_title'], PDO::PARAM_STR);
$statement->bindValue(':menu_id', $_POST['menu_id'], PDO::PARAM_STR);
$statement->bindValue(':menu_id_full', $_POST['menu_id_full'], PDO::PARAM_STR);
$statement->execute();


/*
echo $_POST['menu_id'];
echo $_POST['menu_title'];
*/
echo 'regist';
header('Location: form-list.php');







?>
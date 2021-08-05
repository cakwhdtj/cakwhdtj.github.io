<?php
$pdo = new PDO('mysql:host=localhost;dbname=dinoworks;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "SELECT * FROM menu_list WHERE seq = :seq";
$statement = $pdo->prepare($query);
$statement->bindValue(':seq', $_GET['seq'], PDO::PARAM_INT);
$statement->execute();
$data = [];
if (($row = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {
  $data = $row;
  /*
  foreach ($row as $key => $value) {
    $data[$key] = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
  }
  */
}

echo json_encode($data);

?>
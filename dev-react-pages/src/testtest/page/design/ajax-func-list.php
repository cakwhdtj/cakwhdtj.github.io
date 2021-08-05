<?php
$pdo = new PDO('mysql:host=localhost;dbname=dinoworks;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "SELECT * FROM menu_list";
$statement = $pdo->prepare($query);
// $statement->bindValue(':group_seq', $groupSeq, PDO::PARAM_INT);
$statement->execute();
$data = [];
$index = 0;
while (($row = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {
    foreach($row as $key => $value) {
        $data[$index][$key] = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
    }
    $data[$index]['index'] = $index + 1;
    $index++;
}

echo json_encode($data);

?>
<?php
$pdo = new PDO('mysql:host=localhost;dbname=dinoworks;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "SELECT * FROM menu_list";
$statement = $pdo->prepare($query);
// $statement->bindValue(':group_seq', $groupSeq, PDO::PARAM_INT);
$statement->execute();
$htmlList = '';
$index = 0;
while (($row = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {
    $index++;
    $row['menu_id'] = htmlspecialchars($row['menu_id'], ENT_QUOTES, 'UTF-8');
    $htmlList .= <<<HTML
<tr>
  <th>{$index}</th>
  <td>{$row['menu_level']}</td>
  <td><a href="form-view.php?seq={$row['seq']}">{$row['menu_title']}</a></td>
  <td>{$row['menu_id']}</td>
  <td>{$row['menu_id_full']}</td>
</tr>
HTML;
}




/*
$pdo = new PDO('mysql:host=localhost;dbname=dinoworks;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "SELECT
    MT.*
FROM menu_list AS MT
WHERE MT.is_temp = 'N' AND MT.is_deleted = 'N'";
$statement = $pdo->prepare($query);
// $statement->bindValue(':group_seq', $groupSeq, PDO::PARAM_INT);
$statement->execute();
$htmlList = '';
$index = 0;
while (($row = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {
    $index++;
    $htmlList .= <<<HTML
<tr>
  <th>{$index}</th>
  <td>{$row['menu_level']}</td>
  <td><a href="#">{$row['menu_title']}</a></td>
  <td>{$row['menu_id']}</td>
  <td>{$row['menu_title']}</td>
</tr>
HTML;
}
*/






$pageTitle = '메뉴정보(리스트) | Design | 템플릿 | 디노웍스(주) 관리시스템';
$pageDesc = '디노웍스(주) 관리시스템의 메뉴정보(리스트) 페이지';
?>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <?php include '../../include/head.php'; ?>
  </head>
  <body class="sub overview dashboard">
    <div id="wrapper">
      
      <?php include '../../include/header.php'; ?>
      
      <?php include '../../include/gnb.php'; ?>

      <main id="main">
        <h2>메뉴정보 (리스트)</h2>
        <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>
        
        <form name="form1" action="form-regist.php" method="post" enctype="multipart/form-data">
          <section class="layout col-1">
            <section class="layout-box">
              <h3>메뉴정보 (리스트)</h3>
              <table class="content">
                <caption>메뉴정보 리스트</caption>
                <colgroup>
                  <col style="width: 60px;" />
                  <col />
                </colgroup>
                <thead>
                  <th>No</th>
                  <th>메뉴 Level</th>
                  <th>메뉴명</th>
                  <th>메뉴 ID</th>
                  <th>메뉴 ID (Full)</th>
                </thead>
                <tbody>
                  <?php echo $htmlList; ?>
                  <!--
                  <tr>
                    <th>1</th>
                    <td>233</td>
                    <td><a href="#">title</a></td>
                    <td>title-33-re</td>
                    <td>title-33-re</td>
                  </tr>
-->
                </tbody>
              </table>

            </section>
          </section>
          
          
          <div class="button-box">
            <a href="form-regist.php" class="btn large form">등록하기</a>
          </div>
        </form>

      </main>

      <?php include '../../include/footer.php'; ?>


    </div>

<script>
'use strict';







</script>
  </body>
</html>
<?php
$pdo = new PDO('mysql:host=localhost;dbname=dinoworks;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "SELECT * FROM menu_list WHERE seq = :seq";
$statement = $pdo->prepare($query);
$statement->bindValue(':seq', $_GET['seq'], PDO::PARAM_INT);
$statement->execute();
if (($row = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {
  foreach ($row as $key => $value) {
    $html[$key] = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
  }
}


$pageTitle = '메뉴정보(상세보기) | Design | 템플릿 | 디노웍스(주) 관리시스템';
$pageDesc = '디노웍스(주) 관리시스템의 Form 페이지';
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
        <h2>메뉴정보(상세보기)</h2>
        <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>
        
        <form name="form1" action="form-func-delete.php" method="post" enctype="multipart/form-data">
          <input type="hidden" name="seq" value="<?php echo $_GET['seq']; ?>" />
          <section class="layout col-1">
            <section class="layout-box">
              <h3>메뉴정보(상세보기)</h3>
              <table class="form-box">
                <caption>폼 테이블</caption>
                <tbody>
                  <tr>
                    <td class="th"><label for="menu-level">메뉴레벨</label></td>
                    <td><?php echo $html['menu_level']; ?></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-title">메뉴명</label></td>
                    <td><?php echo $html['menu_title']; ?></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-id">메뉴 ID</label></td>
                    <td><?php echo $html['menu_id']; ?></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-id-full">메뉴 ID (Full)</label></td>
                    <td><?php echo $html['menu_id_full']; ?></td>
                  </tr>
                </tbody>
              </table>

            </section>
          </section>
          
          
          <div class="button-box">
            <button type="submit" class="btn large form">삭제하기</button>
            <a href="form-list.php" class="btn large form">목록보기</a>
            <a href="form-modify.php?seq=<?php echo $_GET['seq']; ?>" class="btn large form">수정하기</a>
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
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

$select1 = $select2 = $select3 = '';
switch ($html['menu_level']) {
  case '1' : $select1 = ' selected="selected"'; break;
  case '2' : $select2 = ' selected="selected"'; break;
  case '3' : $select3 = ' selected="selected"'; break;
}



$pageTitle = '메뉴정보(수정하기) | Design | 템플릿 | 디노웍스(주) 관리시스템';
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
        <h2>메뉴정보(수정하기)</h2>
        <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>
        
        <form name="form1" action="form-func-modify.php" method="post" enctype="multipart/form-data">
          <input type="hidden" name="seq" value="<?php echo $_GET['seq']; ?>" />
          <section class="layout col-1">
            <section class="layout-box">
              <h3>메뉴정보(수정하기)</h3>
              <table class="form-box">
                <caption>폼 테이블</caption>
                <tbody>
                  <tr>
                    <td class="th"><label for="menu-level">메뉴레벨</label></td>
                    <td>
                      <select name="menu_level" id="menu-level">
                        <option value="">-메뉴레벨-</option>
                        <option value="1" <?php echo $select1; ?>>1</option>
                        <option value="2" <?php echo $select2; ?>>2</option>
                        <option value="3" <?php echo $select3; ?>>3</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-title">메뉴명</label></td>
                    <td><input type="text" name="menu_title" id="menu-title" class="text" value="<?php echo $html['menu_title']; ?>" /></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-id">메뉴 ID</label></td>
                    <td><input type="text" name="menu_id" id="menu-id" class="text" value="<?php echo $html['menu_id']; ?>" /></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-id-full">메뉴 ID (Full)</label></td>
                    <td><input type="text" name="menu_id_full" id="menu-id-full" class="text" value="<?php echo $html['menu_id_full']; ?>" /></td>
                  </tr>
                </tbody>
              </table>

            </section>
          </section>
          
          
          <div class="button-box">
            <a href="form-list.php" class="btn large form">목록보기</a>
            <button type="submit" class="btn large form">저장하기</button>
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
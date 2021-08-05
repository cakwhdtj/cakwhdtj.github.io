<?php




$pageTitle = '메뉴정보(등록하기) | Design | 템플릿 | 디노웍스(주) 관리시스템';
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
        <h2>메뉴정보(등록하기)</h2>
        <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>
        
        <form name="form1" action="form-func-regist.php" method="post" enctype="multipart/form-data">
          <section class="layout col-1">
            <section class="layout-box">
              <h3>메뉴정보(등록하기)</h3>
              <table class="form-box">
                <caption>폼 테이블</caption>
                <tbody>
                  <tr>
                    <td class="th"><label for="menu-level">메뉴레벨</label></td>
                    <td>
                      <select name="menu_level" id="menu-level">
                        <option value="">-메뉴레벨-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-title">메뉴명</label></td>
                    <td><input type="text" name="menu_title" id="menu-title" class="text" value="" /></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-id">메뉴 ID</label></td>
                    <td><input type="text" name="menu_id" id="menu-id" class="text" value="" /></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-id-full">메뉴 ID (Full)</label></td>
                    <td><input type="text" name="menu_id_full" id="menu-id-full" class="text" value="" /></td>
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
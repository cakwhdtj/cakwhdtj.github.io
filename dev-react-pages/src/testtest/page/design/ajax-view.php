<?php


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
          <section class="layout col-1">
            <section class="layout-box">
              <h3>메뉴정보(상세보기)</h3>
              <table class="form-box">
                <caption>폼 테이블</caption>
                <tbody>
                  <tr>
                    <td class="th"><label for="menu-level">메뉴레벨</label></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-title">메뉴명</label></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-id">메뉴 ID</label></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="th"><label for="menu-id-full">메뉴 ID (Full)</label></td>
                    <td></td>
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


var xhr = new XMLHttpRequest();
var data = [];
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // console.log(this.responseText);
    data = JSON.parse(this.responseText);
    console.log(data);

    $('table tbody tr:eq(0) td:eq(1)').text(data.menu_level);
    $('table tbody tr:eq(1) td:eq(1)').text(data.menu_title);
    $('table tbody tr:eq(2) td:eq(1)').text(data.menu_id);
    $('table tbody tr:eq(3) td:eq(1)').text(data.menu_id_full);

  }
};
xhr.open("GET", "ajax-func-view.php?seq=<?php echo $_GET['seq']; ?>" , true);
xhr.send();




</script>
  </body>
</html>
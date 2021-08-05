<?php




$pageTitle = 'DashBoard | OVERVIEW | 디노웍스(주) 관리시스템';
$pageDesc = '디노웍스(주) 관리시스템의 DashBoard 페이지';
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
        <h2>DASHBOARD</h2>
        <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>

        <section class="layout col-2">
          <section class="layout-box">
            <h3>Box1</h3>
            <span class="graph-circle" data-value="57">
              <span class="text"><span>내용</span><em>00%</em></span>
              <span class="indicator"></span>
              <span class="cover"></span>
            </span>
            <span class="graph-circle" data-value="36">
              <span class="text"><span>내용</span><em>00%</em></span>
              <span class="indicator"></span>
              <span class="cover"></span>
            </span>
            <span class="graph-circle" data-value="99">
              <span class="text"><span>내용</span><em>00%</em></span>
              <span class="indicator"></span>
              <span class="cover"></span>
            </span>
          </section>
          <section class="layout-box">
            <h3>Box2</h3>
            <table class="content">
              <caption>메뉴목록</caption>
              <colgroup>
                <col style="width: 60px;" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>No</th>
                  <th>메뉴명</th>
                  <th>메뉴 ID</th>
                  <th>메뉴 ID (Full)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>회원가입</td>
                  <td>join</td>
                  <td>overview-dash</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>회원가입</td>
                  <td>join</td>
                  <td>overview-dash</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </main>

      <?php include '../../include/footer.php'; ?>
      

    </div>

<script>
'use strict';

$('.graph-circle').each(function() {
  var value = parseFloat($(this).attr('data-value'));
  var degree = 360 * (value / 100);
  if (value > 50) {
    $(this).addClass('over50');
  }
  $(this).find('.indicator').css({'transform': 'rotate(' + degree + 'deg)'});
  $(this).find('.text em').text(value + '%');
});







</script>
  </body>
</html>
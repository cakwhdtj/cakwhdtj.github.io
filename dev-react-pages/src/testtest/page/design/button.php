<?php




$pageTitle = 'Button | Design | 템플릿 | 디노웍스(주) 관리시스템';
$pageDesc = '디노웍스(주) 관리시스템의 Button 페이지';
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
        <h2>BUTTON</h2>
        <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>

        <section class="layout col-1">
          <section class="layout-box">
            <h3>Box1</h3>
            <div class="button-box">
              <a href="#" class="btn">테스트 버튼 엑셀다운로드</a>
              <button class="btn">테스트 버튼</button>
              <input type="button" class="btn" value="테스트 버튼" />
            </div>



          </section>
        </section>

        <section class="layout col-2">
          <section class="layout-box">
            <h3>Box1</h3>
            <div class="button-box">
              <a href="#" class="btn main">테스트 버튼</a>
              <a href="#" class="btn link">테스트 버튼</a>
              <a href="#" class="btn caution">테스트 버튼</a>
              <a href="#" class="btn form">테스트 버튼</a>
            </div>
          </section>
          <section class="layout-box">
            <h3>Box1</h3>
            <div class="button-box">
              <a href="#" class="btn small">테스트 버튼</a>
              <a href="#" class="btn medium">테스트 버튼</a>
              <a href="#" class="btn large">테스트 버튼</a>
              <a href="#" class="btn larger">테스트 버튼</a>
            </div>
          </section>
        </section>
        
        <section class="layout col-1">
          <section class="layout-box">
            <h3>Box1</h3>
            <div class="button-box">
              <a href="#" class="btn medium main">테스트 버튼 엑셀다운로드</a>
              <button class="btn larger form">테스트 버튼</button>
              <input type="button" class="btn large caution" value="테스트 버튼" />
              <a href="#" class="btn medium link">테스트 버튼 엑셀다운로드</a>
              <a href="#" class="btn small form">테스트 버튼 엑셀다운로드</a>
              <button class="btn larger main">테스트 버튼</button>
            </div>
          </section>
        </section>
        
        <section class="layout col-1">
          <section class="layout-box">
            <h3>Box1</h3>
            <div class="button-box right">
              <a href="#" class="btn medium caution left">삭제하기</a>
              <a href="#" class="btn medium form left">엑셀다운로드</a>
              <a href="#" class="btn medium link">목록보기</a>
              <a href="#" class="btn medium main">저장하기</a>
            </div>
            
          </section>
        </section>
        
        <section class="layout col-2">
          <section class="layout-box">
            <h3>Box1</h3>
            <div class="button-box">
              <a href="#" class="btn small main icon"><i class="fas fa-user fa-fw"><span>테스트 버튼</span></i></a>
              <a href="#" class="btn medium link icon"><i class="fas fa-users fa-fw"><span>테스트 버튼</span></i></a>
              <a href="#" class="btn large caution icon"><i class="fas fa-cog fa-fw"><span>테스트 버튼</span></i></a>
              <a href="#" class="btn larger form icon"><i class="fas fa-lock fa-fw"><span>테스트 버튼</span></i></a>
            </div>
          </section>
          <section class="layout-box">
            <h3>Box1</h3>
            <div class="button-box">
              <a href="#" class="btn small main icon-left"><i class="fas fa-user fa-fw"></i>테스트 버튼</a>
              <a href="#" class="btn medium link icon-left"><i class="fas fa-users fa-fw"></i>테스트 버튼</a>
              <a href="#" class="btn large caution icon-left"><i class="fas fa-cog fa-fw"></i>테스트 버튼</a>
              <a href="#" class="btn larger form icon-left"><i class="fas fa-lock fa-fw"></i>테스트 버튼</a>
            </div>
          </section>
        </section>

      </main>

      <?php include '../../include/footer.php'; ?>




      <!--

      <main id="main">
        <h2>DASHBOARD</h2>
        <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>

      </main>

      <footer id="footer">
        <p>© Copyright 2021 DinoWorks. All Rights Reserved.</p>
      </footer>

    -->


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
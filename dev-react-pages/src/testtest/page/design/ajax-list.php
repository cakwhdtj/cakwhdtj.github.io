<?php

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


                </tbody>
              </table>

            </section>
          </section>
          
          
          <div class="button-box">
            <a href="form-regist.php" class="btn large form">등록하기</a>

            
            <a href="#" id="test" class="btn large form">테스트 버튼</a>
          </div>
        </form>

      </main>

      <?php include '../../include/footer.php'; ?>


    </div>

<script>
'use strict';

$('#test').on('click', function() {
  alert('테스트');
});


/*
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  console.log('readyState: ' + this.readyState + ' / status: ' + this.status);
  // 0: request not initialized / 1: server connection established / 2: request received /3 : processing request / 4: request finished and response is ready
  // 0: aborted / 403: Forbidden / 404: Not Found
  if (this.readyState == 4 && this.status == 200) {
    var data = this.responseText;
    console.log(data);
  }
}
xhr.open('post', 'ajax-func-test.php', true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send('seq=5663&name=이시영');
*/











/*
var xhr = new XMLHttpRequest();
var data = [];
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // console.log(this.responseText);
    data = JSON.parse(this.responseText);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var html = '';
      html += '<tr>\n';
      html += '  <th>' + data[i]['index'] + '</th>\n';
      html += '  <td>' + data[i]['menu_level'] + '</td>\n';
      html += '  <td><a href="ajax-view.php?seq=' + data[i]['seq'] + '">' + data[i]['menu_title'] + '</a></td>\n';
      html += '  <td>' + data[i]['menu_id'] + '</td>\n';
      html += '  <td>' + data[i]['menu_id_full'] + '</td>\n';
      html += '</tr>\n';
      $('table tbody').append(html);
    }
  }
};
xhr.open("POST", "ajax-func-list.php", true);
xhr.send();
*/


// Ajax 기능 (Class 방식)
/*
var ajax = new AjaxCall({
  url: '/get-operator-info',
  success: actSuccess,
});

function actSuccess(data) {
  // console.log(data);
}

// ajax.send();
*/


/*
function AjaxCall(options) {
  if (options === undefined || options.url === undefined) {
    alert('url 옵션은 반드시 입력해야 합니다.');
  }
  var method = (options.method === undefined) ? 'POST' : options.method;
  var data = [];
  var xhr = new XMLHttpRequest();

  // 이벤트 설정(전송)
  xhr.onreadystatechange = function() {
    console.log('readyState: ' + this.readyState + ' / status: ' + this.status);
    // 0: request not initialized / 1: server connection established / 2: request received /3 : processing request / 4: request finished and response is ready
    // 0: aborted / 403: Forbidden / 404: Not Found

    if (this.readyState === 2) {
      beforeSend();
    }

    // 오류처리
    if (this.readyState === 4 && this.status === 403) {
      alert(options.url + ' 페이지의 접근 권한이 없습니다.');
    }
    if (this.readyState === 4 && this.status === 404) {
      alert(options.url + ' 파일이 존재하지 않습니다.');
    }

    // 결과반환시 처리
    if (this.readyState === 4 && this.status === 200) {
      data = this.responseText;
      options.success(data);
    }

    // 결과반환 여부와 상관없이 실행 (abort 된 경우 this.status = 0)
    if (this.readyState === 4) {
      complete();
    }
  };


  function beforeSend() {
    // console.log('before send');
    // xhr.abort();   // 요청중단 (complete는 실행) 유효성 검사 등
  }

  function send() {
    xhr.open(options.method, options.url, true);
    xhr.send();
  }

  function complete() {
    // console.log('complete');
  }

  this.send = function() {
    send();
  }
}
*/


</script>
  </body>
</html>
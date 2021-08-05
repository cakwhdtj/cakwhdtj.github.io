<?php




$pageTitle = 'Form | Design | 템플릿 | 디노웍스(주) 관리시스템';
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
        <h2>FORM</h2>
        <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>

        <section class="layout col-1">
          <section class="layout-box">
            <h3>Box1</h3>
            <table class="form-box">
              <caption>폼 테이블</caption>
              <tbody>
                <tr>
                  <td class="th"><label for="user-id">아이디</label></td>
                  <td><input type="text" name="user_id" id="user-id" class="text" placeholder="chiu9000" value="test-id" /></td>
                  <td class="th">비밀번호</td>
                  <td><input type="password" class="text" /></td>
                </tr>
                <tr>
                  <td class="th">회원구분</td>
                  <td>
                    <ul class="input-list">
                      <li>
                        <input type="radio" name="mem_type" id="mem-type-1" value="industry" />
                        <label for="mem-type-1">산업계</label>
                      </li>
                      <li>
                        <input type="radio" name="mem_type" id="mem-type-2" value="academy" />
                        <label for="mem-type-2">학계</label>
                      </li>
                      <li>
                        <input type="radio" name="mem_type" id="mem-type-3" value="research" />
                        <label for="mem-type-3">연구소</label>
                      </li>
                    </ul>
                  </td>
                  <td class="th">관심분야</td>
                  <td>
                    <ul class="input-list">
                      <li><input type="checkbox" name="interest[]" id="interest-1" value="html" /><label for="interest-1">HTML</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-2" value="css" /><label for="interest-2">CSS</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-3" value="javascript" /><label for="interest-3">JavaScript</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-4" value="jquery" /><label for="interest-4">jQuery</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-5" value="react" /><label for="interest-5">React</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                      <li><input type="checkbox" name="interest[]" id="interest-6" value="php" /><label for="interest-6">PHP</label></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="th">회원등급</td>
                  <td>
                    <select>
                      <option>-회원등급선택-</option>
                      <option>VIP</option>
                      <option>GOLD</option>
                      <option>SILVER</option>
                      <option>BRONZE</option>
                      <option>BRONZE BRONZE BRONZE BRONZE BRONZE</option>
                    </select>
                  </td>
                  <td class="th">파일첨부</td>
                  <td><input type="file" /></td>
                </tr>
                <tr>
                  <td class="th">비고</td>
                  <td colspan="3"><textarea></textarea></td>
                </tr>
                <tr>
                  <td class="th"><label for="form-1">폼1</label></td>
                  <td>
                    <div class="input-group">
                      <span class="icon"><i class="fas fa-user fa-fw"></i></span>
                      <input type="text" name="" id="form-1" class="text" />
                    </div>
                    <div class="input-group">
                      <a href="#" class="icon"><i class="fas fa-user fa-fw"></i></a>
                      <input type="text" name="" id="form-1" class="text" />
                    </div>
                    
                    
                    <div class="input-group box">
                      <span class="icon"><i class="fas fa-user fa-fw"></i></span>
                      <input type="text" name="" id="form-1" class="text" />
                    </div>
                  </td>
                  <td class="th"><label for="form-2">폼2</label></td>
                  <td>
                    <div class="input-group">
                      <input type="text" name="" id="form-2" class="text" />
                      <span class="icon">백만원</span>
                    </div>
                    <div class="input-group">
                      <input type="text" name="" id="form-2" class="text" />
                      <a href="#" class="icon main">아이디 중복확인</a>
                    </div>
                    
                    <div class="input-group">
                      <select name="" id="">
                        <option value="">-구분선택-</option>
                        <option value="">일반회원</option>
                        <option value="">VIP</option>
                        <option value="">VVIP</option>
                      </select>
                      <input type="text" name="" id="form-2" class="text" />
                    </div>
                    <div class="input-group">
                      <span class="icon"><input type="checkbox" name="" id="" /></span>
                      <input type="text" name="" id="form-2" class="text" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="th"><label for="">파일첨부</label></td>
                  <td colspan="3">
                    <ul class="input-file-list">
                      <li class="no-file"><i class="fas fa-exclamation-triangle fa-fw"></i>첨부파일 없음</li>
                      <li class="loading"><i class="fas fa-spinner fa-fw fa-spin"></i>Loading...</li>
                      <li>
                        <a href="#">
                          <img alt="" src="../../img/common/icon_pdf.png" />
                          <span class="name">2분기_실적보고서분기_실적.pdf</span>
                          <span class="size">10.01 MB</span>
                        </a>
                      </li>
                      <li>
                        <img alt="" src="../../img/common/icon_pdf.png" />
                        <span class="name">2분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서분기_실적보고서.pdf</span>
                        <span class="size">10.01 MB</span>
                        <p class="function">
                          <a href="#" class="prev"><i class="fas fa-arrow-up"><span>앞으로 이동</span></i></a>
                          <a href="#" class="next"><i class="fas fa-arrow-down"><span>뒤로 이동</span></i></a>
                          <a href="#" class="del"><i class="fas fa-times"><span>삭제</span></i></a>
                        </p>
                      </li>
                    </ul>
                    <input type="file" name="" id="" />
                  </td>
                </tr>
                <tr>
                  <td class="th"><label for="">이미지 첨부</label></td>
                  <td colspan="3">
                    <ul class="input-image-list">
                      <li class="no-image">
                        <span class="thumb"><i class="fas fa-exclamation-triangle fa-fw"></i></span>
                        <span class="name"><i class="fas fa-exclamation-triangle fa-fw"></i>첨부이미지 없음</span>
                      </li>
                      <li class="loading">
                        <span class="thumb"><i class="fas fa-spinner fa-fw fa-spin"></i></span>
                        <span class="name"><i class="fas fa-spinner fa-fw"></i>Loading...</span>
                      </li>
                      <li>
                        <span class="thumb">
                          <img alt="" src="../../img/common/sample_big_img.jpg" />
                          <span>1,383px X 768px</span>
                        </span>
                        <span class="name">
                          <img alt="" src="../../img/common/icon_img.png" />
                          <span>big_image.jpg</span>
                        </span>
                        <span class="size">10.05 MB</span>
                      </li>
                      <li>
                        <span class="thumb">
                          <img alt="" src="../../img/common/sample_face.jpg" />
                          <span>1,383px X 768px</span>
                        </span>
                        <span class="name">
                          <img alt="" src="../../img/common/icon_img.png" />
                          <span>big_image.jpg</span>
                        </span>
                        <span class="size">10.05 MB</span>
                        <p class="function">
                          <a href="#" class="prev"><i class="fas fa-arrow-left"><span>앞으로 이동</span></i></a>
                          <a href="#" class="next"><i class="fas fa-arrow-right"><span>뒤로 이동</span></i></a>
                          <a href="#" class="del"><i class="fas fa-times"><span>삭제</span></i></a>
                        </p>
                      </li>
                      <li>
                        <span class="thumb">
                          <img alt="" src="../../img/common/icon_pdf.png" />
                          <span>1,383px X 768px</span>
                        </span>
                        <span class="name">
                          <img alt="" src="../../img/common/icon_img.png" />
                          <span>big_image.jpg</span>
                        </span>
                        <span class="size">10.05 MB</span>
                        <p class="function">
                          <a href="#" class="prev"><i class="fas fa-arrow-left"><span>앞으로 이동</span></i></a>
                          <a href="#" class="next"><i class="fas fa-arrow-right"><span>뒤로 이동</span></i></a>
                          <a href="#" class="del"><i class="fas fa-times"><span>삭제</span></i></a>
                        </p>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <input type="file" name="" id="" />
                  </td>
                </tr>
              </tbody>
            </table>
            



          </section>
        </section>
        
        <section class="layout col-1">
          <section class="layout-box">
            <h3>Box1</h3>
            <table class="form-box">
              <body>
                <tr>
                  <td class="th"><label for="">아이디</label></td>
                  <td><input type="text" name="" id="" class="text" /></td>
                  <td class="th"><label for="">비밀번호</label></td>
                  <td><input type="password" name="" id="" class="text" /></td>
                </tr>
                <tr>
                  <td class="th"><label for="">비밀번호(확인)</label></td>
                  <td><input type="password" name="" id="" class="text" /></td>
                  <td class="th"><label for="">이메일</label></td>
                  <td><input type="text" name="" id="" class="text" /></td>
                </tr>
                <tr>
                  <td class="th"><label for="">생년월일</label></td>
                  <td>
                    <div class="input-group">
                      <input type="text" name="" id="form-2" class="text" />
                      <a href="#" class="icon main"><i class="fas fa-search"></i></a>
                    </div>
                  </td>
                  <td class="th"><label for="">회원구분</label></td>
                  <td>
                    <ul class="input-list">
                      <li>
                        <input type="radio" name="mem_type" id="mem-type-1" value="industry" />
                        <label for="mem-type-1">산업계</label>
                      </li>
                      <li>
                        <input type="radio" name="mem_type" id="mem-type-2" value="academy" />
                        <label for="mem-type-2">학계</label>
                      </li>
                      <li>
                        <input type="radio" name="mem_type" id="mem-type-3" value="research" />
                        <label for="mem-type-3">연구소</label>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="th"><label for="">회원사진 첨부</label></td>
                  <td>
                    <ul class="input-image-list">
                      <li class="no-image">
                        <span class="thumb"><i class="fas fa-exclamation-triangle fa-fw"></i></span>
                        <span class="name"><i class="fas fa-exclamation-triangle fa-fw"></i>첨부이미지 없음</span>
                      </li>
                      <li class="loading">
                        <span class="thumb"><i class="fas fa-spinner fa-fw fa-spin"></i></span>
                        <span class="name"><i class="fas fa-spinner fa-fw"></i>Loading...</span>
                      </li>
                      <li>
                        <span class="thumb">
                          <img alt="" src="../../img/common/sample_big_img.jpg" />
                          <span>1,383px X 768px</span>
                        </span>
                        <span class="name">
                          <img alt="" src="../../img/common/icon_img.png" />
                          <span>big_image.jpg</span>
                        </span>
                        <span class="size">10.05 MB</span>
                      </li>
                      <li>
                        <span class="thumb">
                          <img alt="" src="../../img/common/sample_face.jpg" />
                          <span>1,383px X 768px</span>
                        </span>
                        <span class="name">
                          <img alt="" src="../../img/common/icon_img.png" />
                          <span>big_image.jpg</span>
                        </span>
                        <span class="size">10.05 MB</span>
                        <p class="function">
                          <a href="#" class="prev"><i class="fas fa-arrow-left"><span>앞으로 이동</span></i></a>
                          <a href="#" class="next"><i class="fas fa-arrow-right"><span>뒤로 이동</span></i></a>
                          <a href="#" class="del"><i class="fas fa-times"><span>삭제</span></i></a>
                        </p>
                      </li>
                      <li>
                        <span class="thumb">
                          <img alt="" src="../../img/common/icon_pdf.png" />
                          <span>1,383px X 768px</span>
                        </span>
                        <span class="name">
                          <img alt="" src="../../img/common/icon_img.png" />
                          <span>big_image.jpg</span>
                        </span>
                        <span class="size">10.05 MB</span>
                        <p class="function">
                          <a href="#" class="prev"><i class="fas fa-arrow-left"><span>앞으로 이동</span></i></a>
                          <a href="#" class="next"><i class="fas fa-arrow-right"><span>뒤로 이동</span></i></a>
                          <a href="#" class="del"><i class="fas fa-times"><span>삭제</span></i></a>
                        </p>
                      </li>
                    </ul>
                    <input type="file" name="" id="file" />
                    <a href="#" class="btn medium main"><label for="file">파일첨부</label></a>
                  </td>
                  <td class="th">누적마일리지</td>
                  <td>
                    <div class="input-group">
                      <input type="text" name="" id="form-2" class="text" />
                      <span class="icon">백만원</span>
                    </div>
                  </td>
                </tr>
                
              </body>
            </table>


          </section>
        </section>

        <section class="layout col-2">
          <section class="layout-box">
            <h3>Box1</h3>



          </section>
          <section class="layout-box">
            <h3>Box1</h3>



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
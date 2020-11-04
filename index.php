<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M플레이스</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/stlye.css">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="https://code.jquery.com/jquery-migrate-1.4.1.js"></script>
    <script src="js/slick.min.js"></script>
</head>

<body>
    <?php 
        session_start();
        if ( isset($_SESSION['userid']) ) { 
            $userid = $_SESSION['userid']; 
            $username = $_SESSION['name']; 
        } else { $userid = ''; }
    ?>

    <div id="wrap">
        <header id="header">
            <div class="row">
                <div class="open_nav">
                    <a href="#"><i class="fas fa-ellipsis-v"><span class="blind">메뉴열기</span></i></a>
                </div>
                <div class="menubox">
                    <div class="menuinv">
                     <div id="login">   
                         <?php if (!$userid) { ?>
                        <div class="inbtn login"> <a href="login_form.php">로그인</a></div>
                        <div class="inbtn join"> <a href="join.html">회원가입</a></div>
                         <?php } else { ?>
                        <div class="inBtn"><?php echo $username ?>님 환영합니다.</div>
                        <div class="inbtn logout"> <a href="logout.php">로그아웃</a></div>
                        <div class="inbtn my"> <a href="#none">정보수정</a></div>
                        <?php } ?>
                    </div  class = "menuList">
                        <a href="showList.html">공연정보</a>
                        <a href="#">FAQ</a>
                        <a href="#">공지사항</a>
                        <a href="#">고객센터</a>
                        <a href="#">마이페이지</a>
                    </div>
                    <div class="close_nav">
                        <a href="#"><i class="fas fa-times"></i><span class="blind">메뉴닫기</span></a>
                    </div>
                </div>
                <div class="logo">
                    <a href="index.php">M-Place</a>
                </div>

                <div class="search">
                    <form action="#" method="post">
                        <fieldset>
                            <legend>검색창</legend>
                            <input type="text" placeholder="검색어입력">
                            <button type="submit">검색</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </header>

        <section id="container">
            <div id="content" class="mainContent">
                <div class="alarm">
                    <a href="#"><img src="img/bell.png" alt="알림이미지">  뮤지컬 영웅 삼성카드 할인 </a>
                    <a href="#"><img src="img/bell.png" alt="알림이미지">연극 라이어 10월 할인 </a>
                    <a href="#"><img src="img/bell.png" alt="알림이미지">뮤지컬 캣츠 내한공연 기념 할인</a>
                    <a href="#"><img src="img/bell.png" alt="알림이미지">뮤지컬 10월 한달 동안 할인</a>
                </div>
                <div class="best_show">
                    <h2>BEST 공연</h2>
                    <div class="show_box">
                        <div class="show_info slide1">
                            <a href="#">
                                바로 예매하기
                            </a>
                        </div>
                        <div class="show_info slide2">
                            <a href="#">
                                바로 예매하기
                            </a>
                        </div>
                       <div class="show_info slide3">
                            <a href="#">
                                바로 예매하기
                            </a>
                        </div>
                       <div class="show_info slide4">
                            <a href="#">
                                바로 예매하기
                            </a>
                        </div>
                        <div class="show_info slide5">
                            <a href="#">
                                바로 예매하기
                            </a>
                        </div>
                    
                    </div>
                </div>
                <div class="Mshow_info">
                    <a href="showList.html">
                        <img src="img/seats.png" alt="공연정보 이미지">
                         공연정보</a>
                </div>
                <div class="mypage">
                    <a href="#">
                        <img src="img/tickets.png" alt="티켓조회"> 티켓 조회</a>
                    <a href="#">
                      <img src="img/sale.png" alt="할인정보">
                        할인정보</a>
                </div>
            </div>
        </section>


        <footer id="footer">
            <div class="Privacy">
                <a href="#">이용약관</a>
                <a href="#">개인정보처리 방침안내</a>
                <a href="#">제휴문의</a>
            </div>
            <div class="csCenter">
                <div class="sns">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fas fa-sms"></i></a>
                    <a href="#"><i class="fab fa-youtube-square"></i></a>
                </div>
                <div class="info">
                    <p>(주)M-place</p>
                    <p>주소:강남구 테헤란로 185-1 </p>
                    <p>대표: 홈길동</p>
                    <a href="tel:1688-0000">1688-0000</a>
                    <p class="copy_r">COPYRIGHT (C) M-Place ALL RIGHTS RESERVED.</p>
                </div>
               
            </div>
        </footer>
        
        <div id="quick_menu">
            <div class="row">
                <a href="index.php"><i class="fas fa-home"></i><span class="blind">첫화면으로</span></a>
                <a href="showList.html"><i class="fas fa-archway"></i><span class="blind">공연정보</span></a>
                <a href="#"><i class="fas fa-comment"></i><span class="blind">카카오톡</span></a>
            </div>
    
        </div>

    </div>

    <div id="onlyMobile">
        이 사이트 800px 이하에서만 보입니다.
    </div>

    <script src="js/mobile_msa.js"></script>
</body>

</html>
-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- 생성 시간: 21-04-05 00:47
-- 서버 버전: 10.3.8-MariaDB
-- PHP 버전: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `folzen_erp`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `menu_list`
--

CREATE TABLE `menu_list` (
  `seq` int(10) UNSIGNED NOT NULL COMMENT '일련번호',
  `parent_seq` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '부모메뉴seq',
  `menu_level` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '메뉴레벨',
  `menu_title` varchar(50) NOT NULL DEFAULT '' COMMENT '메뉴명',
  `menu_id` varchar(50) NOT NULL DEFAULT '' COMMENT '메뉴ID',
  `menu_id_full` varchar(100) NOT NULL DEFAULT '' COMMENT '전체메뉴ID(상위포함)',
  `menu_type_cd` varchar(20) NOT NULL DEFAULT '' COMMENT '메뉴타입',
  `page_type_cd` varchar(20) NOT NULL DEFAULT '' COMMENT '페이지타입',
  `menu_desc` varchar(255) NOT NULL DEFAULT '' COMMENT '메뉴설명',
  `icon_html` varchar(50) NOT NULL DEFAULT '' COMMENT '아이콘(FA)html',
  `display_order` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '표시순서',
  `register_dtm` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '등록일시',
  `update_dtm` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '최근수정일시',
  `update_user_seq` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '최근수정자 seq',
  `is_temp` enum('N','Y') NOT NULL DEFAULT 'N' COMMENT '임시여부',
  `is_deleted` enum('N','Y') NOT NULL DEFAULT 'N' COMMENT '삭제여부'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='메뉴리스트';

--
-- 테이블의 덤프 데이터 `menu_list`
--

INSERT INTO `menu_list` (`seq`, `parent_seq`, `menu_level`, `menu_title`, `menu_id`, `menu_id_full`, `menu_type_cd`, `page_type_cd`, `menu_desc`, `icon_html`, `display_order`, `register_dtm`, `update_dtm`, `update_user_seq`, `is_temp`, `is_deleted`) VALUES
(1, 0, 1, 'OVERVIEW', 'overview', 'sub_overview', 'group', 'content', '', '', 1, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(2, 1, 2, 'Dashboard', 'dashboard', 'sub_overview_dashboard', 'page', 'content', '', '', 2, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(3, 1, 2, 'My Page', 'mypage', 'sub_overview_mypage', 'group', 'content', '', '', 3, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(4, 3, 3, '개인정보 관리', 'info', 'sub_overview_mypage_info', 'page', 'content', '', '', 4, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(5, 3, 3, '비밀번호 변경', 'password', 'sub_overview_mypage_password', 'page', 'content', '', '', 5, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(6, 0, 1, '직원/관련기업 관리', 'stakeholder', 'sub_stakeholder', 'group', 'content', '', '', 6, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(7, 6, 2, '직원', 'employee', 'sub_stakeholder_employee', 'page', 'content', '', '', 7, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(8, 6, 2, '관련기업', 'company', 'sub_stakeholder_company', 'page', 'content', '', '', 8, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(9, 0, 1, '재정관리', 'finance', 'sub_finance', 'group', 'content', '', '', 9, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(10, 9, 2, '매출관리', 'sales', 'sub_finance_sales', 'group', 'content', '', '', 10, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(11, 10, 3, '계약현황', 'contract', 'sub_finance_sales_contract', 'page', 'content', '', '', 11, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(12, 10, 3, '거래명세서 발행내역', 'statement', 'sub_finance_sales_statement', 'page', 'content', '', '', 12, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(13, 10, 3, '입금현황', 'collect', 'sub_finance_sales_collect', 'page', 'content', '', '', 13, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(14, 10, 3, '매출현황', 'statistics', 'sub_finance_sales_statistics', 'page', 'content', '', '', 14, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(15, 10, 3, '미수내역', 'receivables', 'sub_finance_sales_receivables', 'page', 'content', '', '', 15, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(16, 10, 3, '소송현황', 'lawsuit', 'sub_finance_sales_lawsuit', 'page', 'content', '', '', 16, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(17, 9, 2, '매출통계', 'statsale', 'sub_finance_statsale', 'group', 'content', '', '', 17, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(18, 17, 3, '전체수량/매출액', 'total', 'sub_finance_statsale_total', 'page', 'content', '', '', 18, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(19, 17, 3, '수량통계', 'quantity', 'sub_finance_statsale_quantity', 'page', 'content', '', '', 19, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(20, 17, 3, '매출액통계', 'sales', 'sub_finance_statsale_sales', 'page', 'content', '', '', 20, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(21, 17, 3, '제품별수량통계', 'product', 'sub_finance_statsale_product', 'page', 'content', '', '', 21, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(22, 17, 3, '색상별수량통계', 'color', 'sub_finance_statsale_color', 'page', 'content', '', '', 22, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(23, 17, 3, '담당자별수량통계', 'manager', 'sub_finance_statsale_manager', 'page', 'content', '', '', 23, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(24, 17, 3, '거래처별매출점유율', 'buyer', 'sub_finance_statsale_buyer', 'page', 'content', '', '', 24, '2020-05-08 12:08:20', '2020-05-08 14:08:37', 1, 'N', 'N'),
(25, 17, 3, '월별 판매수량/매출', 'summary', 'sub_finance_statsale_summary', 'page', 'content', '', '', 25, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(26, 17, 3, '도어별 매출통계', 'door', 'sub_finance_statsale_door', 'page', 'content', '', '', 26, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(27, 17, 3, '도어옵션별 매출통계', 'option', 'sub_finance_statsale_option', 'page', 'content', '', '', 27, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(28, 17, 3, '부자재별 매출통계', 'material', 'sub_finance_statsale_material', 'page', 'content', '', '', 28, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(29, 9, 2, '매입관리', 'purchase', 'sub_finance_purchase', 'group', 'content', '', '', 29, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(30, 29, 3, '거래명세서 접수내역', 'buy', 'sub_finance_purchase_buy', 'page', 'content', '', '', 30, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(31, 29, 3, '세금계산서 접수내역', 'tax', 'sub_finance_purchase_tax', 'page', 'content', '', '', 31, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(32, 29, 3, '지출결의서 작성현황', 'spending', 'sub_finance_purchase_spending', 'page', 'content', '', '', 32, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(33, 29, 3, '결제현황', 'payment', 'sub_finance_purchase_payment', 'page', 'content', '', '', 33, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(34, 29, 3, '매입현황', 'statistics', 'sub_finance_purchase_statistics', 'page', 'content', '', '', 34, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(35, 9, 2, '매입통계', 'statpurchase', 'sub_finance_statpurchase', 'group', 'content', '', '', 35, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(36, 35, 3, '월별 손익계산서', 'month', 'sub_finance_statpurchase_month', 'page', 'content', '', '', 36, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(37, 35, 3, '연도별 손익계산서', 'year', 'sub_finance_statpurchase_year', 'page', 'content', '', '', 37, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(38, 35, 3, '업체별 매입점유율', 'seller', 'sub_finance_statpurchase_seller', 'page', 'content', '', '', 38, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(39, 35, 3, '구매품목 매입통계', 'buy', 'sub_finance_statpurchase_buy', 'page', 'content', '', '', 39, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(40, 9, 2, '재정관리업무', 'work', 'sub_finance_work', 'group', 'content', '', '', 40, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(41, 40, 3, '입출금내역관리', 'inout', 'sub_finance_work_inout', 'page', 'content', '', '', 41, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(42, 40, 3, '업무일지', 'daily', 'sub_finance_work_daily', 'page', 'content', '', '', 42, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(43, 40, 3, '법인카드 사용내역', 'card', 'sub_finance_work_card', 'page', 'content', '', '', 43, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(44, 0, 1, '사용정보설정', 'setting', 'sub_setting', 'group', 'content', '', '', 44, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(45, 44, 2, '권한그룹 관리', 'auth', 'sub_setting_auth', 'page', 'content', '', '', 45, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(46, 44, 2, '부자재 현황', 'material', 'sub_setting_material', 'page', 'content', '', '', 46, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(47, 44, 2, '옵션정보 관리', 'option', 'sub_setting_option', 'group', 'content', '', '', 47, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(48, 47, 3, '코드관리', 'code', 'sub_setting_option_code', 'page', 'content', '', '', 48, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(49, 47, 3, '법인카드', 'card', 'sub_setting_option_card', 'page', 'content', '', '', 49, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(50, 47, 3, '계좌현황', 'account', 'sub_setting_option_account', 'page', 'content', '', '', 50, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(51, 47, 3, '도어옵션', 'door', 'sub_setting_option_door', 'page', 'content', '', '', 51, '2020-05-08 12:08:20', '2020-05-08 12:08:20', 1, 'N', 'N'),
(52, 0, 1, '테스트33', 'test33', 'sub_employee_test_333', 'group', 'content', 'sasa  설명232', '<i class=\"fas fa-users33\"></i>', 4, '2020-05-08 15:57:46', '2020-05-08 16:01:58', 1, 'N', 'Y');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `menu_list`
--
ALTER TABLE `menu_list`
  ADD PRIMARY KEY (`seq`),
  ADD UNIQUE KEY `seq` (`seq`),
  ADD KEY `idx_code` (`menu_title`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `menu_list`
--
ALTER TABLE `menu_list`
  MODIFY `seq` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '일련번호', AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

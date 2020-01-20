-- 外部SQLファイル読み込み；不要
\. ./create_myapp.sql
drop table if exists users;

-- テーブル属性一覧、テーブルの一覧

desc users 
show tables

drop table users; 
-- 数字：int, float, double, +の値のみ　int unsigned
-- 文字：長さ一定char(4), 長さ不定var(255)255バイトまでという意味, 長さ不明text
-- 日付：date, time, datetime '2017-07-22 17:22:33'
-- 真理値：boolean
-- enum リストの中から１つ選ばせる、１からの通し番号が自動的に割り当てられる
-- setは複数選択可
-- enumとsetいずれも値として2^0, 2^1, 2^2を持っている、例SilverとBronze両方持っている条件をcoins=6で指定できる
create table users (
  id int unsigned primary key auto_increment,
  name varchar(255) not null unique,
  score float default 0.0 not null,
  rank enum('gold', 'silver', 'bronze'),
  coins set ('gold', 'silver', 'bronze')
);
-- 既存テーブルに列追加
alter table users add column email varchar(255) after name;
alter table users drop column email;
alter table users change name username varchar(80) default 'datankia';
alter table users rename persons;
-- テーブルに挿入
insert into users (id, name, score) values (1, 'kevin', 9.9);
insert into users (id, name, score) values
  (5, 'kevin', 9.9), (6, 'kevin', 9.9);
-- 削除クエリ
delete from users;
-- 選択クエリ
select column? as ? from db? where ? and ? or ? order by ? desc limit ? offset ?;
select * from users;
select id, name from users;
-- < > <= >= = <> != is null, is not null and or not
select * from users where score between 3.0 and 6.0;
select * from users where name = 'taguchi' or name = 'fkoji';
select * from users where name in ('taguchi', 'fkoji');
-- limitは最初の?件だけ、offsetは最初の?件を除外
select * from users where score is not null and name like 't%' order by score desc limit 3 offset 1;
-- binaryをつける大文字小文字を区別して抽出できる
select * from users where name like binary 'T%';
-- アンダーバーは任意の1文字
select * from users where name like '______';
update users set name = 'sasaki', score = 2.9 where name = 'tanaka';
delete from users where score < 5.0;
-- idが偶数に対して設定
id % 2 =0
-- 関数、floor, ceil, round, rand()
select rand();
select round(5.5/13, 1);
select length('hello');
-- 特定文字位置抽出
select substr('hello',2,2);
select upper('Hello');
select lower('Hello');
select concat('hello','world');

select count();
select distinct ??? from db?;
select count(distinct ???) from db?;

-- 並び替えのorder byを省略可能
select sum(score), team from users_with_team  group by team desc
-- 集計した後のデータに対して条件つける場合、having
select sum(score) as scoretotal, team from users_with_team where team like '%B' group by team having scoretotal >9;

-- サブクエリ
select
  sum(t.score),
  t.team
from
  (select
    id,
    name,
    score,
    case
      when score > 8.0 then 'Team-A'
      when score > 6.0 then 'Team-B'
      else 'Team-C'
    end as team
  from users) as t 
group by t.team;

-- view＝保存したクエリ
drop view if exists top3;
create view top3 as select * from users order by score desc limit 3;
-- viewがどうやって造られたか
show create view top3;

select length(name) as len, name from users order by len;
select name, score, if (score > 5.0, 'OK', 'NG') as result from users;
select name, score,
  case floor(score) % 2
    when 0 then 'even'
    when 1 then 'odd'
    else null
  end as type
from
  users;
select
  name,
  score,
  case
    when score > 8.0 then 'Team-A'
    when score > 6.0 then 'Team-B'
    else 'Team-C'
  end as team
from
  users;
-- クエリからテーブル作成 as省略OK
create table users_with_team as
select
  id,
  name,
  score,
  case
    when score > 8.0 then 'Team-A'
    when score > 6.0 then 'Team-B'
    else 'Team-C'
  end as team
from users;
-- テーブルを丸ごとコピーas省略OK
create table users_copy select * from users;
-- 空テーブルのコピー、like
create table users_copy select * like users;

-- 必ず；つける、キャンセル＼C
quit
mysql -u root
-- 現ユーザー表示、全db表示、操作対象dbを表示、操作対象にする
select user(); show databases; select database(); use mydb01;
create database mydb01; drop database mydb03; 
-- ユーザー操作
create user dbuser01@localhost identified by ‘1qaz2wsx’
grant all on mydb01.* to dbuser01@localhost 
mysql -u dbuser01 -p mydb01
drop user dbuser01@localhost

-- phpdb
create database dotinstall_db;
grant all on dotinstall_db.* to dbuser@localhost identified by '1qaz2wsx';
<?php
include("p0footer.php");
include("p0news.php");
$a = ["js1", "js2", "js3"];

$a[] = "php1";
$a[] = "php2";
$a[] = "php3";
var_dump($a);

$stringbase ="Php1php2php3";

$str = str_ireplace("P", "p", $stringbase);

var_dump($str);

$stringbase ="Php1, php2, php3";

$str = explode(",", $stringbase);

var_dump($str);

include("p0footer.php");


$name = "test";
echo date("YmdHis");
echo date("Y-m-d-H-i-s");
?>
<?php
// MVC設計 Model=Data、 View=画面、Controller=橋渡し
  // フォルダ構成、
    // (1) config、<config.php>db設定、<autoload.php>autoload未定義なら自動的require、<init.sql>db初期設定
    // (2) lib、<Controller.php><Model.php>汎用性の高い親クラス、<functions.php>便利関数 （namespace MyApp）
      // (-1) Controller、各Viewに対応するコントローラーphpファイル （namespace MyApp\Controller）
      // (-2) Model、 db操作ファイル（namespace MyApp\Model）
      // (-3) Exception、各例外処理ごとのphpファイル（namespace MyApp\Exception）
    // (3) public_html=View 
// db接続記述ファイルをよみこむ、ファイルパス__DIR__、直接記述された関数も実行される
  require_once(__DIR__ . "/../config/config.php");

// pending

  // クラス名、プロパティ名$、メソッド名camelCase記法、定数は大文字とアンダースコアで区切り

  // ファイル間同じ命名を区別、必ずファイルの先頭で記述、例としてuser.phpでnamespace Dotinstall\Lib;と記されている
    // 引用方法、as ??? をつけない場合でもOK最後の文字Libが見なされる、use自体を省略可
    require "user.php";
    // use Dotinstall\Lib as aaa;
    use Dotinstall\Lib;
    $bob = new Lib\Userout("Bob"); $bob->sayHi();

    // 例外処理：例外を発生させたい場所try{}、例外を既定のExceptionインスタンスに投げるthrow{}
    // 例外を受け取って処理catch{}
    function div($a, $b) {
      try {
        if ($b === 0) {throw new Exception("cannot divide by 0!");}
        echo $a / $b;
        // Exceptionが$eに代入
      } catch (Exception $e) {echo $e->getMessage();}
    }
    div(7, 2); div(5, 0);

    // アクセス権
  // - private: そのクラス内からのみアクセス可能、継承もできない
  // - protected: そのクラス＋親子（継承）クラス内からのみアクセス可能
  // - public: どこからでもアクセス可能
  // 変数は頭に$を付ける、改行は!\n、タブは!\t
  $msg0 = "hello!\nhello again!\tand again";
  echo $msg0;
  // べき乗は**、++は変数に+1、
    // データ型宣言は不要、string, integer, float
    // 変数の種類を調べたいときvar_dump(変数)
    var_dump($msg0);
    // 定数$付かない、大文字、自動定数
    define("MYEMAIL", "datankia@gmail.com");
    var_dump(__LINE__);
    var_dump(__FILE__);
    echo __DIR__;
    // 文字の連結は点
    $s = "Au "."Needs";
    var_dump($s);
  // と等しくないは!=、厳密比較したい場合!==、andは&&もしくはand、orはorもしくは||、 Notは!、クラスの変数を取り出す->
  $score=90;
    if ($score > 80) {echo "great!";} elseif ($score > 60) {echo "good!";}
    # 三項演算子、$aが$bより大きかったら$aを$maxに代入、そうでない場合
    $a = 0; $b = 0;
    $max = ($a > $b) ? $a : $b;
    $score=50;
    $max=($score>80)?$score:"不合格";
    echo $max;
    $signal = "green";
    switch ($signal) {
        case "red":
          echo "stop!";
          break;
          // 並べて書くとOrという意味
        case "blue":
        case "green":
          echo "go!";
          break;
        case "yellow":
          echo "caution!";
          break;
          // どれも当てはまらない場合
        default:
          echo "wrong signal";
          break;
        }
    $i = 1; 
    while ($i < 10) {
        echo $i;
        $i++;
      }
    do {
        echo $i;
        $i++;
      } while ($i < 20);

    for ($i = 0; $i < 10; $i++) {
      echo $i;  
      if ($i === 5) {
        break;
        continue;
      }
    }
    // 配列を結びつけるためには「=>」をつける、[]の代わりArray()でもOK、KeyとValue
    $sales = [
      "taguchi" => 200,
      "fkoji" => 800,
      "dotinstall" => 600,
    ];
    
    var_dump($sales["fkoji"]); // 800
    $sales["fkoji"] = 900;
    var_dump($sales["fkoji"]); // 900
    // Keyを省略する場合
    $colors = ["red", "blue", "pink"];
    var_dump($colors[1]); // blue

    // 配列要素を全部取りだす
    foreach ($sales as $key => $value) {
        echo "($key) $value ";
    }
    foreach ($colors as $value) {
    echo "$value ";
  }

  // htmlに埋めるときにすっきりと書ける
  foreach ($colors as $value) :
    echo "$value ";
  endforeach;

  // 関数の作成($引数1="初期値",$引数2)、関数内の変数は関数内のみ有効
  function sayhi($who="datankia") {
    echo "hi ".$who;   
    return "hi ".$who;
  }
  sayhi("Kevin");
    $s=sayhi();
    echo "$s";
    // 組込み関数、ceil切り上げ、floor切り捨て、rand(1, 10)乱数、strlen文字数、mb_strlen日本語文字数
    // printf書式を指定して表示、implode配列要素をある区切り文字で連結
    $x = 5.6;
    $s1 = "hello";
    $s2 = "ねこ";
    printf("%s - %s - %.3f", $s1, $s2, $x);
    implode("@", $colors);

    // クラスの作成、１文字目は必ず大文字！、構成property/constructor/method
    // クラス宣言
    Class User {
      // Property属性
      public $thろwe;
      public static $count = 0;
      // constructor　必ず__construct、クラス中のメソッドや属性にアクセス時$this->、->のという意味
      public function __construct($name){
        $this->name =$name;
        // クラス内からこのクラスを指定するself
        self::$count++;
      }
      // メソッド、finalをつければOverrideは不能になる
      // final public function sayhi() {
        public function sayhi() {
          echo "hi, i am $this->name!";
        }
        // staticキーワード、インスタンス化必要ない
        public static function getMessage() {
          echo "hello from User class!";
        }
      }
      // インスタンス化必要ない、クラス名::メソッド();
      User::getMessage();
      
      $tom = new User("Tom");
      $bob = new User("Bob");
      
      echo User::$count; // 2

    $tom =new User("Tom");
    $bob =new User("Bob");
    
    echo $tom->name;
    $bob->sayhi();
    // クラスの継承
    class Adminuser extends User {
      public function sayhello(){
        echo "hello from Admin";
      }
      // Override
      public function sayhi() {
        echo "admin hi, i am $this->name!";
      }
    }
    $tom = new User("Tom");
    $steve = new Adminuser("Steve");
    echo $steve->name;
    $steve->sayhi();
    $steve->sayhello();

    // 抽象クラス他クラスで継承してもらうことが前提、子クラス実装もれを防ぐ
    abstract class BaseUser {
      public $name;
      // 抽象メソッドにすれば継承クラスでは必ず実装してくださいを意味
      // ここで中身を書く必要はない
      abstract public function sayHi();
    }

    class User1 extends BaseUser {
      // 必ずアクセス権、メソッド名、引数を引き継ぐ必要
      public function sayHi() {
        echo "hello from abstractクラス";
      }
    }

    // Interfaceと継承の違い：複数継承可能、抽象メソッド属性のみ実装可能
    interface sayHi {
      // メソッドは必ずPublic、中身は実装するクラスでOK
      public function sayHi();
    }
    
    interface sayHello {
      public function sayHello();
    }
    // implementsはextendsと違って複数継承可能
    class User2 implements sayHi, sayHello {
      public function sayHi() {
        echo "hi!";
      }
      public function sayHello() {
        echo "hello!";
      }
    }

  // 外部ファイルのクラス読み込み、５つある
    // require: エラー出た場合fatal errorが発生し処理が完了する
    // require_once　PHPが自動的にそのファイルが詠み込まれているかをチェック
      // すでに読み込まれていればスキップしてくれる

    // include: エラー出た場合warningを発生させて処理は実行する
    // include_once
    
    // require "user.php";
    $bob->sayHi();
    
    // autoload クラスのみ、下記$bob = new User("Bob")で別ファイルクラス出てきて未定義だった場合
      // 自動的に実行される仕組み、ただしファイル名＝クラス名
    spl_autoload_register(function($class) {
      // 未定義のクラス名Userが自動的に定義される
      require $class . ".php";
    });
    
    $bob = new User("Bob");
    $bob->sayHi();

  // htmlフォームからの処理、例：usernameの文字数チェック
    // 既定変数$_SERVERと既定メソットREQUEST_METHOD
    $username = ""; $err = "";
    // htmlフォームのmethodがPOSTだったら
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
      $username = $_POST["username"];
      $err = false;
    if (strlen($username) > 8) {
      $err = true;
    }
  }

  // cookie、有効期限を設定しない場合はブラウザ閉じるまで、time()+60*60は1時間後
    // 削除する場合、有効期限を過去にすればよい、例えばtime()-60*60
    setcookie("username", "taguchi", time()+60*60);
    // 定義済変数
    echo $_COOKIE['username'];

  // sessionはサーバー側、(cookieはブラウザ)、大きなデータ、改ざんされない、中身が見られない
    // 使う前に必ずセット
    session_start();
    // 定義済変数
    $_SESSION['username'] = "taguchi";
    echo $_SESSION['username'];
    unset($_SESSION['username']);
    echo $_SESSION['username'];

  // そのあとに出力がねければ省略が推奨
  ?>

  <ul>
    <?php foreach ($colors as $value) : ?>
    <li><?php echo "$value "; ?></li>
    <?php endforeach; ?>
  </ul> 

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <!-- actionが空白なのでphpに飛ぶ？ -->
  <form action="" method="POST">
    <!-- usernameが投稿する度に消えないように、echo htmlspecialchars($username, ENT_QUOTES, 'UTF-8'); -->
    <input type="text" name="username" placeholder="user name" value="<?php echo htmlspecialchars($username, ENT_QUOTES, 'UTF-8'); ?>">
    <input type="submit" value="Check!">
    <?php if ($err) { echo "Too long!"; } ?>
  </form>
</body>
</html>
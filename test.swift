// ＜文法＞
  // データ型のキャスティング
    // 、as!はある型であることを保証するダウンキャストのキーワードで「swiftにエラーを出さないで」という効果
    // 、as?は可能な場合のみダウンキャスト

  // 親クラスの継承 class クラス名: 親クラス名
    class ViewController: UIViewController

  // override、この場合親クラスUIViewControllerで宣言されているviewDidLoad()アプリ起動時実行さsれるメソッドを上書き
    override func viewDidLoad() {}

  // @super、親クラスUIViewControllerのviewDidLoad()メソッドを呼び出す
    super.viewDidLoad()
  
  //    トレーリングクロージャー、actionはhandlerの引数、最後の引数の場合いったん)してから処理内容を{引数 in 処理}}
    let ok0btn = UIAlertAction(title:"OK", style: UIAlertAction.Style.default)
      {action0 in self.dismiss(animated: true, completion: nil)}

  // 変数を文字列として引用
    \(変数)

  // 配列、データ型は[String : Any]として記述、要素の最後尾に追加.appendと削除.remove(at: 添字)
    var needs1list = ["spouse", "age"]
    print(needs1list [0])
    needs1list.append("gender")
    needs1list.remove(at: 0)
    print(needs1list)
  
  // 配列Dictionary 変数名 = ["説明ラベル": 値,]、説明文で参照、追加と削除は直接
    var needs0list = ["spouse": 1, "age": 37]
    print(needs0list["age"]!)
    needs0list["gender"] = 1
    needs0list["spouse"] = nil
    print(needs0list)

  // 戻り値をもつ関数 func 関数名(ラベル名 引数: データ型) -> 戻り値データ型 {処理 return 戻り値}
    func msg (showmsg usermsg: String) -> String {
      return usermsg
    }
    print(msg(showmsg: "hello"))

  // 比較演算子 等しい ==、等しくない !=

  // for文、範囲指定もしくは配列
    for n in 1...9 {
      for x in 1...9 {print(n * x)}
    }

  // アンラップ、成功したらはif let、失敗したらはgurad let
    if let {}
    guard let else {}

  // struct、クラスのように変数メソッドをまとめて宣言、使うときはインスタンス生成、
    // 、Codableは外部とのデータ変換をシンプルにしてくれるプロトコル（変数をjson項目名と同じにすれば一括して変数にデータを格納）
    struct name0: Codable {}    

  //  タプル配列、=[]は配列としての初期化、タプルの書式(キーワード: 値)
    var history0list: [(name: String, maker: String, link: URL, image: URL)] = []

// ＜パーツ＞
  // 写真：デバイスのカメラロールをソースに指定 
    img0picker = UIImagePickerController()
    img0picker.sourceType = .photoLibrary

  // キーボードを閉じる
    view.endEditing(true)

  // セグエ遷移
    self.performSegue(withIdentifier: "show0effect0view", sender: nil)

  // デバッグメッセージ区切り
    print ("----------------")

  // 日本語などをエンコード
    guard let encode0 = keyword0.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)
      else {return}
  
  // URLリクエスト
    let regis0url = "http://192.168.33.10:8000/iossignup.php"
    guard let url0path = URL(string: regis0url) else {return}
    // リクエストオブジェクトの生成
    var url0request = URLRequest(url: url0path)
    // POSTの場合記述
    url0request.httpMethod = "POST"
    let post0string = "email=" + user0email! + "&password=" + user0pw!
    url0request.httpBody = post0string.data(using: String.Encoding.utf8)
    // リクエストをタスクとして登録
    let task0 = URLSession.shared.dataTask(with: url0request) {
      (data0: Data?, response0: URLResponse?, error0: Error?) in
      
      if error0 != nil {print(error0!); return}      
      if response0 != nil {print(response0!); return}

      do {
        let json = try JSONSerialization.jsonObject(with: data0!, options: .mutableContainers) as? NSDictionary
           
        if let parseJSON = json {
          let email0return = parseJSON["email"] as? String
          let pw0return = parseJSON["password"] as? String
          print("email is \(email0return!)")
          print("password is \(pw0return!)")
        }
      }
      catch {
        print("Error")
      }
    }
    // タスク実行
    task0.resume()

// ＜メソッドfunc＞
  // メッセージボックス
    func alertmsg2user(_ msg0title: String, _ msg2user: String){
      let my0alert = UIAlertController(title: msg0title, message: msg2user, preferredStyle:  UIAlertController.Style.alert)
      // OKボタンの追加
      let ok0btn = UIAlertAction(title:"OK", style: UIAlertAction.Style.default, handler: nil)
      my0alert.addAction(ok0btn);
      self.present(my0alert, animated: true, completion: nil)
    }

// @画面背景色の設定
  view.backgroundColor = .gray

// @コードからラベルを追加
  var label: UILabel!
  label = UILabel()
  label.frame.size = CGSize(width: 200, height: 120)
  label.center = view.center
  label.numberOfLines = 0
  view.addSubview(label)
  label.text = "hello"

// ＜操作＞
  // Swift simulator=comm R	
    // 指の動き、オプション押しながら
  // home=shift command h
  // 回転=comm やじるし
  // navi表示=Comm 0, 1
  // utility area表示=Comm option 0
  // library=Comm shift L
  // 枠が文字にAutofit=Comm shift -
  // Launch screen.storyboard=アプリ立ち上がるときちらっと表示
  // 遷移＝control押しながらマウス
  // 説明、オプション押しながらクリック
// IBOutletは予約語=Interface Builder、変数名：データ型、びっくりマークはオプショナル型を示している
  @IBOutlet weak var startb0: UIButton!
  @IBOutlet weak var stopb0: UIButton!
  @IBOutlet weak var resetb0: UIButton!
  @IBOutlet weak var timerlabel0: UILabel!

//  ？はOptional型、値がなくてもOK、時間に関する関数はTimeInterval
//  ？の代わりに！にすればOptional bindingを使わなくてもOK？
  var starttime0: TimeInterval? = nil
//  タイマー起動した時に返ってくるTimerオブジェクトの初期化
  var timer0 = Timer()
  var elapsedtime0: Double = 0.0
//  starttimeはOptional型なのでOptional bindingを使う必要
  @IBAction func stop0(_ sender: Any) {
//starttime0がnilじゃなかったら
    if let starttime0 = self.starttime0 {self.elapsedtime0 += Date.timeIntervalSinceReferenceDate - starttime0}
    setbutton(start: true, stop: false, reset: true)
    self.timer0.invalidate()
  }
  @IBAction func reset0(_ sender: Any) {
    setbutton(start: true, stop: false, reset: false)
    self.starttime0 = nil
    self.timerlabel0.text = "00:00:00"
    self.elapsedtime0 = 0.0
  }
  func setbutton(start: Bool, stop: Bool, reset: Bool){
    self.startb0.isEnabled = start
    self.stopb0.isEnabled = stop
    self.resetb0.isEnabled = reset
  }
//  関数の作成 selectorに指定される場合「@objc」をつける必要
//  starttimeはOptional型なのでOptional bindingを使う必要
  @objc func update0() {
    if let starttime0 = self.starttime0 {
      let t0: Double = Date.timeIntervalSinceReferenceDate - starttime0 + self.elapsedtime0
//      print(t0)
      let min0 = Int(t0/60)
//      %は整数に対してのみ使えるためIntにした上
      let sec0 = Int(t0)%60
//      型を合わせるためIntにしていたsec0をDoubleに戻す
      let msec0 = Int((t0-Double(min0)*60-Double(sec0))*100)
//      ％02dは２桁整数という意味
      self.timerlabel0.text = String(format:"%02d:%02d:%02d", min0, sec0, msec0)
    }
//    Date関数
//    print(Date.timeIntervalSinceReferenceDate)
  }
  
  @IBAction func start0(_ sender: Any) {
    
    setbutton(start: false, stop: true, reset: false)
    
    self.starttime0 = Date.timeIntervalSinceReferenceDate
    
//    Timer.scheduledTimerの返り値を timer0にセット
    self.timer0 = Timer.scheduledTimer(
      //    timer関数、timeinterval実行間隔、target実行するメソッドの場所
      timeInterval: 0.01,
      target: self,
//    selector実行メソッドの名前
      selector: #selector(self.update0),
      userInfo: nil,
      repeats: true)
  }
  
}

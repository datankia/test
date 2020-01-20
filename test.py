# Objective ビジネス理解
# What データ理解
# Analysis データ分析
# ML
# Evaluation 性能評価


# ドライブデータへのアクセス準備
# from google.colab import drive
drive.mount("/content/drive/")

# テーブル＝dataframeを扱うライブラリ
import pandas as pd
# データの読み込み
df = pd.read_csv("/content/drive/My Drive/Gs/python/data/winequality-red.csv", sep=";")

# データ分析
# ＞行数と列数の表示
df.shape
# ＞データ型、データ数
df.info()
df.count()
df.dtypes
# ＞データ中身、特定列のみ
df.describe()
df.quality.describe()
# ＞先頭行表示、引数に表示行数
df.head()

# 可視化ライブラリ
import matplotlib.pyplot as plt
import seaborn as sns
# ＞dfの列を指定してグラフ
plt.hist(df["quality"], cumulative=False)

# カスタム列(Y結果)のための関数作成
def delicious_score(x):
  if x >= 6:
    return 1
  else:
    return 0
# ＞新しい列の作成
df["delicious"] = df["quality"].apply(delicious_score)
# ＞ユニークデータの数
df.nunique()
df["delicious"].nunique()
# ＞グループ化、sum()、count()
df.groupby("delicious").mean()
df.groupby("delicious")["quality"].sum()

# データ前処理
# ＞必要なライブラリー＋インスタンスの作成
from sklearn import preprocessing
mmscaler = preprocessing.MinMaxScaler()

# ＞計算
mmscaler.fit(df)
# ＞変換
df_mms = pd.DataFrame(mmscaler.transform(df))

# ＞スケール変換によって変わってしまった列名を直す
df = df_mms.rename(columns={
  0: 'fixed acidity',
  1: 'volatile acidity',
  2: 'citric acid',
  3: 'residual sugar',
  4: 'chlorides',
  5: 'free sulfur dioxide',
  6: 'total sulfur dioxide',
  7: 'density',
  8: 'pH',
  9: 'sulphates',
  10: 'alcohol',
  11: 'quality',
  12: 'delicious'
})
# ＞変換後確認
df.describe()

# 機械学習
# ＞目的変数
y = df["delicious"]
# ＞説明変数、dropで不要列を除くaxis=1は通例
x = df.drop(["quality", "delicious"], axis=1)

# ＞交差検証
from sklearn.model_selection import train_test_split

# ＞データを分割します。テストが全体の25%になるようにします。 
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.25, random_state = 3)

# ＞ロジスティク回帰による学習
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(x_train, y_train)

# 性能評価
from sklearn import metrics
# ＞テストデータで予測
y_pred = model.predict(x_test)
# ＞精度をprint()で表示
print(metrics.accuracy_score(y_test, y_pred))


// インスタンスの生成、プレハブの変数、位置の指定、回転指定
Instantiate(ball0obj, transform.position, transform.rotation);

InvokeRepeating("spawn0ball", 0f, 1f);
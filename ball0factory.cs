using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ball0factory : MonoBehaviour
{
    public GameObject ball0obj;
    // // Start is called before the first frame update
    void Start()
    {
        //         // //		インスタンスの生成、プレハブの変数、位置の指定、回転指定
        // // 		// Instantiate(ball0obj, transform.position, transform.rotation);
        // // //		一定間隔で繰り返して生成させる、開始０秒後１秒ごとに実行
        InvokeRepeating("spawn0ball", 0f, 1f);
}

void spawn0ball()
    {
        //   //   // フロアが１０なので
        Instantiate(ball0obj, new Vector3(Random.Range(-10f, 0f), transform.position.y, transform.position.z), transform.rotation);
    }
    // // Update is called once per frame
    // void Update()
    // {

    // }
}

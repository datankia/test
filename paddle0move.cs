using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class paddle0move : MonoBehaviour {

//	private float move0sp;

//	inspectorで変数を設定する方法
	public float move0sp;

//	 １回のみ実行される
	void Start () {
//		スピード設定
//		move0sp = 5f;	
	}
	
//	 描画ごとに実行される
	void Update () {
//		vector3は(x, y, z)浮動小数で書く決まり、ゼロにf付けてOK、この場合
//		Input.GetAxis("Horizontal")で右左矢印キーの操作を反映させる
//		* Time.deltaTimeはパソコンのスペックを問わず同じ速度になる
		transform.position += new Vector3(Input.GetAxis("Horizontal") * move0sp * Time.deltaTime, 0f, 0f);
		Debug.Log(transform.position.x);
	}
}

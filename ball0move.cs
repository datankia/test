using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ball0move : MonoBehaviour {

	private float ball0sp;

	void Start () {
		ball0sp = Random.Range (5f, 15f);
	}

	void Update () {
//		z軸でマイナスで指定することで奥から手前に移動
		transform.position += new Vector3(0f, 0f, -1 * ball0sp * Time.deltaTime);
	}
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class shader0controller : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GetComponent<Renderer> ().material.SetColor ("base0color", Color.green);
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}

package com.PruebaFinal.ejemplo;

import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class MyPhoneGapActivity extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.setIntegerProperty("splashscreen",R.drawable.icon);
		super.loadUrl("file:///android_asset/www/index.html",3000);
	}
}

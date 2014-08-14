# -*- coding: utf-8 -*-

import os
from flask import Flask, render_template


app = Flask(__name__)


BIOS_LOADING = [
	'BIOS Version 1.09a (79ET65WW)',
	'BIOS Date 2006-07-27',
	'Embedded Controller Version 1.05b',
	'System-Unit serial number 2007 64UAB1234',
	'System board serial number 012345',
	'CPU Type Genuine Intel(R) CPU T2500',
	'CPU Speed 2.00GHz',
	'Installed Memory 1024 MB',
	'UUID 12ee3456-789b12cd-3456-e01234567890',
	'MAC Address (Internal LAN) 00 00 00 00 00 00'
]

MARVIN_SAYS = [
	"Greetings, traveller",
	"My name is Marvin",
	"I am your Support AI",
	"What is your name?",
	"cursor",
	"Sir, you have to type your name using the terminal keyboard",
	"Let\'s try again, shall we?",
	"cursor",
	"...",
	"Sir, my scripts are bound to your input",
	"Would you mind typing your name so that we can continue?",
	"cursor",
	"Even just a letter, maybe? Old school X?",
	"cursor",
	"Ok, sir. We are not going anywere with this",
	"Let\'s try something different",
	"Are you ok with me calling you Sir?",
	"Don\'t respond if you agree",
	"cursor",
	"GREAT, SIR! Now, how can I be of assistance?",
	"Wasn\'t difficult, was it?",
	"cursor",
	"...",
	"Sir?",
	"Knock knock",
]


@app.route('/')
def hello():
	return render_template(
		'marvinthinks.html',
		title='Marvin thinks',
		marvin_says=MARVIN_SAYS,
		bios_loading=BIOS_LOADING
	)

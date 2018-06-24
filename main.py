from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import os
import sys
from io import TextIOWrapper
sys.path.append("..")

import pyproj

app=Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

if __name__=='__main__':
    app.run(debug=True)

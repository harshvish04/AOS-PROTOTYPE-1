import requests
import time
import random
import waitress
from flask import Flask

def search(query):
  proxy_list = open("proxy_list.txt", "r").readlines()
  proxy = random.choice(proxy_list).strip()
  try:
    url = "https://www.google.com/search?q=" + query
    response = requests.get(url, proxies={"http": proxy, "https": proxy})
    results = response.text
    print(results)
  except Exception as e:
    print(e)

app = Flask (__name__)


if __name__ == "__main__":
  waitress.serve(app, host="0.0.0.0", port=8080)

if __name__ == "__main__":
  search("hello world")


import os
import chromedriver_autoinstaller
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def create_driver():
    options = Options()

    running_in_ci = os.getenv("CI", "false").lower() == "true"

    if running_in_ci:
        options.add_argument("--headless=new")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")

    chromedriver_autoinstaller.install()

    return webdriver.Chrome(options=options)

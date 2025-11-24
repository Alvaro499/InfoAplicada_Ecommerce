
#Porción de codigo que se reutiliza para estar evitando llamando
#al webdriver.Chrome() en cada test

#from selenium import webdriver

#def create_driver():
#    driver = webdriver.Chrome()
#    driver.maximize_window()
#    return driver


import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def create_driver():
    options = Options()

    running_in_ci = os.getenv("CI", "false").lower() == "true"

    if running_in_ci:
        # Desactivar auto-descarga de Selenium
        os.environ["SE_CHROMEDRIVER_SKIP_DOWNLOAD"] = "1"
        os.environ["SE_SKIPPED_DRIVERS"] = "chromedriver"
        os.environ["webdriver.chrome.driver"] = "/usr/bin/chromedriver"

        # Flags para headless en Cloud Build
        options.add_argument("--headless=new")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")

    return webdriver.Chrome(options=options)


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

    # Detectar si estamos en Cloud Build (CI)
    running_in_ci = os.getenv("CI", "false").lower() == "true"

    if running_in_ci:
        # SOLO EN CI: modo headless
        options.add_argument("--headless=new")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")

    # En local NO se activa headless (sale ventana normal)
    return webdriver.Chrome(options=options)

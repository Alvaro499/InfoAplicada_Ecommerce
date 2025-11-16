
#Porción de codigo que se reutiliza para estar evitando llamando
#al webdriver.Chrome() en cada test

from selenium import webdriver

def create_driver():
    driver = webdriver.Chrome()
    driver.maximize_window()
    return driver

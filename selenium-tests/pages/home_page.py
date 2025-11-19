#Página de inci|o con los elementos y acciones de la página

from selenium.webdriver.common.by import By

class HomePage:
    URL = "https://evershop-prod.uc.r.appspot.com/"

    def __init__(self, driver):
        self.driver = driver

    def open(self):
        self.driver.get(self.URL)
        #equivalente "driver.get("https://evershop...")"

    def shop_kids_button(self):
        return self.driver.find_element(By.XPATH, "//a[contains(., 'Shop kids')]")

    def shop_men_button(self):
        return self.driver.find_element(By.XPATH, "//a[contains(., 'Shop men')]")

    def first_home_product(self):
        return self.driver.find_element(By.CSS_SELECTOR, ".product-thumbnail-listing a")

    def login_icon(self):
        #Antes de iniciar sesión
         return self.driver.find_element(By.XPATH, "//a[contains(@href, '/account/login')]")

    def account_icon(self):
        # Despues de iniciar sesión
        return self.driver.find_element(By.XPATH, "//a[contains(@href, '/account')]")



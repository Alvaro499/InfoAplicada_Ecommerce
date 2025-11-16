from selenium.webdriver.common.by import By

class ProductPage:
    def __init__(self, driver):
        self.driver = driver

    def add_to_cart_button(self):
         return self.driver.find_element(By.CSS_SELECTOR, ".add-to-cart button")

    def mini_cart_count(self):
        return self.driver.find_element(By.CSS_SELECTOR, ".mini-cart-wrapper span").text

from selenium.webdriver.common.by import By

class CartPage:
    def __init__(self, driver):
        self.driver = driver

    #Buscar el input y calcular la cantidad de productos
    def quantity_input(self):
        return self.driver.find_element(By.CSS_SELECTOR, "table.items-table.listing input[type='text']")

    def get_quantity(self):
        return self.quantity_input().get_attribute("value")
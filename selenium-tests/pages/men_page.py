from selenium.webdriver.common.by import By

class MenPage:
    def __init__(self, driver):
        self.driver = driver

    def title(self):
        return self.driver.find_element(By.XPATH, "//h1[contains(., 'Men')]")

    #def first_product(self):
    #    return self.driver.find_element(By.CSS_SELECTOR, "a.product-card")

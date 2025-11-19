from selenium.webdriver.common.by import By

class LoginPage:
    def __init__(self, driver):
        self.driver = driver

    def email_input(self):
        return self.driver.find_element(By.NAME, "email")

    def password_input(self):
        return self.driver.find_element(By.NAME, "password")

    def submit_button(self):
        return self.driver.find_element(By.CSS_SELECTOR, "button[type='submit']")

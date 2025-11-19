from utils.driver_factory import create_driver
from pages.home_page import HomePage
from pages.login_page import LoginPage
import time


def test_login_icon_in_home():
    driver = create_driver()
    home = HomePage(driver)
    login = LoginPage(driver)

    home.open()
    time.sleep(2)

    # Click en icono de login
    home.login_icon().click()
    time.sleep(2)

    login.email_input().send_keys("billy.fox45@example.com")
    login.password_input().send_keys("889900")

    login.submit_button().click()
    time.sleep(3)

    # Icono cambia a account en el href del a
    home.account_icon().click()
    time.sleep(1)

    # Ahora sí la URL contiene /account
    assert "/account" in driver.current_url

    driver.quit()

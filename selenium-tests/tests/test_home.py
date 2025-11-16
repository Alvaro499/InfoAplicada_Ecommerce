from utils.driver_factory import create_driver
from pages.home_page import HomePage
import time

def test_home_loads():
    driver = create_driver()
    home = HomePage(driver)

    home.open()
    time.sleep(2)

    assert home.shop_kids_button().is_displayed()
    assert home.shop_men_button().is_displayed()

    driver.quit()

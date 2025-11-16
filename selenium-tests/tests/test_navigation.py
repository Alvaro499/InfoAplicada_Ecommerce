from utils.driver_factory import create_driver
from pages.home_page import HomePage
from pages.men_page import MenPage
import time

def test_navigate_to_men():
    driver = create_driver()
    home = HomePage(driver)
    men = MenPage(driver)

    home.open()
    home.shop_men_button().click()

    time.sleep(2)

    assert men.title().is_displayed()

    driver.quit()

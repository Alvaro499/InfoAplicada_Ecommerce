from utils.driver_factory import create_driver
from pages.home_page import HomePage
from pages.product_page import ProductPage
import time

def test_first_home_product_to_cart():
    driver = create_driver()
    home = HomePage(driver)
    product = ProductPage(driver)

    # Abrir homepage
    home.open()
    time.sleep(2)

    # Click en el primer producto del Home
    home.first_home_product().click()
    time.sleep(2)

    # 3. Agregarlo al carrito
    product.add_to_cart_button().click()
    time.sleep(2)

    count = product.mini_cart_count()

    print("Mini-cart count:", count)

    assert count == "1", "El mini-cart NO muestra 1 producto"

    driver.quit()

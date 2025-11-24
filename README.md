### Ejecutar Pruebas Selenium

- Clonar normalmente
- En consola entrar a: `cd InfoAplicada_Ecommerce/selenium-tests`
- Se debe tener Python 3.10 en adelante:
-   py --version
-   python --version

-   Si se tiene python ejecutar desde selenium-tests segpun el tipo de python (py o python)
-     `python -m venv venv`
-     `py -m venv venv`

- Activar ambiente venv (python encapsulado): `venv\Scripts\activate`
-   Se tendrá algo como: (venv) C:\ruta\selenium-tests>

- Instalar `pytest`: `pip install selenium pytest
-
-
- Ejecutar todas las pruebas: `pytest -v -s`
- Ejecutar solo una: py nombre_prueba_test

- Implementación DevOps: CD y CI
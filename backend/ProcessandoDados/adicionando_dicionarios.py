import requests
import psycopg2


BASE_URL = "http://127.0.0.1:8000/palavras/"


def add_word_to_db(word_data):
    try:
        response = requests.post(f"{BASE_URL}palavra/", json={
            "palavraWarao": word_data["palavraWarao"],
            "palavraPortugues": word_data["palavraPortugues"],
            "categoria": word_data["categoria"]
        })
    
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error adding word to DB: {e}")
        print (word_data["palavraWarao"])
        print (word_data["palavraPortugues"])
        print (word_data["categoria"])
        print()
        return None


def is_database_empty() -> bool:
    try:
        response = requests.get("http://127.0.0.1:8000/palavras/palavra/")
        response.raise_for_status()
        data = response.json()

        # Certifique-se de que a resposta é uma lista
        if isinstance(data, list):
            verificar = len(data) == 0
            print(f"Banco de dados vazio: {verificar}")
            return verificar  # Retorna True se o banco estiver vazio
        else:
            print("A resposta da API não é uma lista. Verifique o formato da resposta.")
            return True  # Assume que está vazio se o formato for inesperado
    except requests.exceptions.RequestException as e:
        print(f"Erro ao verificar o banco de dados: {e}")
        return True  # Assume que está vazio em caso de erro
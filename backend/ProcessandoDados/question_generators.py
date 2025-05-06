import random
import logging
import requests
import psycopg2


BASE_URL = "http://127.0.0.1:8000/palavras/"


def get_all_words_from_db():
    try:
        response = requests.get(f"{BASE_URL}palavra/")
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        logging.error(f"Error fetching words from DB: {e}")
        return None

def filtro_categoria(dicionario: list, categoria: str) -> list:
    try:
        # Verificando se o dicionário não está vazio
        if not dicionario:
            logging.error("DICIONARIO DE DADOS ESTA VAZIO")
            raise ValueError("DICIONARIO DE DADOS ESTA VAZIO")
        
        # Filtrando a lista de acordo com a categoria
        dicionario_filtrado = [item for item in dicionario if item.get('categoria') == categoria]
        
        # Verificando se o dicionário filtrado está vazio
        if not dicionario_filtrado:
            logging.error("DICIONARIO FILTRADO ESTA VAZIO")
            raise ValueError("DICIONARIO FILTRADO ESTA VAZIO")
        
        return dicionario_filtrado
    
    except Exception as e:
        logging.error(f'ERRO NO FILTRO DE CATEGORIA: {e}')
        raise



#Funcao que gera perguntas para saber a traducao de uma palavra de warao para portugues
def question_generator_warao_to_portuguese(dicionario: dict) -> dict:
    try:
        #Verificando se o dicionario nao esta vazio
        if not dicionario:
            logging.error("DICIONARIO DE DADOS ESTA VAZIO")
            raise ValueError("DICIONARIO DE DADOS ESTA VAZIO")
        
        
        #Listas das palavras em portugues e em warao
        portuguese_words = [item['palavraPortugues'] for item in dicionario]
        warao_words = [item['palavraWarao'] for item in dicionario]

        #Escolhendo uma palavra aleatoria em warao
        warao_word = random.choice(warao_words)
        ans = None

        #Procurando ate achar a traducao correta da palavra aleatoria escolhida
        for item in dicionario:
            if item['palavraWarao'] == warao_word:
                ans = item['palavraPortugues']
        
        #Se por acaso nao tiver encontrado uma traducao, deve-se retornar um erro
        if not ans:
            logging.error("ERRO AO ENCONTRAR POSSIVEL TRADUCAO DA PALAVRA EM WARAO")
            raise ValueError("Traducao nao encontrada")
        
        #Gerando a lista das opcoes de alternativas
        options = [ans]
        if len(portuguese_words)>= 4:
            while len(options) < 4:
                random_option = random.choice(portuguese_words)

                if random_option not in options:
                    options.append(random_option)

        else:
            logging.error("DICIONARIO MUITO PEQUENO, NAO POSSUI NEM 4 POSSIVEIS OPÇÕES")
            raise ValueError("Dicionário precisa ter pelo menos 4 palavras para gerar opções.")
        """
        Depois de termos as opcoes, embaralhamos as opcoes, pois se nao,
        a resposta sempre estaria na primeira alternativa, ja que o primeiro elemento
        da lista de opcoes sempre eh a resposta
        """
        random.shuffle(options)        

        result = {
            "question": warao_word,
            "question_type": "warao",
            "options": options,
            "answer": options.index(ans),

        }

        print(result)
        return result

    #Tratamento de erros
    except Exception as e:
        logging.error(f'ERRO NA GERACAO DA PERGUNTA: {e}')
        raise 

#Funcao que gera pergunta para saber a traducao de uma palavra em portugues para warao
def question_generator_portuguese_to_warao(dicionario: list) -> dict:
    try:
        # Verificando se o dicionário não está vazio
        if not dicionario:
            logging.error("DICIONARIO DE DADOS ESTA VAZIO")
            raise ValueError("DICIONARIO DE DADOS ESTA VAZIO")
        
        # Listas das palavras em português e em warao
        portuguese_words = [item['palavraPortugues'] for item in dicionario]
        warao_words = [item['palavraWarao'] for item in dicionario]

        # Escolhendo uma palavra aleatória em português
        portuguese_word = random.choice(portuguese_words)
        ans = None

        # Procurando a tradução correta da palavra escolhida
        for item in dicionario:
            if item['palavraPortugues'] == portuguese_word:
                ans = item['palavraWarao']
                break
        
        # Se não encontrar a tradução, lança um erro
        if not ans:
            logging.error("ERRO AO ENCONTRAR POSSIVEL TRADUCAO DA PALAVRA EM PORTUGUES")
            raise ValueError("Tradução não encontrada para a palavra em português.")
        
        # Gerando a lista de opções de alternativas
        options = [ans]
        if len(warao_words) >= 4:
            while len(options) < 4:
                random_option = random.choice(warao_words)
                if random_option not in options:
                    options.append(random_option)
        else:
            logging.error("DICIONARIO MUITO PEQUENO, NAO POSSUI NEM 4 POSSIVEIS OPÇÕES")
            raise ValueError("Dicionário precisa ter pelo menos 4 palavras para gerar opções.")
        
        # Embaralhando as opções
        random.shuffle(options)

        result = {
            "question": portuguese_word,
            "question_type": "portugues",
            "options": options,
            "answer": options.index(ans),
        }

        return result

    except Exception as e:
        logging.error(f"ERRO NA GERACAO DA PERGUNTA: {e}")
        raise



def main():
    dicionario = get_all_words_from_db()
    dicionario_fil = filtro_categoria(dicionario, "numeros")

    question_warao = question_generator_warao_to_portuguese(dicionario_fil)

    return question_warao




if __name__ == '__main__':
    main()
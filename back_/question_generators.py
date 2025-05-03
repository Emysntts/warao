import random
import logging

#Funcao que gera perguntas para saber a traducao de uma palavra de warao para portugues
def question_generator_warao_to_portuguese(dicionario: dict) -> dict:
    try:
        #Verificando se o dicionario nao esta vazio
        if not dicionario:
            logging.error("DICIONARIO DE DADOS ESTA VAZIO")
            raise ValueError("DICIONARIO DE DADOS ESTA VAZIO")
        
        
        #Listas das palavras em portugues e em warao
        portuguese_words = list(dicionario.keys())
        warao_words = list(dicionario.values())

        #Escolhendo uma palavra aleatoria em warao
        warao_word = random.choice(warao_words)
        ans = None

        #Procurando ate achar a traducao correta da palavra aleatoria escolhida
        for key in dicionario:
            if dicionario[key] == warao_word:
                ans = key
        
        #Se por acaso nao tiver encontrado uma traducao, deve-se retornar um erro
        if not ans:
            logging.error("ERRO AO ENCONTRAR POSSIVEL TRADUCAO DA PALAVRA EM WARAO")
            raise
        
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

        return result

    #Tratamento de erros
    except Exception as e:
        logging.error(f'ERRO NA GERACAO DA PERGUNTA: {e}')
        raise 

#Funcao que gera pergunta para saber a traducao de uma palavra em portugues para warao
def question_generator_portuguese_to_warao(dicionario: dict)->dict:
    try:
        #Verificando se o dicionario nao esta vazio
        if not dicionario:
            logging.error("DICIONARIO DE DADOS ESTA VAZIO")
            raise ValueError("DICIONARIO DE DADOS ESTA VAZIO")
        
        #Listas das palavras em portugues e em warao
        portuguese_words = list(dicionario.keys())
        warao_words = list(dicionario.values())
    
        chosen_portuguese_word = random.choice(portuguese_words)
        ans = dicionario.get(chosen_portuguese_word)

        if not ans:
            logging.error("RESPOSTA NAO ENCONTRADA NO DICIONARIO")
            raise ValueError("RESPOSTA NAO ENCONTRADA NO DICIONARIO")
        
        options = [ans]
        if len(portuguese_words) >= 4:
            while len(options) < 4:
                random_word = random.choice(warao_words)
                if random_word not in options:
                    options.append(random_word)
        
        else:
            logging.error("DICIONARIO POSSUI MENOS DE 4 CAMPOS")
            raise ValueError("DICIONARIO POSSUI MENOS DE 4 CAMPOS")
        
        random.shuffle(options)

        result = {
            "question": chosen_portuguese_word,
            "question_type": "portugues",
            "options": options,
            "answer": options.index(ans),
        }

        return result

    except Exception as e:
        logging.error(f"ERRO NA GERACAO DA PERGUNTA: {e}")
        raise



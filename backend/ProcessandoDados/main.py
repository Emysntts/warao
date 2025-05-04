from adicionando_dicionarios import add_word_to_db, is_database_empty
import requests


def main():
    if is_database_empty():
        print("O banco de dados está vazio. Adicionando palavras...")

        dicionario_numeros_completos_portugues = {
            "Um": "Jisaka",
            "Uma": "Jisaka",
            "Dois": "Manamo",
            "Duas": "Manamo",
            "Três": "Dianamo",
            "Quatro": "Orabakaya",
            "Cinco": "Mojabasi Cinco",
            "Seis": "Mojabasi arai Jisaka",
            "Sete": "Mojabasi arai Manamo",
            "Oito": "Mojabasi arai Dianamo",
            "Nove": "Mojabasi arai Orabakaya",
            "Dez": "Mojoreku",
            "Onze": "Mojoreku arai Jisaka",
            "Doze": "Mojoreku arai Manamo",
            "Treze": "Mojoreku arai Dianamo",
            "Quatorze": "Mojoreku arai orabakaya",
            "Quinze": "Mojoreku arai Mojabasi",
            "Dezesseis": "Mojoreku arai Mojomatana Isaka",
            "Dezessete": "Mojoreku arai Mojomatana",
            "Dezoito": "Mojoreku arai Mojomata Dianamo",
            "Dezenove": "Mojoreku arai Mojomatana Orabakaya",
            "Vinte": "Warao jisaka",
            "Vinte e um": "Warao jisaka arai Jisaka",
            "Vinte e uma": "Warao jisaka arai Jisaka",
            "Vinte e dois": "Warao jisaka arai Manamo",
            "Vinte e duas": "Warao jisaka arai Manamo",
            "Vinte e três": "Warao jisaka arai Dianamo",
            "Trinta": "Warao jisaka arai Mojoreku",
            "Quarenta": "Warao Manamo Cuarenta",
            "Cinquenta": "Warao manamo arai Mojoreku",
            "Sessenta": "Warao Dianamo",
            "Setenta": "Warao Orabakaya",
            "Oitenta": "Warao Orabakaya",
            "Noventa": "Warao Orabakaya arai mojoreku",
            "Cem": "Warao Mojabasi",
            "Duzentos": "Warao mojabasi arai Manamo",
            "Trezentos": "Warao mojoreku tuma arai warao Mojabasi",
            "Quatrocentos": "Warao mojoreku tuma Manamo",
            "Quinhentos": "Warao mojoreku tuma manamo arai warao Mojabasi",
            "Seiscentos": "Warao mojoreku tuma Dijanamo",
            "Setecentos": "Warao mojoreku tuma dijanamo arai warao Mojabasi",
            "Oitocentos": "Warao mojoreku tuma Orabakaya",
            "Novecentos": "Warao mojoreku tuma orabakaya arai warao Mojabasi.",
            "Mil": "Warao mojoreku tuma Mojabasi",
            "Dois mil": "Warao mojoreku tuma",

        }

        for palavra_portugues, palavra_warao in dicionario_numeros_completos_portugues.items():
            word_data = {
                "palavraWarao": palavra_warao,
                "palavraPortugues": palavra_portugues,
                "categoria": "numeros"
            }
            
            add_word_to_db(word_data)
        
        dicionario_saudacoes_portugues = {
            "Bom dia": "Yakera Yokonae",
            "Boa tarde": "Yakera Anakuarika",
            "Boa noite": "Yakera Imaya",
            "Como estás?": "Katukete",
            "Tenho saúde, estou bem": "Bajukaya",
            "Nós não vamos": "Diana oko naruya",
            "Adeus": "Diana omi Nariya"
        }

        for palavra_portugues, palavra_warao in dicionario_saudacoes_portugues.items():
            word_data = {
                "palavraWarao": palavra_warao,
                "palavraPortugues": palavra_portugues,
                "categoria": "saudacoes"
            }
        
            add_word_to_db(word_data)
    else:
        print("O banco de dados já contém palavras. Nenhuma palavra foi adicionada.")
        
        
if __name__ == '__main__':
    main()
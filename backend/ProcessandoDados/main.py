from adicionando_dicionarios import add_word_to_db, is_database_empty
import requests


def main():
    if is_database_empty():
        print("O banco de dados está vazio. Adicionando palavras...")

        dicionario_primeiros_passos_portugues = {
            "PARA COMEÇAR": "ISIA NONAKITANE",
            "Eu": "Ine",
            "Tu": "Iji",
            "Ele": "Tai",
            "Vocês": "Yatu",
            "Ela": "Warao Tida.",
            "A gente / Nós": "Oko.",
            "Vós": "Orikuare.",
            "Eles": "Waractuma nibora.",
            "Elas": "Waractuma Tida.",
            "Senhor": "Daumata Nibora.",
            "Senhora": "Daumata Tida.",
            "Moça": "Eboma.",
            "Moço": "Neburatu",
            "Criança": "Noboto.",
            "Amigo (Amiga)": "Maraisa",
            "Vizinho (Vizinha)": "Mabere Ubatu.",
            "Alguém": "Kasabukaja.",
            "Ninguém": "Ekida.",
            "Todo mundo": "Ina kokotuka.",
            "As pessoas": "Waractuma.",
            "O pessoal": "Tai Waractuma",
            "Tudo": "Kokotuka.",
            "Nada": "Ekida",
            "Estou bem": "Ine Yakera.",
            "Meu nome é": "Ine Mawai",
            "Eu sou da Venezuela": "Ine Venezuela Yatamo.",
            "Eu sou venezuelano": "Ine Venezolano yatamo",
            "Eu falo": "Ine Dibuya.",
            "Eu tenho...anos": "Ine Majoida ja.",
            "Sim": "Nome.",
            "Não": "Ekida.",
            "Oi / Olá(s)": "Yakera (Yakerara)",
            "Muito prazer": "Jī naminakitane.",
            "Bom dia": "Yakera jokonae",
            "Boa tarde": "Yakera anayara.",
            "Boa noite": "Yakera anaira",
            "Bem-vindo": "Yakera nabakamo/Yakera nabakkotu",
            "Por favor": "Mamuau",
            "Obrigado (Obrigada)": "Diana Yakera",
            "Licença": "Oi",
            "Desculpa": "Tomaneteya",
        
        }

        for palavra_portugues, palavra_warao in dicionario_primeiros_passos_portugues.items():
            word_data = {
                "palavraWarao": palavra_warao,
                "palavraPortugues": palavra_portugues,
                "categoria": "primeiros_passos"
            }
            
            add_word_to_db(word_data)

        print ('Palavras Primeiros Passos adicionadas com sucesso!')


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
        

        print ('Palavras Números adicionadas com sucesso!')


    else:
        print("O banco de dados já contém palavras. Nenhuma palavra foi adicionada.")
        
        
if __name__ == '__main__':
    main()
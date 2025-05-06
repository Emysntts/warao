from .adicionando_dicionarios import add_word_to_db, is_database_empty
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

        dicionario_saude_portugues = {
            "Gripe": "Obo",
            "Coriza": "Obo ainabara",
            "Nariz entupido": "Nariz tapada / Obo aikari mokoronae",
            "Tosse": "Waroba tiji tiji",
            "Falta de ar": "Jajina yakera nabuaranaja",
            "Dor de barriga / Dor de estômago": "Makobe ajera",
            "Diarreia": "Jovito kimiya",
            "Vômito": "Dokojiya",
            "Constipação": "Joto tai",
            "Estou sentindo dor": "Masia ajera",
            "Vermes": "Kobejuba",
            "Coceira": "Tiji tiji",
            "Corte ou ferida": "Kabatanae",
            "Inflamação": "Jokojoko",
            "Sede": "Jobajera",
            "Não consigo comer": "Nojo ekida",
            "Fome": "Nojera",
            "Não consigo dormir": "Ine obakumoni",
            "Infecção": "Daisama majaya",
            "Estou menstruando": "Ine mimai",
            "Já menstruei": "Ine mimaiya",
            "Absorventes": "Joto anamo",
            "Não está chegando a menstruação": "Ine nemanja ine nejomanaja",
            "Tenho cólica / dor": "Mobokabe ajera",
            "Suspeito que estou grávida": "Ine kuaboyatai iana",
            "Estou grávida": "Ine kuabu",
            "Sou casada": "Ori ni saani",
            "Não tenho filhos": "Manoboto ekida",
            "Você faz alguma coisa para não engravidar?": "Yarokota kuruya kuabuanka katimate",
            "Tive vários parceiros sexuais": "Nibora daisama isiko ori monikatai",
            "Tenho apenas um parceiro sexual": "Nibo eraja asiiko ori monikatai",
            "Não tive relações sexuais": "Totona",
            "Não tenho relações sexuais": "No tengo relaciones sexuales",
            "Mate tida ainaja (falei mulher)": "Se quem fala é mulher",
            "Mate tida ajiina (falei homem)": "Se quem fala é homem",
            "Vacinas": "Akosa abakitaine",
            "Aleitar": "Ami orokitane",
            "Hipertensão": "Botobetera",
            "Hérnia": "Kabukari nabutónai",
            "Pus": "Kunaje / Onobo",
            "Tuberculose": "Obosabana",
            "Enxaqueca": "Kawajera abane akuajera",
            "Doença sexualmente transmissível": "Samorona",
            "Infarto": "Jokarosinaka",
            "Sangue": "Joto",
            "Anemia": "Jene",
            "HIV - AIDS": "Wabasabana",
            "Diabetes": "Jotu diabeira",
            "Câncer": "Ekusbana"
        }

        for palavra_portugues, palavra_warao in dicionario_saude_portugues.items():
            word_data = {
                "palavraWarao": palavra_warao,
                "palavraPortugues": palavra_portugues,
                "categoria": "saude"
            }
            
            add_word_to_db(word_data)

        print ('Palavras Saúde adicionadas com sucesso!')


        dicionario_cores_portugues = {
            "Azul": "Jebura",
            "Vermelho": "Simo",
            "Amarelo": "Jene",
            "Verde": "Jebura",
            "Branco": "Joko",
            "Preto": "Ana",
            "Laranja": "Jene",
            "Rosa": "Simo simo",
        }

        for palavra_portugues, palavra_warao in dicionario_cores_portugues.items():
            word_data = {
                "palavraWarao": palavra_warao,
                "palavraPortugues": palavra_portugues,
                "categoria": "cores"
            }
            
            add_word_to_db(word_data)

        print ('Palavras Cores adicionadas com sucesso!')


        dicionario_lugares_portugues = {
            "Hotel": "Dara anijakana amuara isiko",
            "Restaurante": "Najoro anijakana amuara isiko",
            "Casa": "Janoko",
            "Apartamento": "Dara amuara isiko Apartamento",
            "Quitinete": "Dara ajanko yaroturo",
            "Barraco": "Janoko yakera",
            "Dentro de casa": "Janoko eku",
            "Cozinha": "Sabanoko",
            "Quarto": "Ubanoko",
            "Sala": "Karata tiribunoko",
            "Refeitório": "Najoro noko",
            "Banheiro": "Kiminoko",
            "Vaso": "Kiminoko ajuku ekida",
            "Chuveiro": "Jo anakana",
            "Quintal": "Kotubunoko",
            "Cama": "Ubanoko anoko",
            "Cadeira": "Dujunoko",
            "Mesa": "Jabatanoko",
            "Guarda-roupas": "Jiyaka anoko",
            "Colchão": "Arai Ubanoko",
            "Toalha": "Tejo berenoko",
            "Lençol": "Simara",
            "Cobertor": "Simarada",
            "Travesseiro": "Kuanoko",
            "Chave": "Itatanoko",
            "Cadeado": "Itatanoko",
            "Direção": "Omunoko kasabamo",
            "À direita": "Mojo tamasaba",
            "À esquerda": "Mojo",
            "Direto": "Tamasaba"
        }

        for palavra_portugues, palavra_warao in dicionario_lugares_portugues.items():
            word_data = {
                "palavraWarao": palavra_warao,
                "palavraPortugues": palavra_portugues,
                "categoria": "locais"
            }
            
            add_word_to_db(word_data)

        print ('Palavras Locais adicionadas com sucesso!')


        dicionario_transporte_portugues = {
            "Avião": "Kuaya kujunoko",
            "Barco": "Nabaida akujunoko",
            "Canoa": "Wajibaka",
            "Ônibus": "Ji barabara aida",
            "Táxi": "Dubujida akujunoko",
            "Motocicleta": "Barabara akujunoko",
            "Carro": "Boto jebutanoko",
            "Passagem": "Amuara isiko",
            "Porto": "Nabakanoko",
            "Aeroporto": "Kuaya anabakanoko"
        }

        for palavra_portugues, palavra_warao in dicionario_transporte_portugues.items():
            word_data = {
                "palavraWarao": palavra_warao,
                "palavraPortugues": palavra_portugues,
                "categoria": "locais"
            }
            
            add_word_to_db(word_data)

        print ('Palavras Transporte adicionadas com sucesso!')

    else:
        print("O banco de dados já contém palavras. Nenhuma palavra foi adicionada.")
        
        
if __name__ == '__main__':
    main()
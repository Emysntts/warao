from ninja import NinjaAPI
from apps.palavras.api import palavras_router 

# Criação da API principal
api = NinjaAPI()

# Adiciona o router de palavras à API principal
api.add_router("/palavras/", palavras_router, tags=["Palavras"])

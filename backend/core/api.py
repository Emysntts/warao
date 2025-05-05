from ninja import NinjaAPI
from apps.palavras.api import palavras_router, router
from apps.usuarios.api import usuario_router

# Criação da API principal
api = NinjaAPI()

# Adiciona o router de palavras à API principal
api.add_router("/palavras/", palavras_router, tags=["Palavras"])
api.add_router("/usuarios/", usuario_router, tags=["Usuarios"])
api.add_router("/api/", router, tags=["API"])
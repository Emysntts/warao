from ninja import Router
from ninja import ModelSchema, Schema
from typing import List
from apps.palavras.models import Palavra

palavras_router = Router()


class PalavrasSchema(ModelSchema):
    class Config:
        model = Palavra
        model_fields = ["palavraWarao", "palavraPortugues"]

@palavras_router.post("/palavras/", response=PalavrasSchema)
def post_palavra(request, palavra_data: PalavrasSchema):
    nova_palavra = Palavra(
        palavraWarao=palavra_data.palavraWarao,
        palavraPortugues=palavra_data.palavraPortugues
    )
    nova_palavra.save()
    return nova_palavra



@palavras_router.get("/palavras/", response=List[PalavrasSchema])
def list_palavras(request):
    palavras = Palavra.objects.all()
    return palavras
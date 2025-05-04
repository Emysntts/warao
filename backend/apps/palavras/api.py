from ninja import Router
from ninja import ModelSchema, Schema
from typing import List
from apps.palavras.models import Palavra

palavras_router = Router()


class PalavrasSchema(ModelSchema):
    class Config:
        model = Palavra
        model_fields = ["palavraWarao", "palavraPortugues", "categoria"]

@palavras_router.post("/palavra/", response=PalavrasSchema)
def post_palavra(request, palavra_data: PalavrasSchema):
    nova_palavra = Palavra(
        palavraWarao=palavra_data.palavraWarao,
        palavraPortugues=palavra_data.palavraPortugues,
        categoria=palavra_data.categoria,
    )
    nova_palavra.save()
    return nova_palavra



@palavras_router.get("/palavra/", response=List[PalavrasSchema])
def list_palavras(request):
    palavras = Palavra.objects.all()
    return palavras

@palavras_router.get("/palavra/{palavra_id}/", response=PalavrasSchema)
def get_palavra(request, palavra_id: int):
    try:
        palavra = Palavra.objects.get(id=palavra_id)
        return palavra
    except Palavra.DoesNotExist:
        return {"error": "Palavra not found"}

@palavras_router.delete("/palavra/{palavra_id}/")
def delete_palavra(request, palavra_id: int):
    try:
        palavra = Palavra.objects.get(id=palavra_id)
        palavra.delete()
        return {"success": "Palavra deleted"}
    except Palavra.DoesNotExist:
        return {"error": "Palavra not found"}
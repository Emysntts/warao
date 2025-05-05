from ninja import Router
from ninja import ModelSchema, Schema
from typing import List
from apps.palavras.models import Palavra
from ProcessandoDados.question_generators import (
    get_all_words_from_db,
    filtro_categoria,
    question_generator_portuguese_to_warao,
)

palavras_router = Router()
router = Router()

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

@palavras_router.get("/palavras/categoria/{categoria}/", response=List[PalavrasSchema])
def get_palavras_por_categoria(request, categoria: str):
    palavras = Palavra.objects.filter(categoria=categoria)
    return palavras



@router.get("/questions", response=List[dict])
def get_questions(request, categoria: str = "numeros"):
    try:
       
        dicionario = get_all_words_from_db()
       
        dicionario_filtrado = filtro_categoria(dicionario, categoria)
    
       
        question = question_generator_portuguese_to_warao(dicionario_filtrado)
      

        return [question]
    except Exception as e:
        print("Erro na geração da pergunta:", str(e))  # Log do erro
        return {"error": str(e)}
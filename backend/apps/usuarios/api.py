from ninja import Router
from ninja import ModelSchema
from django.http import JsonResponse
from typing import Optional, List
from django.shortcuts import get_object_or_404
from apps.usuarios.models import Usuario

usuario_router = Router()

class UsuarioSchema(ModelSchema):
    class Config:
        model = Usuario
        model_fields = ["nome", "nivel"]

@usuario_router.get("/usuario", response=List[UsuarioSchema])
def get_usuarios(request):
    usuarios = Usuario.objects.all()
    return usuarios

@usuario_router.get("/usuario/{usuario_id}", response=UsuarioSchema)
def obter_usuario(request, usuario_id: int):
    usuario = get_object_or_404(Usuario, id=usuario_id)
    return usuario

@usuario_router.post("/usuario", response=UsuarioSchema)
def post_usuario(request, usuario_data: UsuarioSchema):
    novo_usuario = Usuario(
        nome=usuario_data.nome,
        nivel=usuario_data.nivel
    )
    novo_usuario.save()
    return novo_usuario

@usuario_router.put("/usuario/{usuario_id}", response=UsuarioSchema)
def update_usuario(request, usuario_id: int, usuario_data: UsuarioSchema):
    usuario = get_object_or_404(Usuario, id=usuario_id)
    usuario.nome = usuario_data.nome
    usuario.nivel = usuario_data.nivel
    usuario.save()
    return usuario


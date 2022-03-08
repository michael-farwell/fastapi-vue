from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from backend.app.router import pokemon

app = FastAPI()

app.include_router(pokemon.router)

app.mount('/pokemon', StaticFiles(directory='frontend/pokemon/dist', html=True), name='pokemon')

from fastapi import APIRouter

router = APIRouter(
    prefix='/pokemon/api',
    tags=['pokemon'],
    responses={404: {'description': 'Not found'}}
)


@router.get('/')
async def get_root():
    return {'Success': True}

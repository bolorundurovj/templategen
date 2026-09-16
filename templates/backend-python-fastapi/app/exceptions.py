from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
from app.logger import logger


async def http_exception_handler(request: Request, exc: StarletteHTTPException):
    logger.warning(f"HTTPException: {request.method} {request.url.path} - {exc.detail} (status {exc.status_code})")
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "detail": exc.detail,
            "status_code": exc.status_code,
        },
    )


async def validation_exception_handler(request: Request, exc: RequestValidationError):
    logger.warning(f"ValidationError: {request.method} {request.url.path} - {exc.errors()}")
    return JSONResponse(
        status_code=422,
        content={
            "detail": exc.errors(),
            "status_code": 422,
        },
    )


async def generic_exception_handler(request: Request, exc: Exception):
    if isinstance(exc, StarletteHTTPException):
        return await http_exception_handler(request, exc)
    if isinstance(exc, RequestValidationError):
        return await validation_exception_handler(request, exc)

    logger.error(f"Unhandled Exception: {request.method} {request.url.path} - {str(exc)}", exc_info=exc)
    return JSONResponse(
        status_code=500,
        content={
            "detail": str(exc) if str(exc) else "Internal server error",
            "status_code": 500,
        },
    )

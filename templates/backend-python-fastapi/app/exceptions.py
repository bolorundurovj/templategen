from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from app.logger import logger


async def http_exception_handler(request: Request, exc: HTTPException):
    logger.warning(f"HTTPException: {request.method} {request.url.path} - {exc.detail} (status {exc.status_code})")
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "detail": exc.detail,
            "status_code": exc.status_code,
        },
    )


async def generic_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled Exception: {request.method} {request.url.path} - {str(exc)}", exc_info=exc)
    return JSONResponse(
        status_code=500,
        content={
            "detail": "Internal server error",
            "status_code": 500,
        },
    )

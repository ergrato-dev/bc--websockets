FROM python:3.12-slim

# Copiar uv desde la imagen oficial (versión pinada, sin pip)
COPY --from=ghcr.io/astral-sh/uv:0.11.15 /uv /uvx /bin/

ENV PYTHONDONTWRITEBYTECODE=1 \
  PYTHONUNBUFFERED=1 \
  UV_COMPILE_BYTECODE=1 \
  UV_LINK_MODE=copy

WORKDIR /app
COPY pyproject.toml ./
RUN uv sync --frozen --no-dev
COPY src/ ./src/
COPY static/ ./static/

EXPOSE 8000
CMD ["uv", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

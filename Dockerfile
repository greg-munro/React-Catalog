FROM python:3.10-alpine3.15

RUN ["mkdir", "/react-catalog"]
WORKDIR /react-catlog

EXPOSE 3005

CMD ["python", "react-catalog.py"]
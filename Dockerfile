FROM node:18-alpine
COPY . /app
WORKDIR /app
EXPOSE 3001
CMD npm run dev

# sudo docker run -d -v /home/anderson/projects/aquiteturalimpa-e-hexagpnal.:/app -p 3001:3001 --name chexagonal ehexagono

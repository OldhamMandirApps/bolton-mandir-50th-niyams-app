FROM node:alpine

RUN apk add openjdk11 curl

RUN npm install -g firebase-tools

WORKDIR /app

COPY db/ ./db
COPY .firebaserc .
COPY firebase.json .
COPY firestore.indexes.json .
COPY firestore.rules .

RUN ls -a

EXPOSE 4000 8080

HEALTHCHECK --interval=5s --retries=10 CMD curl -f http://localhost:4000 || exit 1

CMD [ "firebase", "--project=bolton-50th-niyams-app-staging", "emulators:start", "--only", "firestore", "--import=db/init" ]

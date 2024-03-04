# Stage 1: Сборка приложения
FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src/ /app/src/
RUN mvn package -Dmaven.test.skip=true

# Stage 2: Создание финального образа
#FROM openjdk:11
#WORKDIR /app
#COPY --from=build /app/target/QuickProjectApp.jar /app/QuickProjectApp.jar
#CMD ["java", "-jar", "QuickProjectApp.jar"]


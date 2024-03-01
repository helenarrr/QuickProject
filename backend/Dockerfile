FROM openjdk:17.0.2-jdk-slim-buster
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

# Stage 2: Создание финального образа
#FROM openjdk:11
#WORKDIR /app
#COPY --from=build /app/target/QuickProjectApp.jar /app/QuickProjectApp.jar
#CMD ["java", "-jar", "QuickProjectApp.jar"]


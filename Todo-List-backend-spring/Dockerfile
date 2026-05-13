FROM eclipse-temurin:21-jdk-jammy
WORKDIR /app
COPY . .
RUN ./mvnw clean install -DskipTests
CMD ["java", "-jar", "target/app.jar"]
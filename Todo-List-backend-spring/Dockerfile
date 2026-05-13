FROM eclipse-temurin:21-jdk-jammy
COPY . .
RUN ./mvnw clean install -DskipTests
CMD ["java", "-jar", "target/app.jar"]
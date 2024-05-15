FROM openjdk:11-jre-slim


COPY target/employeeManagement.jar /app/employeeManagement.jar

EXPOSE 8080

CMD ["java", "-jar", "employeeManagement.jar"]
FROM openjdk:17-jdk-alpine

ADD target/employeeManagement.jar employeeManagement.jar

ENTRYPOINT ["java","-jar","employeeManagement.jar"]
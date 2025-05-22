@echo off
setlocal

:: Step 1: Install dependencies
echo Installing React app dependencies...
cd frontend\react-app
call npm install
if errorlevel 1 (
    echo npm install failed!
    exit /b 1
)

:: Step 2: Build the React app using Vite
echo Building React app...
call npm run build
if errorlevel 1 (
    echo React build failed!
    exit /b 1
)

:: Step 3: Copy build files to Spring Boot static folder
echo Copying build files to Spring Boot static folder...
cd ..\..
rmdir /s /q backend\spring-app\src\main\resources\static
mkdir backend\spring-app\src\main\resources\static
xcopy /E /Y /I frontend\react-app\dist\* backend\spring-app\src\main\resources\static

:: Step 4: Build the Spring Boot JAR
echo Building Spring Boot JAR...
cd backend\spring-app
call mvn clean package -DskipTests
if errorlevel 1 (
    echo Spring Boot build failed!
    exit /b 1
)

:: Step 5: Run the JAR file
echo Running Spring Boot application from JAR...
cd target
for %%f in (*.jar) do (
    echo Found JAR: %%f
    java -jar "%%f"
    goto end
)

echo No JAR file found in target folder!
:end

endlocal

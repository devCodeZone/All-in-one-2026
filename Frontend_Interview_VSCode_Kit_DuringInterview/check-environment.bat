@echo off
REM Frontend interview environment checker for Windows.
REM This script only prints versions; it does not install or change anything.

echo ==============================
echo Frontend Interview Environment
echo ==============================

echo.
echo [Node]
node -v

echo.
echo [npm]
npm -v

echo.
echo [Git]
git --version

echo.
echo [VS Code]
code --version

echo.
echo If a command is not recognized, install/fix it before interview day.
pause

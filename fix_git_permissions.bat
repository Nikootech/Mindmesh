@echo off
echo ==============================================
echo Fixing Git repository permissions on Windows...
echo ==============================================

takeown /f "%~dp0.git" /r /d y
icacls "%~dp0.git" /grant Users:(OI)(CI)F /t
icacls "%~dp0.git" /grant Everyone:(OI)(CI)F /t

echo.
echo ==============================================
echo Done! All Git permissions are fixed.
echo You can now commit without any errors.
echo ==============================================
pause

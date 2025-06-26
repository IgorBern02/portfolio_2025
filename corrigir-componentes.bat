@echo off
REM Corrigindo nomes dos componentes com git mv no Windows na pasta src\components

git mv src\components\skills.jsx src\components\temp1.jsx
git mv src\components\temp1.jsx src\components\Skills.jsx

git mv src\components\showcase.jsx src\components\temp2.jsx
git mv src\components\temp2.jsx src\components\Showcase.jsx

git mv src\components\projetos.jsx src\components\temp3.jsx
git mv src\components\temp3.jsx src\components\Projetos.jsx

git mv src\components\header.jsx src\components\temp4.jsx
git mv src\components\temp4.jsx src\components\Header.jsx

git mv src\components\footer.jsx src\components\temp5.jsx
git mv src\components\temp5.jsx src\components\Footer.jsx

git mv src\components\contact.jsx src\components\temp6.jsx
git mv src\components\temp6.jsx src\components\Contact.jsx

git mv src\components\background.jsx src\components\temp7.jsx
git mv src\components\temp7.jsx src\components\Background.jsx

git mv src\components\about.jsx src\components\temp8.jsx
git mv src\components\temp8.jsx src\components\About.jsx

echo.
echo Componentes renomeados com sucesso.
pause

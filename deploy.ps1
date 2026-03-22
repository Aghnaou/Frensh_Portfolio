# Script de déploiement PowerShell pour le portfolio
Write-Host "🚀 Démarrage du déploiement du portfolio..." -ForegroundColor Green

# Vérification des prérequis
Write-Host "📋 Vérification des prérequis..." -ForegroundColor Yellow

try {
    node --version | Out-Null
    Write-Host "✅ Node.js détecté" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js n'est pas installé" -ForegroundColor Red
    exit 1
}

try {
    npm --version | Out-Null
    Write-Host "✅ npm détecté" -ForegroundColor Green
} catch {
    Write-Host "❌ npm n'est pas installé" -ForegroundColor Red
    exit 1
}

# Installation des dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
npm install

# Build de production
Write-Host "🔨 Build de production..." -ForegroundColor Yellow
npm run build

# Test du build
Write-Host "🧪 Test du build..." -ForegroundColor Yellow
if (!(Test-Path "build")) {
    Write-Host "❌ Le build a échoué" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build réussi!" -ForegroundColor Green

# Déploiement sur GitHub Pages
Write-Host "🌐 Déploiement sur GitHub Pages..." -ForegroundColor Yellow
npm run deploy

Write-Host "🎉 Déploiement terminé avec succès!" -ForegroundColor Green
Write-Host "🔗 Votre portfolio est disponible à: https://HACHIMIATMANE.github.io/MyPortfolio" -ForegroundColor Cyan
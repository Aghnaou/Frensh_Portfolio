#!/bin/bash

# Script de déploiement automatique pour le portfolio
echo "🚀 Démarrage du déploiement du portfolio..."

# Vérification des prérequis
echo "📋 Vérification des prérequis..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    exit 1
fi

# Installation des dépendances
echo "📦 Installation des dépendances..."
npm install

# Build de production
echo "🔨 Build de production..."
npm run build

# Test du build
echo "🧪 Test du build..."
if [ ! -d "build" ]; then
    echo "❌ Le build a échoué"
    exit 1
fi

echo "✅ Build réussi!"

# Déploiement sur GitHub Pages
echo "🌐 Déploiement sur GitHub Pages..."
npm run deploy

echo "🎉 Déploiement terminé avec succès!"
echo "🔗 Votre portfolio est disponible à: https://HACHIMIATMANE.github.io/MyPortfolio"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visor 360° con Galería</title>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="js/galeria.js"></script>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        .thumbnail-container {
            position: absolute;
            bottom: 10px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.5s;
        }
        .thumbnail {
            width: 100px;
            height: 50px;
            margin: 0 5px;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
        }
        .thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .arrow {
            cursor: pointer;
            font-size: 24px;
            color: white;
            margin: 0 15px;
            user-select: none;
        }
        .toggle-button {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 10px 15px;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            border: none;
            cursor: pointer;
            z-index: 1000;
        }
    </style>
</head>
<body>

    <!-- Botón para mostrar/ocultar la galería -->
    <button class="toggle-button" id="toggle-gallery-btn">Mostrar/Ocultar Galería</button>

    <!-- Contenedor de la escena A-Frame -->
    <a-scene>
        <!-- Entidad de la cámara con controles habilitados -->
        <a-camera 
            wasd-controls="enabled: true; fly: true"  
            look-controls="pointerLockEnabled: true"
            zoom="min: 0.5; max: 5"
            mouse-cursor>
        </a-camera>

        <!-- Imagen 360° -->
        <a-sky id="imagen360" src="#"></a-sky>

        <!-- Definir las imágenes 360° aquí -->
        <a-assets id="asset-container">
            <!-- Las imágenes se cargarán dinámicamente -->
        </a-assets>

    </a-scene>

    <!-- Contenedor de los thumbnails y flechas para PC -->
    <div class="thumbnail-container" id="thumbnail-container">
        <div class="arrow" id="left-arrow">⬅️</div>
        <div id="thumbnails"></div>
        <div class="arrow" id="right-arrow">➡️</div>
    </div>

</body>
</html>

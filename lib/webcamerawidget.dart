import 'dart:html' as html;
import 'package:flutter/material.dart';

class WebCameraWidget extends StatefulWidget {
  @override
  _WebCameraWidgetState createState() => _WebCameraWidgetState();
}

class _WebCameraWidgetState extends State<WebCameraWidget> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _loadResources());
  }

  void _loadResources() {
    _injectVideoContainer();
    _injectScript(
        src: 'https:s//unpkg.com/es-module-shims@1.7.2/dist/es-module-shims.js',
        async: true);
    _injectImportMap();
    _injectMainScript();
    _injectStyles();
  }

  void _injectVideoContainer() {
    final videoContainer = html.DivElement()
      ..id = 'videoContainer'
      ..style.width = '100vw'
      ..style.height = '100vh'
      ..style.position = 'relative'
      ..style.overflow = 'hidden';
    html.document.body!.append(videoContainer);
  }

  void _injectScript({required String src, bool async = false}) {
    final script = html.ScriptElement()
      ..src = src
      ..async = async;
    html.document.head!.append(script);
  }


  void _injectImportMap() {
    final importMap = html.ScriptElement()
      ..type = 'importmap'
      ..innerText = '''
        {
          "imports": {
            "three": "https://unpkg.com/three@0.153.0/build/three.module.js"
          }
        }
      ''';
    html.document.head!.append(importMap);
  }

  void _injectMainScript() {
    final mainScript = html.ScriptElement()
      ..type = 'module'
      ..innerText = """
    (async () => {
    
      
      const videoContainer = document.querySelector('#videoContainer');
      if (!videoContainer) {
        console.error('videoContainer not found');
        return;
      }
      
      const startCamera = async () => {
        try {
          const videoStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
          });
          const videoElement = document.createElement('video');
          videoElement.srcObject = videoStream;
          videoElement.muted = true;
          videoElement.play();
          videoContainer.appendChild(videoElement);
        } catch (error) {
          console.error('Error accessing media devices.', error);
        }
      };

      await startCamera();
    })();
    """;
    html.document.body!.append(mainScript);
  }

  void _injectStyles() {
    final styles = html.StyleElement()
      ..innerText = '''
      body { margin: 0; }
      
      #videoContainer {
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;
      }

      #cameraBackLabel {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 0, 0.5); /* Semi-transparent yellow */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color: black;
        z-index: 1; /* Ensure it is above the video */
      }

      #backupImage {
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        display: none; /* Initially hidden */
      }

      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0; /* Ensure video is below the label */
      }
    ''';
    html.document.head!.append(styles);
  }

  @override
  Widget build(BuildContext context) {
    // El widget en sí no necesita mostrar UI adicional en este caso
    return Container(
      child: Text('Integración de HTML/JS en Flutter Web'),
    );
  }
}

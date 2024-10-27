import React, { useState, useEffect, useRef } from 'react';
import { View, Button, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function HomeScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const openCamera = () => {
    setCameraVisible(true);
    setPhoto(null); // Reset any previously taken photo
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      setPhoto(data.uri);
      setCameraVisible(false); // Hide camera after taking picture
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {cameraVisible ? (
        <Camera style={styles.camera} ref={cameraRef}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
        </Camera>
      ) : (
        <>
          <Button title="Open Camera" onPress={openCamera} />
          {photo && (
            <Image source={{ uri: photo }} style={styles.image} />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { flex: 1, width: '100%', justifyContent: 'flex-end' },
  captureButton: {
    alignSelf: 'center',
    marginBottom: 30,
    padding: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  buttonText: { color: 'white', fontSize: 18 },
  image: { width: 200, height: 200, marginTop: 20 },
});

import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./facialExpression.css";

function FacialExpression() {
  const videoRef = useRef(null);
  const [expression, setExpression] = useState("Detecting...");
  const [confidence, setConfidence] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadModels = async () => {
    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");

      setLoading(false);
      startCamera();
    } catch (error) {
      console.error("Model loading error:", error);
    }
  };
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Camera error:", error);
    }
  };

  async function detectMood() {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
    let mostProbableExpression = 0;
    let _expression = "";

    if (!detections || detections.length == 0) {
      console.log("No Face Detected");
      return;
    }
    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProbableExpression) {
        mostProbableExpression = detections[0].expressions[expression];
        _expression = expression;
      }
    }
    console.log(_expression);
  }
  useEffect(() => {
    loadModels().then(startCamera);
  }, []);

  return (
    <div className="mood-element">
      <video ref={videoRef} autoPlay muted className="user-video-feed" />
      <button className="mood-detect-btn" onClick={detectMood}>
        Detect Mood
      </button>
    </div>
  );
}

export default FacialExpression;

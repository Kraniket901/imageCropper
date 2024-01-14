// components/ImageCropper.tsx
import Image from "next/image";
import { useState, useCallback } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface ImageCropperProps {
  imageSrc: string;
  onCropComplete: (croppedAreaPixels: Crop) => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({
  imageSrc,
  onCropComplete,
}) => {
  const [crop, setCrop] = useState<Crop>({
    unit: "px",
    width: 30,
    x: 100,
    y: 100,
    height: 100,
  });

  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(""); // Provide a default value

  const onCropChange = useCallback((newCrop: Crop) => {
    setCrop(newCrop);
  }, []);

  const onCropCompleted = useCallback(
    ( _, croppedAreaPixels: Crop) => {
      onCropComplete(croppedAreaPixels);
    },
    [onCropComplete]
  );

  const downloadCroppedImage = () => {
    const canvas = document.createElement("canvas");
    const image = new Image();
    image.src = imageSrc;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      canvas.width = crop.width!;
      canvas.height = crop.height!;
      ctx.drawImage(
        image,
        crop.x! * scaleX,
        crop.y! * scaleY,
        crop.width! * scaleX,
        crop.height! * scaleY,
        0,
        0,
        crop.width!,
        crop.height!
      );
      const url = canvas.toDataURL("image/png");
      setCroppedImageUrl(url);

      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "cropped_image.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
    }
  };

  return (
    <div className="image-cropper-container">
      <ReactCrop
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={onCropCompleted}
      >
        <Image src={imageSrc} alt="Crop preview" />
      </ReactCrop>
      <button onClick={downloadCroppedImage}>Download Cropped Image</button>
      <Image src={croppedImageUrl} alt="Cropped Image" />
    </div>
  );
};

export default ImageCropper;
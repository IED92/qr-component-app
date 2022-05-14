import React from "react";
import img from "../assets/image-qr-code.png";

const QRCard = () => {
  return (
    <div className="w-80 bg-white rounded-xl drop-shadow-xl">
      <div className="grid grid-cols-1 gap-4 justify-center justify-items-center p-4">
        <img className="w-full h-72 rounded-xl mb-3" src={img} alt="" />
        <h2 className="font-extrabold text-xl font-sans text-dark-blue leading-tight">
          Improve your front-end skills by building projects!
        </h2>
        <p className="font-sans text-greyish-blue leading-tight mb-6">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level!
        </p>
      </div>
    </div>
  );
};

export default QRCard;

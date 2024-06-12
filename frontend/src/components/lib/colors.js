// utils/colors.js

export function getAlternateVibrantColorClass() {
    const vibrantColorClasses = [
      "bg-orange-700",
      "bg-green-700",
      "bg-yellow-700",
      "bg-pink-700",
      "bg-cyan-700"
    ];
  
    let index = 0;
  
    return function () {
      const colorClass = vibrantColorClasses[index];
      index = (index + 2) % vibrantColorClasses.length; // Incrementing by 2 to get alternate colors
      return colorClass;
    };
  }
  
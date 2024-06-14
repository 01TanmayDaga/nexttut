// utils/colors.js

export function getAlternateVibrantColorClass() {
    const vibrantColorClasses = [
      "bg-orange-200",
      "bg-green-200",
      "bg-yellow-200",
      "bg-pink-200",
      "bg-cyan-200"
    ];
  
    let index = 0;
  
    return function () {
      const colorClass = vibrantColorClasses[index];
      index = (index + 2) % vibrantColorClasses.length; // Incrementing by 2 to get alternate colors
      return colorClass;
    };
  }
  
import React from "react";
import styles from "../styles/Packages.module.css";

const Packages = () => {
  const packages = [
    {
      title: "Standard Interior Detail",
      duration: "~3 hours",
      price: "$90 - $130",
      description: [
        "Remove all loose items",
        "Wash weather tech floor mats / vacuum carpet mats",
        "Thorough vacuum (including trunk)",
        "Clean all interior surfaces",
        "Clean windows & mirrors",
        "Final touch-ups",
        "+ $15 for pet hair",
      ],
    },
    {
      title: "Restorative Interior Detail",
      duration: "~6 hours",
      price: "$140 - $260",
      description: [
        "Remove all loose items",
        "Clean and protect floor mats / carpets",
        "Thorough vacuum (including trunk)",
        "Clean all interior surfaces",
        "Shampoo and extract carpet/cloth seats and floors",
        "Clean windows & mirrors",
        "Final touch-ups",
        "+ $15 for pet hair",
      ],
    },
    {
      title: "Premium Exterior Detail",
      duration: "~30 min",
      price: "$35",
      description: [
        "Clean wheels, tires, and gas cap",
        "Remove bugs & bird feces from vehicle",
        "Wash vehicle with quality mitts, products, and methods",
        "Dry vehicle with soft microfiber towel and air blower",
        "Clean exterior glass",
        "Dress tires for extra shine (only if requested)",
      ],
    },
    {
      title: "Exterior Wax",
      duration: "2 - 4 hours",
      price: "$150",
      description: [
        "Wax recommended every 2-3 months",
        "Price and time vary depending on paint condition",
        "Compounding/polishing may be needed before wax application",
        "*Must purchase premium exterior detail in order to get a wax",
      ],
    },
    {
      title: "Monthly Maintenance Package",
      price: "$100 per month",
      description: [
        "Exterior wash with the standard interior detail package",
        "For customers who want to maintain pristine condition monthly",
        "*Must purchase Restorative Interior Detail before starting Monthly Maintenance",
      ],
    },
  ];

  return (
    <section className={styles.packagesSection}>
      <h2 className={styles.heading}>Packages & Pricing</h2>
      <div className={styles.packagesGrid}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.packageCard}>
            <h3 className={styles.packageTitle}>{pkg.title}</h3>
            {pkg.duration && <p className={styles.packageDuration}>{pkg.duration}</p>}
            <p className={styles.packagePrice}>{pkg.price}</p>
            <ul className={styles.packageList}>
              {pkg.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;

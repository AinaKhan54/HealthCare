import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import kidneysImage from "../../../assets/Images/kidneys.jpg"; 
import Footer from '../../../layout/userLayout/footer';

const Kidneys: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      {/* Container for image and first paragraph */}
      <div className="p-6 max-w-full mx-auto flex flex-col lg:flex-row lg:space-x-6 mb-6">
        {/* Text Section */}
        <div className="flex-1 lg:w-1/2 pr-6">
          <h1 className="text-2xl font-bold mb-4">Understanding the Kidneys</h1>
          <p className="text-lg text-gray-700 mb-6">
            The kidneys are crucial, bean-shaped organs situated in the lower back, just beneath the rib cage on either side of the spine.
            Each kidney, with its intricate internal structure, serves as a vital component of the body's renal system. Inside each kidney 
            are up to one million nephrons, the functional units responsible for filtering blood and maintaining the body's homeostasis.
            A nephron comprises a glomerulus—a network of tiny, delicate blood capillaries—connected by a tubule. The glomerulus acts as
            the kidney's primary filtering mechanism, where blood is processed to remove waste products while retaining essential nutrients
            and fluids. The kidneys receive blood from the heart through the renal arteries, which deliver oxygen-rich blood to the kidneys.
            This blood is then filtered in the glomeruli, and the resulting filtrate is processed by the tubules to reabsorb vital nutrients
            and expel waste products. This complex process not only helps regulate the body's fluid and electrolyte balance but also plays a
            critical role in eliminating metabolic wastes and toxins, thereby supporting overall health and function. By continuously
            filtering and cleansing the blood, the kidneys help to ensure that the body's internal environment remains stable and conducive
            to optimal function.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
          <img src={kidneysImage} alt="Kidneys" className="w-full h-auto max-w-2lg rounded-lg shadow-md" />
        </div>
      </div>

      {/* Full-width content below */}
      <div className="p-6 max-w-full mx-auto">
        <h2 className="text-xl font-semibold mb-5">Functions of the Kidneys</h2>
        <ul className="list-disc list-inside mb-4 text-lg text-gray-700">
          <li><strong>Maintaining Equilibrium:</strong> The kidneys regulate fluid levels, electrolyte balance, and other elements to maintain the body's internal environment stable and comfortable.</li>
          <li><strong>Keeping the pH Stable:</strong> The kidneys and lungs work together to maintain the body's pH balance. The lungs regulate the amount of carbon dioxide in circulation.</li>
          <li><strong>Nutritional Absorption:</strong> The kidneys use tubules to reabsorb nutrients from the blood and transport them to where they are needed. They also reabsorb other substances to maintain balance, including glucose, amino acids, bicarbonate, water, phosphate, chloride, sodium, magnesium, and potassium ions.</li>
          <li><strong>Fluid Balance and Blood Pressure:</strong> They maintain total fluid balance and control blood pressure by managing the amount of water, salts, and minerals in the body.</li>
          <li><strong>Filtering Waste:</strong> The kidneys filter waste products and harmful substances from the blood, using millions of microscopic blood filters to clean the blood.</li>
          <li><strong>Regulating Other Functions:</strong> They produce hormones that aid in red blood cell production, bone health, and blood pressure regulation. They also help regulate nutrient levels like calcium and potassium in the body.</li>
          <li><strong>Daily Function:</strong> Every 24 hours, the kidneys filter and return approximately 200 quarts of fluid to the bloodstream, excreting about two quarts as urine and retaining approximately 198 quarts in the body. The urine stays in the bladder for one to eight hours before being expelled.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Taking Care of Your Kidneys</h2>
        <ul className="list-disc list-inside mb-4 text-lg text-gray-700">
          <li><strong>Choose Heart-Healthy Foods:</strong> Eat fresh fruits, vegetables, whole grains, and low-fat or fat-free dairy products. Limit your intake of salt and added sweets. Keep sodium intake under 2,300 milligrams per day and added sugars to less than 10% of your daily calories.</li>
          <li><strong>Avoid or Control Diseases:</strong> Prevent and manage diseases that can damage the kidneys, such as diabetes and high blood pressure. Address urinary tract infections (UTIs) promptly to avoid kidney damage.</li>
          <li><strong>Maintain a Healthy Weight:</strong> Strive for a healthy weight by using tools like the NIH Body Weight Planner to manage calorie and physical activity routines. Aim for at least 30 minutes of physical activity on most days.</li>
          <li><strong>Get Enough Rest:</strong> Aim for 7 to 8 hours of sleep each night and work on improving your sleep patterns.</li>
          <li><strong>Avoid Tobacco and Limit Alcohol:</strong> Stop smoking or using tobacco products, and limit alcohol consumption to no more than two drinks per day for women and men alike.</li>
          <li><strong>Manage Stress:</strong> Engage in stress-relieving activities to enhance both mental and physical health.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
        <p className="text-lg text-gray-700">
          The kidneys are vital organs in the human body, playing a key role in controlling blood pressure, blood sugar levels, and reducing the risk of heart disease. To maintain kidney health, adopt a balanced diet, exercise regularly, and seek prompt medical attention for any kidney-related issues. Taking these steps will help ensure your kidneys function effectively and support your overall well-being.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Kidneys;

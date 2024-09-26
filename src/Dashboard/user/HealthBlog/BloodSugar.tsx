import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import Image from "../../../assets/Images/BloodSugar.jpg";
import Footer from '../../../layout/userLayout/footer';

const BloodSugar: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />

      {/* First Section: Title, First Paragraph, and Image */}
      <div className="flex flex-wrap p-4">
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-xl font-bold mb-4">Understanding Diabetes</h1>
          <p>
            Diabetes is a chronic health condition that occurs when the body has elevated levels of blood sugar (glucose) over a prolonged period. This condition arises due to the body's inability to produce enough insulin, a hormone produced by the pancreas that regulates blood sugar levels, or because the body is unable to use insulin effectively. When left unmanaged, high blood sugar can lead to serious complications, progressively damaging vital organs and systems throughout the body.
          </p>
          <p>
            Over time, elevated glucose levels can cause severe damage to the heart, leading to an increased risk of heart disease and stroke. The blood vessels throughout the body, particularly in the extremities, may become weakened or narrowed, leading to poor circulation and a higher likelihood of developing ulcers or gangrene. Eyesight can also deteriorate due to the damage of blood vessels in the retina, potentially resulting in diabetic retinopathy, which, if untreated, can lead to blindness. Additionally, the kidneys are at risk of becoming overworked and damaged, which can lead to chronic kidney disease or even kidney failure.
          </p>
          <p>
            Diabetes also affects the nervous system, leading to neuropathy — nerve damage that often manifests as numbness, tingling, or pain in the hands and feet. This nerve damage can severely impact a person’s quality of life, reducing mobility and increasing the risk of falls and injuries. The complications associated with diabetes extend to other areas as well, such as the skin, gums, and digestive system, highlighting the importance of maintaining proper blood sugar levels and adhering to a comprehensive management plan that includes diet, exercise, medication, and regular monitoring.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-4 flex items-center justify-center lg:justify-end">
          <img src={Image} alt="Diabetes" className="w-full h-auto max-w-xl rounded-lg shadow-md" />
        </div>
      </div>

      {/* Remaining Content: Full-Width */}
      <div className="w-full p-4">
        <p>
          Most of the food you eat is converted into sugar (glucose) by your body and released into your bloodstream. When your blood sugar rises, your pancreas sends a signal to release insulin. Insulin acts like a key, allowing blood sugar to enter cells and be used as energy. And it happens when your body does not produce enough insulin or does not use it as effectively as it should. When there is insufficient insulin or when cells stop responding to insulin, too much blood sugar remains in your bloodstream. This can lead to major health problems over time such as heart disease, loss of vision and kidney disease.
        </p>

        <h2 className="text-xl font-bold mt-6">Types of Diabetes</h2>
        <p>
          Diabetes is classified into two types:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Type 1:</strong> When you have type 1 diabetes, your pancreas stops producing insulin. It is often seen in teenagers but can also occur in adults. It accounts for 5-10% of patients.
          </li>
          <li>
            <strong>Type 2:</strong> Type 2 diabetes develops when your body becomes resistant to insulin and sugar builds up in your blood. This is the most common type, affecting about 90% to 95% of people with diabetes. Within this, gestational diabetes is a condition that occurs during pregnancy but may go away after the baby is born.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-6">Diabetes Myths and Facts</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Myth:</strong> Because no one in my family has diabetes, I will not develop the condition.<br />
            <strong>Fact:</strong> While a family history of diabetes increases your risk, many people with diabetes have no close relatives with the condition.
          </li>
          <li>
            <strong>Myth:</strong> Because I’m overweight, I’m more likely to get diabetes.<br />
            <strong>Fact:</strong> Being overweight increases your risk, but many overweight people never develop diabetes. People of normal weight can also develop diabetes.
          </li>
          {/* Add remaining myths and facts here */}
        </ul>

        <h2 className="text-xl font-bold mt-6">Conclusion</h2>
        <p>
          There is a high prevalence of myths about diabetes which may be associated with poor early health-seeking behavior and poor adherence to treatment. Misconceptions about diabetes can hinder people from seeking proper treatment. Educating people about diabetes and its treatment options is crucial in controlling and preventing the disease.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BloodSugar;

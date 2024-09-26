import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import Image from "../../../assets/Images/vitaminD.jpeg";
import Footer from '../../../layout/userLayout/footer';

const VitaminD: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
    <div className="bg-white p-8 max-w-full mx-auto shadow-lg rounded-lg mt-5">
      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Text Column */}
        <div className="flex-1 lg:pr-6 mb-6 lg:mb-0">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Understanding Vitamin D</h1>

          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            The body needs nutrients in small amounts to function and stay healthy. Vitamin D helps the body use calcium and phosphorus to build strong bones and teeth. It is fat-soluble (it dissolves in fats and oils) and can be found in fatty fish, egg yolks, and dairy products. Vitamin D can be produced by the skin that is exposed to sunlight. Laboratory studies suggest that vitamin D may help control infection and reduce inflammation. In addition, many organs and tissues in the body have vitamin D receptors, which play important roles beyond bone health.
          </p>

          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Vitamin deficiency occurs when your body does not have enough vitamin D. It is mostly responsible for problems with your bones and muscles. Vitamin D is a nutrient that your body requires for normal bone development and preservation. It is also important for the neurological, musculoskeletal, and immune systems.
          </p>

          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Vitamin D is required for a variety of biological activities. Some vitamin D is obtained from dietary sources, but most are obtained from sun exposure. After it is absorbed, the body must convert it into its active form.
          </p>
        </div>

        {/* Image Column */}
        <div className="flex-1 lg:pl-6">
          <img
            src={Image}
            alt="Vitamin D and Sunlight"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Remaining Content */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Vitamin D Deficiency Causes</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li><strong className="text-gray-800">Diet:</strong> People who do not consume enough vitamin D-rich foods, such as fortified dairy products and cereals, may have low levels.</li>
        <li><strong className="text-gray-800">Smoking:</strong> Deficiency levels are higher in smokers. Some experts believe that smoking may disrupt the gene that initiates the production of vitamin D in the body.</li>
        <li><strong className="text-gray-800">Skin type:</strong> People with darker skin need more sun exposure than people with lighter skin to manufacture Vitamin D. People with fair skin or a family history of skin cancer should avoid sun exposure to protect their skin.</li>
        <li><strong className="text-gray-800">Living factors:</strong> Some people spend little time outside because of jobs, illness, lack of outdoor space in their community, or other circumstances. Whether for sun protection or for cultural or religious reasons, they may be at higher risk of deficiency.</li>
        <li><strong className="text-gray-800">Certain medicines:</strong> Some medicines reduce the body’s ability to absorb or make vitamin D. These include steroids and some cholesterol-lowering drugs.</li>
        <li><strong className="text-gray-800">Weight loss surgery:</strong> Bariatric surgery is a concern because after gastric bypass there is a lack of calcium in the diet and this can lead to bone disease. This increases the chances of Vitamin D deficiency.</li>
        <li><strong className="text-gray-800">Obesity:</strong> According to research, its level also decreases in obese people or those who have a high body mass index. This association may be due to how body fat affects the absorption of vitamin D. Obese people spend less time outdoors due to mobility concerns.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Symptoms of Vitamin D Deficiency</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Bone pain.</li>
        <li>Loss of hair.</li>
        <li>Appetite loss.</li>
        <li>Muscle fatigue.</li>
        <li>Skin tone is light.</li>
        <li>Sleeping problems.</li>
        <li>Getting sick more frequently.</li>
        <li>Mood changes, such as depression.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Treatment</h2>
      <p className="mb-6 text-lg text-gray-700 leading-relaxed">
        To maintain an appropriate vitamin D level in your body, you may also find it helpful to eat more vitamin D-rich foods, such as fatty fish and fortified dairy products. If a blood test shows that a person is or is at risk of vitamin D deficiency, they will advise you to increase your intake after consulting a doctor. You should try to get more sunlight. The amount of vitamin D a person needs depends on factors including age, diet, and health conditions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Conclusion</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Vitamin D is essential for the proper health of the body. Many people have vitamin D levels below the recommended level for optimal health. Vitamin D is mostly obtained by UVB radiation worldwide in the form of sunlight and dermal vitamin D production. Revised recommended dietary intake levels for vitamin D are needed to be advised to patients and physicians alike.
      </p>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
};

export default VitaminD;

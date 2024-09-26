import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import Image from "../../../assets/Images/AviodSmoking1.jpeg"
import Footer from '../../../layout/userLayout/footer';

const QuitSmoking: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
    <div className="p-6 max-w-10xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8">
      {/* Flex container for image and first paragraph */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mb-6">
        {/* First Paragraph */}
        <div className="lg:w-1/2 pr-6">
          <h1 className="text-2xl font-bold mb-4">Quit Smoking: A Path to Better Health</h1>
          <p className="text-lg text-gray-700 mb-4">
            We are all aware of the dangers of smoking, but that does not make it any easier to quit. The craving for tobacco or the urge to smoke can be intense for most tobacco users. It can be difficult to quit whether you are a casual teen smoker or an adult smoker. However, you can resist these desires.
          </p>
          <p className="text-lg text-gray-700 mb-6">
          The sooner you quit smoking, the sooner it will reduce your risk of cancer, heart and lung disease, and other diseases related to smoking. In such a situation, it is better for you to quit smoking soon.
        </p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 lg:flex-shrink-0">
          <img 
            src={Image} 
            alt="Quit Smoking" 
            className="w-full rounded-lg shadow-md" 
          />
        </div>
      </div>

      {/* Full-width content below */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Effects of Long-Term Smoking</h2>
        <p className="text-lg text-gray-700 mb-4">
          Long-term smoking can cause many diseases. It has been linked to cancer, heart disease, stroke, lung disease, diabetes, and chronic obstructive pulmonary disease (COPD), which includes emphysema and chronic bronchitis. Smoking also increases the risk of immune system problems such as tuberculosis, certain eye diseases, and rheumatoid arthritis. Following are the long-term side effects of smoking:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li>Impotence.</li>
          <li>Heart disease.</li>
          <li>Loss of senses.</li>
          <li>Breathing difficulty.</li>
          <li>High blood pressure.</li>
          <li>Potential hearing loss.</li>
          <li>Yellow teeth and rotten teeth.</li>
          <li>Cancers of the stomach and bladder.</li>
          <li>Higher stroke and brain damage risk.</li>
          <li>Sperm damage and sperm reduction.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Tips for Quitting Smoking</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li><strong>Find your purpose:</strong> You must have a personal motive for quitting smoking. This may be to keep your family safe from second-hand smoke or to reduce your chances of developing lung cancer, heart disease, or other diseases. Choose a compelling reason you want to look and feel young that exceeds the desire for a cigarette.</li>
          <li><strong>Avoid alcohol and other triggers:</strong> When you drink, it is more difficult to maintain your non-smoker goal. Try to reduce your alcohol consumption. Similarly, if you usually smoke after a meal, try something else, such as going for a walk, talking to friends, or chewing gum.</li>
          <li><strong>Consume fruits and vegetables:</strong> Do not try to diet while quitting smoking. Excessive deprivation can backfire. Instead, consume more fruits, vegetables, healthy grains, and lean proteins. These are beneficial for your overall health.</li>
          <li><strong>Give yourself a break:</strong> Find new ways to relax once you quit smoking. Options include listening to music, chatting with friends, getting a massage, or engaging in a hobby. Avoid stressful situations in the initial weeks after quitting.</li>
          <li><strong>Trust your friends and family:</strong> Inform your friends, family, and people close to you that you are trying to quit smoking. They can offer motivation and support. You might also consider talking to a counselor or joining a support group. Behavioral therapy can be beneficial in developing techniques to quit smoking.</li>
          <li><strong>Track your habits with an app:</strong> Use apps to track smoking habits and nicotine cravings. This information can help you replace old unhealthy behaviors with new, healthy ones. There are various free web tools available for tracking progress.</li>
          <li><strong>Nicotine replacement therapy:</strong> Nicotine replacement treatment (NRT) provides low levels of nicotine to ease withdrawal symptoms. It may help reduce cravings, nausea, insomnia, mood swings, and trouble concentrating.</li>
          <li><strong>Maintain Your Confidence:</strong> Stay optimistic and focus on positive improvements. Be kind to yourself and have confidence in your ability to quit smoking. This attitude will help you navigate the ups and downs of quitting.</li>
          <li><strong>Physical activity and walking:</strong> Physical activity can help manage tobacco cravings. Simple efforts, like running up and down stairs or taking walks, can reduce the urge to smoke.</li>
          <li><strong>Vitamins B and C:</strong> Smokers often have lower levels of vitamin B and vitamin C. B vitamins help stabilize mood, while vitamin C is an antioxidant that may protect the lungs from oxidative damage caused by smoking. Consuming these vitamins can support your quit-smoking efforts.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
        <p className="text-lg text-gray-700">
          Quitting smoking is beneficial at any age. It improves health and quality of life, reduces the risk of premature death, and can increase life expectancy by up to a decade. Despite many attempts to quit each year, less than half of smokers succeed. Embrace the journey towards a healthier, smoke-free life.
        </p>
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
};

export default QuitSmoking;

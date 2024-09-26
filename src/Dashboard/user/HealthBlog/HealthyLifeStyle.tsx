import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import Footer from '../../../layout/userLayout/footer';

// Import images
import balancedDietImage from "../../../assets/Images/deit.png";
import exerciseImage from "../../../assets/Images/exercise1.jpg";
import sleepImage from "../../../assets/Images/sleep.jpg";
import stressImage from "../../../assets/Images/stress2.jpeg";
import socialConnectionsImage from "../../../assets/Images/social-Connections.png";
import avoidSmokingImage from "../../../assets/Images/AviodSmoking1.jpeg";
import hygieneImage from "../../../assets/Images/hygiene1.jpg";
import mentalHealthImage from "../../../assets/Images/mental-health.jpeg";
import healthScreeningsImage from "../../../assets/Images/health-screenings.jpg";
import positiveAttitudeImage from "../../../assets/Images/positive-attitude.jpg";


const HealthyLifeStyle: React.FC = () => {
  const sections = [
    {
      image: balancedDietImage,
      title: "1. Maintain a Balanced Diet",
      content: (
        <>
          <p>A balanced diet is crucial for good health and wellbeing. Aim to consume a variety of foods that provide all the essential nutrients your body needs:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Fruits and Vegetables:</strong> Fill half your plate with fruits and vegetables. They provide vitamins, minerals, and fiber.</li>
            <li><strong>Whole Grains:</strong> Opt for whole grains like oats, brown rice, and whole wheat over refined grains. They are richer in fiber and help with digestion.</li>
            <li><strong>Lean Proteins:</strong> Include lean sources of protein like chicken, fish, beans, nuts, and legumes. These help in building muscles and repairing tissues.</li>
            <li><strong>Healthy Fats:</strong> Choose unsaturated fats found in olive oil, nuts, seeds, and avocados while limiting saturated fats and trans fats.</li>
            <li><strong>Hydration:</strong> Drink plenty of water. Staying hydrated helps maintain the balance of bodily fluids and supports many essential bodily functions.</li>
          </ul>
        </>
      ),
    },
    {
      image: exerciseImage,
      title: "2. Exercise Regularly",
      content: (
        <>
          <p>Physical activity is essential for maintaining a healthy body and mind:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Cardiovascular Exercise:</strong> Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity every week. Activities like walking, jogging, swimming, and cycling are great for cardiovascular health.</li>
            <li><strong>Strength Training:</strong> Include strength training exercises at least twice a week. Resistance exercises like lifting weights or using resistance bands help build and maintain muscle mass, which is important for metabolic health.</li>
            <li><strong>Flexibility and Balance Exercises:</strong> Practice yoga or stretching exercises to improve flexibility and reduce the risk of injuries. Balance exercises are especially important for older adults to prevent falls.</li>
          </ul>
        </>
      ),
    },
    {
      image: sleepImage,
      title: "3. Get Enough Sleep",
      content: (
        <>
          <p>Sleep plays a critical role in maintaining both physical and mental health:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Quality and Quantity:</strong> Adults should aim for 7-9 hours of sleep per night. Quality sleep helps restore energy, repair muscle tissue, and consolidate memory.</li>
            <li><strong>Create a Sleep Routine:</strong> Go to bed and wake up at the same time every day, even on weekends, to regulate your body's internal clock.</li>
            <li><strong>Optimize Your Sleep Environment:</strong> Keep your bedroom dark, quiet, and cool. Avoid screens at least an hour before bedtime, as blue light can interfere with sleep quality.</li>
          </ul>
        </>
      ),
    },
    {
      image: stressImage,
      title: "4. Manage Stress Effectively",
      content: (
        <>
          <p>Chronic stress can negatively impact health in various ways, so it's important to find healthy ways to manage it:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Mindfulness and Meditation:</strong> Practice mindfulness, deep breathing exercises, or meditation daily. These techniques help calm the mind and reduce anxiety.</li>
            <li><strong>Physical Activity:</strong> Exercise is a proven stress reliever that releases endorphins, which are natural mood elevators.</li>
            <li><strong>Time Management:</strong> Prioritize tasks, set realistic goals, and delegate responsibilities to avoid feeling overwhelmed. Consider keeping a journal or planner to manage your time effectively.</li>
          </ul>
        </>
      ),
    },
    {
      image: socialConnectionsImage,
      title: "5. Maintain Social Connections",
      content: (
        <>
          <p>Building and maintaining healthy relationships is crucial for mental and emotional well-being:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Stay Connected:</strong> Make time to connect with family and friends, even if it's just a quick call or text.</li>
            <li><strong>Join a Community Group:</strong> Participate in community activities, clubs, or groups that align with your interests to foster a sense of belonging and purpose.</li>
            <li><strong>Seek Support:</strong> Reach out to loved ones or professionals if you’re feeling isolated or lonely. Having a support network is essential for emotional health.</li>
          </ul>
        </>
      ),
    },
    {
      image: avoidSmokingImage,
      title: "6. Avoid Smoking and Limit Alcohol",
      content: (
        <>
          <p>Smoking and excessive alcohol consumption are major risk factors for many diseases:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Quit Smoking:</strong> Smoking is the leading cause of preventable death. Seek professional help, such as counseling or medications, to quit smoking.</li>
            <li><strong>Limit Alcohol Intake:</strong> If you drink alcohol, do so in moderation. This means up to one drink per day for women and up to two drinks per day for men. Avoid binge drinking and seek help if you have trouble limiting your alcohol consumption.</li>
          </ul>
        </>
      ),
    },
    {
      image: hygieneImage,
      title: "7. Practice Good Hygiene",
      content: (
        <>
          <p>Maintaining good hygiene is essential to prevent infections and promote health:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Hand Washing:</strong> Wash your hands frequently with soap and water, especially before eating, after using the restroom, and after coughing or sneezing.</li>
            <li><strong>Oral Hygiene:</strong> Brush your teeth at least twice a day and floss daily to prevent oral health issues.</li>
            <li><strong>Clean Environment:</strong> Keep your living and work environment clean. Regularly disinfect surfaces and reduce clutter to minimize the spread of germs.</li>
          </ul>
        </>
      ),
    },
    {
      image: mentalHealthImage,
      title: "8. Stay Mentally Active",
      content: (
        <>
          <p>Keeping your mind sharp is as important as keeping your body healthy:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Learn New Skills:</strong> Challenge your brain by learning new things, such as a language, an instrument, or a new hobby.</li>
            <li><strong>Read Regularly:</strong> Reading stimulates mental activity and helps improve cognitive function. Try reading a mix of genres to broaden your perspective.</li>
            <li><strong>Puzzles and Games:</strong> Engage in activities like puzzles, chess, or strategy games that require critical thinking and problem-solving.</li>
          </ul>
        </>
      ),
    },
    {
      image: healthScreeningsImage,
      title: "9. Get Regular Health Screenings",
      content: (
        <>
          <p>Regular check-ups and screenings are vital for preventing and managing health issues:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Routine Check-ups:</strong> Visit your healthcare provider for regular health screenings, vaccinations, and check-ups. This helps detect potential health issues early.</li>
            <li><strong>Monitor Key Health Indicators:</strong> Keep track of your blood pressure, cholesterol, blood sugar levels, and weight. Early detection can prevent more serious health problems.</li>
            <li><strong>Follow Medical Advice:</strong> Take prescribed medications as directed and follow your doctor's advice regarding any health conditions.</li>
          </ul>
        </>
      ),
    },
    {
      image: positiveAttitudeImage,
      title: "10. Embrace a Positive Attitude",
      content: (
        <>
          <p>A positive mindset can greatly influence your overall health and wellbeing:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Practice Gratitude:</strong> Start a daily gratitude journal where you write down things you are thankful for. This practice can improve mood and reduce stress.</li>
            <li><strong>Stay Optimistic:</strong> Focus on solutions rather than problems. Optimism is linked to better health outcomes and increased longevity.</li>
            <li><strong>Self-Compassion:</strong> Be kind to yourself, especially during challenging times. Avoid self-criticism and focus on self-care.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen">
      <PatientNavbar />
      <div className="p-4 md:p-8 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-900">10 Tips for a Healthy Lifestyle</h2>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center`}
            >
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-90"
                />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HealthyLifeStyle;

import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import Image from "../../../assets/Images/Child.jpeg";
import Footer from '../../../layout/userLayout/footer';

const ChildObesity: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <div className="flex flex-wrap">
        {/* First Section: Title, First Paragraph, and Image */}
        <div className="w-full lg:w-1/2 p-4 ">
          <h5 className="text-3xl font-bold mb-4">Childhood Obesity</h5>
          <p className="mb-4">
            Childhood obesity, also referred to as childhood obesity risk or increased risk of childhood obesity, is an increasingly common condition. It is not just a problem among the affluent; most middle-class households are now affected. Obesity among children increases their chances of developing type 2 diabetes, high blood pressure, heart disease, and certain cancers. In fact, according to the Centers for Disease Control and Prevention (CDC), over 15.5% of Indian children are obese or overweight. The World Health Organization defines child obesity as a body mass index (BMI) equal to or greater than the 85th percentile for age and sex. There are many causes of childhood obesity that range from genetics to environment. This article lists the top 7 causes of childhood obesity along with some effective tips on how you can prevent your child from getting fat.
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-16  flex items-center justify-center lg:justify-end">
          <img src={Image} alt="Child" className="w-full h-auto max-w-xl rounded-lg shadow-md" />
        </div>
      </div>

      {/* Remaining Content: Full-Width */}
      <div className="w-full p-4">
        <h2 className="text-2xl font-bold mt-[-40px]">Causes:</h2>
        <h3 className="text-lg font-semibold mt-4">Genetics and Obesity</h3>
        <p>
          Genetics is one of the strongest factors associated with obesity. In fact, it is estimated that 68% of obesity is caused by genetics. Obesity can also be caused by an under-developed “hunger’s brake” system in the brain. Add to this, certain medications such as antidepressants, painkillers, seizure medicines, anti-psychotics, and anti-anxiety medications. Another cause of childhood obesity is lipodystrophy, a condition that causes a person’s fat tissue to be severely under-developed.
        </p>
        <h3 className="text-lg font-semibold mt-4">Behavior and Eating Habits</h3>
        <p>
          Another cause of childhood obesity is your child’s behavior. It is important to keep in mind that obesity is not just about eating the wrong food. It is also about the environment of eating, e.g., setting the expectation that food should be eaten, and the motivation behind eating. It is important to remember that children are influenced by their peers; if your child sees other children eating junk food, he/she might start eating junk food too. It is also important to remember that many children start eating unhealthy foods like junk food because they are bored or have little to do.
        </p>
        <h3 className="text-lg font-semibold mt-4">Diet-related Causes of Obesity in Children</h3>
        <ul className="list-disc pl-6">
          <li><strong>The High-calorie, Low-quality Diet:</strong> This is a diet that provides too many calories from unhealthy foods and too few vitamins, minerals, and fiber.</li>
          <li><strong>The Gluten-rich Diet:</strong> This is a diet rich in gluten, which has been linked to increased risk of obesity in children.</li>
          <li><strong>The Sugar-rich Diet:</strong> This diet is high in sugar and fructose and is linked to increased risks of obesity and Type 2 diabetes in children.</li>
          <li><strong>The Unhealthy Meal Combination:</strong> This is a meal combination that is high in saturated fat (e.g., a sandwich with cheese), sodium (e.g., a soda with a sandwich), or sugar (e.g., a muffin with a cup of soda).</li>
        </ul>
        <h2 className="text-xl font-bold mt-6">Effects of Obesity</h2>
        <ul className="list-disc pl-6">
          <li><strong>Type 2 Diabetes:</strong> This long-term illness alters how your child’s body utilizes sugar (glucose). The risk of type 2 diabetes is increased by obesity and a sedentary lifestyle.</li>
          <li><strong>High Blood Pressure and Cholesterol:</strong> The child may develop one or both of these illnesses as a result of a bad diet. These elements may help plaque accumulate in the arteries, which may restrict and harden the arteries later in life, possibly resulting in a heart attack or stroke.</li>
          <li><strong>Joint Ache:</strong> Additional weight puts additional strain on the knees and hips. Hips, knees, and back pain are two common side effects of childhood obesity.</li>
          <li><strong>Breathing Issues:</strong> Children that are overweight are more likely to have asthma. Additionally, obstructive sleep apnea, a potentially dangerous condition in which a child’s breathing regularly pauses and resumes as they sleep, is more likely to develop in these kids.</li>
          <li><strong>Fatty Liver Disease Not Caused by Alcohol (NAFLD):</strong> Fatty deposits accumulate in the liver as a result of this condition, which typically has no symptoms. Liver damage and scarring can result from NAFLD.</li>
          <li><strong>Social and Emotional Issues:</strong> Children who are obese may be teased or bullied by their classmates. This may lead to a decrease in self-worth and a higher risk of sadness and anxiety.</li>
        </ul>
        <h2 className="text-xl font-bold mt-6">Prevention of Obesity</h2>
        <h3 className="text-lg font-semibold mt-4">Right Childhood Environment and Nutrition</h3>
        <p>
          The right diet and nutrition during childhood can prevent obesity. In fact, many childhood obesity researchers believe that the best way to prevent childhood obesity is to provide healthy meals and snacks to children during their growing up years. If a child is offered healthy foods like fruits, vegetables, and whole grains, he/she is less likely to eat junk foods.
        </p>
        <h2 className="text-xl font-bold mt-6">Conclusion</h2>
        <p>
          Childhood obesity has become a serious health concern among children. There are many reasons behind this, including genetics and environment. In order to prevent childhood obesity, it is important to identify the causes of childhood obesity and implement effective preventative measures. You can prevent childhood obesity by setting a healthy example for your child. Make sure you eat a balanced diet and drink lots of water. You can also encourage your child to be physically active by going for walks with him/her and encouraging them to play sports. These are some effective tips that can help prevent childhood obesity. Childhood obesity is a serious issue that requires proper attention. Fortunately, this article has provided you with some key insights regarding the causes of childhood obesity in children, as well as effective tips on how you can prevent your child from getting fat.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ChildObesity;

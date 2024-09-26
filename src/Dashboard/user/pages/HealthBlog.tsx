import React from 'react';
import { Link } from 'react-router-dom';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import Footer from '../../../layout/userLayout/footer';
import HealthBlogCard from '../../../Components/CardComponent/HealthBlogCard';
import Image1 from "../../../assets/Images/healthy.jpg";
import Image2 from "../../../assets/Images/vitaminD.jpeg";
import Image3 from "../../../assets/Images/smoking.jpg";
import Image4 from "../../../assets/Images/kidneys.jpg";
import Image5 from "../../../assets/Images/Child.jpeg";
import Image6 from "../../../assets/Images/BloodSugar.jpg";

const HealthBlog: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h3 className="text-3xl font-bold text-center text-purple-900 mt-6">Health Blog</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Link to="/health-blog/healthy-lifestyle">
          <HealthBlogCard
            title="10 Tips for a Healthy Lifestyle"
            description="Explore 10 simple yet effective tips for maintaining a healthy lifestyle, from balanced nutrition to regular exercise, ensuring a happier and more energetic life."
            image={Image1}
            date="September 9, 2024"
          />
        </Link>
        <Link to="/health-blog/vitamin-d">
          <HealthBlogCard
            title="Vitamin-D Deficiency: Causes, Symptoms, and Treatment"
            description="Learn about the importance of Vitamin D for overall health, the causes and symptoms of deficiency, and how to prevent or treat it effectively."
            image={Image2}
            date="September 8, 2024"
          />
        </Link>
        <Link to="/health-blog/quit-smoking">
          <HealthBlogCard
            title="Quit Smoking: The Sooner, The Better"
            description="Understand the health risks associated with smoking and discover actionable steps to quit smoking sooner, improving your health and quality of life."
            image={Image3}
            date="September 8, 2024"
          />
        </Link>
        <Link to="/health-blog/kidneys">
          <HealthBlogCard
            title="Take Care of Your Kidneys"
            description="Discover essential tips and habits to maintain healthy kidneys, prevent kidney diseases, and understand the symptoms that should not be ignored."
            image={Image4}
            date="September 8, 2024"
          />
        </Link>
        <Link to="/health-blog/childhood-obesity">
          <HealthBlogCard
            title="Childhood Obesity: Causes, Effects & Prevention"
            description="Learn about the causes and health impacts of childhood obesity, and find out what steps can be taken by parents and caregivers to prevent it."
            image={Image5}
            date="September 8, 2024"
          />
        </Link>
        <Link to="/health-blog/blood-sugar">
          <HealthBlogCard
            title="Myths & Facts about Diabetes"
            description="Debunk common myths surrounding diabetes, understand the facts, and learn how to manage or prevent the condition with informed choices."
            image={Image6}
            date="September 8, 2024"
          />
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HealthBlog;

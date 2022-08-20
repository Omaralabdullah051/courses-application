import AboutSection from "./AboutSection";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import CourseFour from "./CourseFour";
import CourseOne from "./CourseOne";
import CourseThree from "./CourseThree";
import CourseTwo from "./CourseTwo";

const Home = () => {
  return (
    <div>
      <Banner />
      <CourseOne />
      <CourseTwo />
      <CourseThree />
      <CourseFour />
      <AboutSection />
      <ChooseUs />
    </div>
  );
};

export default Home;
